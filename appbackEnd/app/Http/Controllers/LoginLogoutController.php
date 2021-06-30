<?php

namespace App\Http\Controllers;

use App\Models\User as User;
use DateInterval;
use DateTime;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Crypt;
use File;
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
            'pays' => 'required',
      ]); 
      if ($validator->fails()) {          
        return response()->json(['Erreurs'=>$validator->errors()], 200);           
        }    
        else
        {
            $input = $req->all();  
            $check_email = User::where('email',$input['email'])->exists();
            if(!$check_email)
            {
            $check_user= User::where('user_name',$input['user_name'])->exists();
            if(!$check_user)
            {
            $input['password'] = bcrypt($input['password']);
            $user = User::create($input); 
            $success['token'] =  $user->createToken('AppName')->accessToken;
            $data=[
                'user_name'=>$user->user_name,
                'email'=> $user->email,
            ];
            try
            {
                Mail::send('welcomeSite', ["data1"=>$data], function ($message) use($user) {
               
                    $message->to($user->email);
                    $message->subject("$user->user_name,welcome in investissemnt site");
                    $message->from('oussamajamil01@gmail.com','OussamaJamil');
                });
                return response()->json(['Token'=>$success,'Data'=>$user->email],200); 
              
            }
            catch(Exception $ex)
            {
                return response()->json(['error'=>$ex->getMessage()],200); 
            }
           }
            else{
                return response()->json(['user_name'=>'user_name deja exists'],200);  
            }
            
            }
           else{
            return response()->json(['email'=>'email deja exists'],200);  
           }
          }
        }
           public function ActiverCompte($email)
           {
              DB::table('users')->where('email',$email)->update(['ActiveCompte'=>'oui']);
              return response()->json(['message'=>'compte Bien Activer'],200);
           } 
           
       function ForgetPass1(Request $req,$email)
       {
           $code=DB::table('users')->select('code_pass')->where('email',$email)->get();
           if($code[0]->code_pass==$req['code_pass'])
           {
               try
               {
                DB::table('users')->where('email',$email)->update(['password'=>bcrypt($req['password'])]);
                DB::table('users')->where('email',$email)->update(['code_pass'=>null]);
                   return response()->json(['message'=>'Mode Passe Bien Modifier'],200);
               }
               catch(Exception $ex)
               {
                return response()->json(['error'=>$ex->getMessage()],200);
               }
           }
           else{
            return response()->json(['error'=>'code deferont'],200);
           }
       }
       public function Modifierpassprofil(request $req)
       {
           $pass=DB::table('users')->select('password')->where('user_name',$req->user_name)->get();
           if(password_verify($req->password, $pass[0]->password)) {
             try
             {
              DB::table('users')->where('user_name',$req->user_name)->update(["password"=>bcrypt($req->nouveapass)]);
               return response()->json(['message'=>'bie modifier'],200);
             }
             catch(Exception $ex)
             {
                 return response()->json(["error"=>$ex->Message],200);
             }
          }
          else
          {
            return response()->json(['message'=>'mode passe incorect'],200);
          }
           
       }
        function ForgetPassemail(request $req )
        {
            try
            {
                $validator1 = Validator::make($req->all(), [ 
                    'email' => 'required|email',
                ]);
                if ($validator1->fails()) {          
                    return response()->json(['Erreurs'=>'tapez email correcte s\'il vpus plait'], 200);           
                    }    
                    else
                    {
                        $input = $req->all(); 
                       
                       $check=DB::table('users')->where('email',$input['email'])->exists();
                       if($check)
                       {
                        $users= User::where('email',$input['email'])->first();
                        $novellePasse=rand(10000000,90000000);
                        $data=[
                            'user_name'=>$users->user_name,
                            'email'=>$users->email,
                            'nouvellePasse'=>$novellePasse,
                            ]; 
                            try
                        {
                            Mail::send('forgPass',["data1"=>$data], function ($message) use($users) {
                           
                                $message->to($users->email);
                                $message->subject("$users->user_name,modifier mode passe");
                                $message->from('oussamajamil01@gmail.com','OussamaJamil');
                            });
                            DB::table('users')->where('email',$users->email)->update(['code_pass'=>$novellePasse]);
                            return response()->json(['message'=>'email Bien envoyer'],200); 
                          
                        }
                        catch(Exception $ex)
                        {
                            return response()->json(['Erreurs'=>$ex->getMessage()],200); 
                        }  
                       }
                       else
                       {
                        return response()->json(['Erreurs'=>' email invalide'],200); 
                       }
                    }    
                    }
                    catch(Exception $ex)
                    {
                        return response()->json(['connection'=>'erreur de systeme'],200); 
                    }
        }
        public function updatephotousers(Request $request,$id) 
        {
            $imageSupprimer=DB::table('users')->select('photo')->where('id',$id)->get();
            if($imageSupprimer!="images/user.png")
            {
                // File::delete($imageSupprimer);
            }
            $file = $request->file('photo');
            //$image=$file->getClientOriginalName();
            $image = time().'users'.'.'.$file->getClientOriginalExtension();
            $destinationPath ='assets/users/';
            $file->move($destinationPath,$image);
            $img=$destinationPath.$image;
            try
            {
                DB::table('users')->where('id',$id)->update(['photo'=>$img]);
                return response()->json(['message'=>$img],200);  
            }
            catch(exception $ex)
            {
                return response()->json(['error'=>$ex->getMessage()],200); 
            }
        
        }

 public function login(Request $r)
   {
            $input = $r->all(); 
            $check = User::where('email',$input['email'])->exists();
            if($check)
            {
                $users= User::where('email',$input['email'])->first();
                $verifypass = password_verify($input['password'], $users->password); 
                $user=DB::table('users')->select('id','user_name','Type','ActiveCompte')->where('email',$input['email'])->get();
                if($verifypass)
                {
                    if($user[0]->ActiveCompte=="non")
                    {
                       return response()->json(['errorActivation'=>'verifier email pour Activer Votre Compte'],200);
                    }
                    else
                    {
                        $success['token'] =  $users->createToken('AppName')->accessToken;
                        $r->session()->put('user_name',$user[0]->user_name); 
                        return response()->json(['success'=>$success,'type'=>$users,'compteActive'=>$user[0]->ActiveCompte],200); 
                        return redirect()->route('all'); 
                    }
                    
                }
                
                else{
                    return response()->json(['errorpass'=>'mode passe  incorrect'], 200);  
                }

            }
            else{
                return response()->json(['erroremail'=>'email  incorrect'], 200);  
            }
        
    }
    public function getUser_Connected(Request $request)
    {
        $user=DB::table('users')->where('user_name',$request->user_name)->get();
        return response()->json(['data'=>$user],200);
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        $request->session()->forget('user_name');
        return response()->json([
            'message' => 'Successfully logged out'
        ],200);
    }
    public function getAllUser()
    {
        try
        {
          $users=DB::table('users')->get();
          return response()->json([
            'data' =>  $users
        ],200);
        }
        catch(exception $ex)
        {
            return response()->json([
                'error' =>  $ex->getMessage()
            ],200);
        }
    }
}
