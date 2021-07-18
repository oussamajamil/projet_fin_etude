<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class likeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         
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
        
       $exist= DB::table('like_projets')->where([
        ['id_projet','=',$id_projet],
        ['user_id', '=',  $request->user_id],])->count();
        if($exist==0)
        {
            try
            {
                DB::table('like_projets')->insert([
                  'user_id'=>$request->user_id,
                  'id_projet'=>$id_projet
                ]);
                return response()->json(['message'=>'like bien ajouter'],200);
            }
            catch(Exception $ex)
            {
                return response()->json(['error'=>$ex->getMessage()],400);
            }
           
        }
        else
        {
            try
            {
             DB::table('like_projets')->where([
                ['id_projet','=',$id_projet],
                ['user_id', '=', $request->user_id],])->delete();
                return response()->json(['message'=>'like supprimer'],200);
             }
             catch(Exception $ex )
             {
                return response()->json(['error'=>$ex->getMessage()
            ],400);
             }
        }
        

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id_projet)
    {
        $like_projet=DB::table('like_projets')->where('id_projet','=',$id_projet)->get();
        if(count($like_projet)==0)
        {
            return response()->json(['message'=>'auccune like'],422);
        }
        else
           {
            return response()->json(['data'=>$like_projet],200);
           }
    }
    public function show_nombre($id_projet)
    {
        $like_projet=DB::table('like_projets')->where('id_projet','=',$id_projet)->count();
        return response()->json(['nembre like'=>$like_projet],200);
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
    }
}
