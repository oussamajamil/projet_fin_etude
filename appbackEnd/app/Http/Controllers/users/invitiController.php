<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\investissements as investissements;
use App\Models\Projet as Projet;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class invitiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projet =investissements::all();
        if (count($projet) == 0) {
        return response()->json([
                'message'  => "Aucun investissement(s) trouvé(s)!",
            ], 422);
        } else{
        return response()->json($projet, 200);

        }
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
    public function store(Request $request,$id)
    {
        $validator = Validator::make($request->all(), [ 
            'Prixdinvetissemnt'=> 'required',
        ]);
         if ($validator->fails()) {   
             return response()->json(['error'=>$validator->errors()], 401);     
            }
        else{
        $user_name=session()->get('user_name');
        $user=DB::table('users')->select('id','nom','prenom')->where('user_name','=',$user_name)->get();
         
        try
        {
            DB::table('investissements')->insert([
                'user_id'=> $user[0]->id,
                'id_projet'=> $id,
                'Prixdinvetissemnt'=> $request->Prixdinvetissemnt,
                ]);
              return response()->json([
                'message' =>'Bien Ajouter',
              ], 200);
           $projet= DB::table('projets')->select(' prix_total','Prix_payes','Prix_rest')->where('id','=',$id)->get();
              DB::table('projets')->where('id',$id)->update([
                'Prix_rest'  => $projet[0]->prix_total-$projet[0]->Prix_payes,
              ]);

            } 
            catch(Exception $ex)
            {

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
        $projet=DB::table('investissements')->where('id_projet',$id_projet)->get();
        if(count($projet)==0)
        {
            return response()->json([
                'message' =>'auccun investissements ',
              ], 422);
        }
        else
        {
            return response()->json([
                'data' =>  $projet,'count'=>($projet)
              ], 200);
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
        $invi = investissements::find($id);
        if ($invi == null) {
            return response()->json([
                    'message'  => "investissements introuvable!",
              ], 422);
         } 
         else{
            investissements::destroy($id);
             return response()->json([
                'message' =>'investissements bien supprimé',
            ], 200);
        }
         
    }
}
