<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projet as Projet;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class projetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projet = Projet::all();
        if (count($projet) == 0) {
        return response()->json([
                'message'  => "Aucun projet(s) trouvé(s)!",
            ], 200);
        } else{
        return response()->json(['data1'=>$projet], 200);
    }

    }
    public function projet_tres_cher()
    {

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
        $validator = Validator::make($request->all(), [ 
            'images' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'nom_projet' => 'required',
            'Ncompte' => 'required',
            'description'=> 'required',
            'prix_total'=> 'required',
            'Catégorie'=> 'required',
            'date_fin_projet'=> 'required',
        ]);
         if ($validator->fails()) {   
             return response()->json(['error'=>$validator->errors()], 401);     
            }
        else{
            $file = $request->file('images');
            //$image=$file->getClientOriginalName();
            $image = time().'.'.$file->getClientOriginalExtension();
            $destinationPath ='assets/admin/uploads/images/';
            $file->move($destinationPath,$image);
             $user_name=session()->get('user_name');
            $img=$destinationPath.$image;
             $user=DB::table('users')->select('id','nom','prenom')->where('user_name','=',$user_name)->get();  
        try
        {
            DB::table('projets')->insert([
                'user_id'=> $user[0]->id,
                 'images' => $img,
                'nom_projet' => $request->nom_projet,
                'Ncompte' => $request->Ncompte,
                'description'=>$request->description,
                'prix_total'=> $request->prix_total,
                'Catégorie'=> $request->Catégorie,
                'Url_vedio_youtube'=> $request->Url_vedio_youtube,
                'date_fin_projet'=> $request->date_fin_projet,
                ]);
              return response()->json([
                'message' =>'projet bien ajouté',
              ], 200);
          
        }
        catch(Exception $ex)
        {
            return response()->json([
                'error' =>$ex->getMessage(),
              ], 200);

        }
      

    }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($nom_projet)
    {
        $projet=DB::table('projets')->where('nom_projet',$nom_projet)->get();
        if (count($projet) == 0) {
            return response()->json([
                    'message'  => "Aucun projet(s) trouvé(s)!",
                ], 422);
            } else{
            return response()->json($projet, 200);
            }
    }
    
    public function monProjets(Request $r)
    {
        $user_id=DB::table('users')->select('id','nom','prenom')->where('user_name',$r->session()->get('user_name'))->get();
        $projet=DB::table('projets')->where('user_id', $user_id[0]->id)->get();
        if (count($projet) == 0) {
            return response()->json([
                    'message'  => "Aucun projet(s) trouvé(s)!",
                ], 422);
            } else{
            return response()->json($projet, 200);
            }
        return response()->json();
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
    public function Modifier(Request $request, $id)
    {
        $projet = Projet::find($id);
        if ($projet == null) {
            return response()->json([
                    'message'  => "projet introuvable!",
            ], 422);
        } else{

            $v = Validator::make($request->all(), [ 
                'images' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'nom_projet' => 'required',
                'Ncompte' => 'required',
                'description'=> 'required',
                'prix_total'=> 'required',
                'Catégorie'=> 'required',
                'date_fin_projet'=> 'required',
        ]);
         if ($v->fails()) {   
             return response()->json(['error'=>$v->errors()], 401);     
            }
        else{
        $images = "projets/".time().'.'.$request->images->extension();  
        $request->images->move(public_path('images'), $images);
         $user_id=DB::table('users')->select('user_id')->where('user_name',$request>session()->get('user_name')->get());
        $input = array(
            'images' => $request->images,
            'nom_projet' => $request->nom_projet,
            'Ncompte' => $request->Ncompte,
            'description'=>$request->description,
            'prix_total'=> $request->prix_total,
            'Catégorie'=> $request->Catégorie,
          );
 
          $projet->update($input);
 
        return response()->json([
            'message' =>'projet bien Modifier',
            'projet'  => $projet,
        ], 200);
    }
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
       
        $projet = Projet::find($id);
        if ($projet == null) {
            return response()->json([
                    'message'  => "projet introuvable!",
              ], 422);
         } 
         else{
             Projet::destroy($id);
             return response()->json([
                'message' =>'projet bien supprimé',
            ], 200);
        

    }
    }

}