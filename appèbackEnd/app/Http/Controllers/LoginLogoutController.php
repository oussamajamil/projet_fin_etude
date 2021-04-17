<?php

namespace App\Http\Controllers;

use App\Models\User as User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Sentinel;
use Reminder;
class LoginLogoutController extends Controller
{
    public function register(Request $req)
    {
        $validator = Validator::make($req->all(), [ 
            'nom' => 'required',
            'prenom' => 'required',
            'user_name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8',  
            'c_password' => 'required|same:password', 
            'Tele' => 'required',
            'pays' => 'required',
           
      ]); 
      if ($validator->fails()) {          
        return response()->json(['Erreurs'=>$validator->errors()], 401);           
        }    
        else
        {
            $input = $req->all();  
            $check = User::where('email',$input['email'])->exists();
            if(!$check)
            {
            $input['password'] = bcrypt($input['password']);
            $user = User::create($input); 
            $success['token'] =  $user->createToken('AppName')->accessToken;
            $data=[
                'user_name'=>$user->user_name,
                
            ];
            try
            {
                Mail::send('welcomeSite', ["data1"=>$data], function ($message) use($user) {
               
                    $message->to($user->email);
                    $message->subject("$user->user_name,welcome in investissemnt site");
                    $message->from('oussamajamil01@gmail.com','OussamaJamil');
                });
                return response()->json(['success'=>$success],200); 
              
            }
            catch(Exception $ex)
            {
                return response()->json(['error'=>$ex->getMessage()],400); 
            }
            
            
           } 
           else{
            return response()->json(['error'=>'email deja exists'],400);  
           }
          }
        }

        public function login(Request $r)
   {
    $validator = Validator::make($r->all(),[ 
        'email' => 'required|email',
        'password' => 'required|min:8',  
    ]);
    if ($validator->fails()) {          
        return response()->json(['Erreurs'=>$validator->errors()], 401);           
        } 
        else
        {
            $input = $r->all(); 
            $check = User::where('email',$input['email'])->exists();
            if($check)
            {
                $users= User::where('email',$input['email'])->first();
                $verifypass = password_verify($input['password'], $users->password); 
                if($verifypass)
                {
                    $success['token'] =  $users->createToken('AppName')->accessToken;
                    $user=DB::table('users')->select('id','user_name','Type')->where('email',$input['email'])->get();
                    $r->session()->put('user_name',$user[0]->user_name); 
                    return response()->json(['success'=>$success,'type'=>$user],200); 
                    return redirect()->route('all'); 
                }
                
                else{
                    return response()->json(['error'=>'mode passe  incorrect'], 401);  
                }

            }
            else{
                return response()->json(['error'=>'email  incorrect'], 401);  
            }
        }
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        $request->session()->forget('user_name');
        return response()->json([
            'message' => 'Successfully logged out'
        ],200);
    }
}
