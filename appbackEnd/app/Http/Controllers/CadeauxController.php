<?php

namespace App\Http\Controllers;

use App\Models\cadeaux;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CadeauxController extends Controller
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
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try
        {
            DB::table('cadeauxes')->insert(
                [
                    'projet_id'=>$request->projet_id,
                    'titre'=>$request->titre,
                    'description'=>$request->description,
                    'Rechargeable'=>$request->Rechargeable,
                    'prix_debut'=>$request->prix_debut,
                    'prix_fin'=>$request->prix_fin,
                ]);
                return response()->json(['message'=>'cadeaux Bien Enregistrer'],200);
        }
        catch(Exception $ex)
        {
            return response()->json(['error'=>$ex->getMessage()],200);   
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\cadeaux  $cadeaux
     * @return \Illuminate\Http\Response
     */
    public function show($projet_id)
    {
        try
        {
            $cad= DB::table('cadeauxes')->where('projet_id',$projet_id)->get();
            if($cad==null)
            {
                return response()->json(['message','auccun cadeax'],200);
            }
            else
            {
                return response()->json(['data',$cad],200);
            }
        }
        catch(Exception $ex)
        {
            return response()->json(['error',$ex->getMessage()],200);
        }
     
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\cadeaux  $cadeaux
     * @return \Illuminate\Http\Response
     */
    public function edit(cadeaux $cadeaux)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\cadeaux  $cadeaux
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, cadeaux $cadeaux)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cadeaux  $cadeaux
     * @return \Illuminate\Http\Response
     */
    public function destroy(cadeaux $cadeaux)
    {
        //
    }
}
