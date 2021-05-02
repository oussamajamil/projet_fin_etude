<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use FFI\Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class commentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$id_projet)
    {
        $validator = Validator::make($request->all(), [ 
            'content' => 'required',
           
      ]); 
      if ($validator->fails()) {          
        return response()->json(['Erreurs'=>$validator->errors()], 401);           
        }    
        else
        {
            $user_name=session()->get('user_name');
            $user=DB::table('users')->select('id','nom','prenom')->where('user_name','=',$user_name)->get();
            try
            {
                DB::table('comments')->insert([
                  'user_id'=>$user[0]->id,
                  'id_projet'=>$id_projet,
                  'content'=>$request->content

                ]);
                return response()->json(['message'=>'comment bien ajouter'],422);
            }
            catch(Exception $ex)
            {
                return response()->json(['error'=>$ex->getMessage()],400);
            }
        }

        }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show_commant($id_projet)
    {
        $comm=DB::table('comments')->where('id_projet','=',$id_projet)->get();
        if(count($comm)==0)
        {
            return response()->json(['message'=>'auccun comment'],422);
        }
        else
        {
            return response()->json(['data'=>$comm],422); 
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update_comm(Request $request, $id)
    {
        try
        {
            DB::table('comments')->where('id',$id)->update(['content' => $request->content]);
            return response()->json(['message'=>'bien modifier']);
        }
        catch(Exception $ex)
        {
            return response()->json(['error'=>$ex->getMessage()]);
        }
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment = Comment::find($id);
        if ($comment == null) {
            return response()->json([
                    'message'  => "projet introuvable!",
              ], 422);
         } 
         else{
            Comment::destroy($id);
             return response()->json([
                'message' =>'projet bien supprimé',
            ], 200);
        
        }
    }
}
