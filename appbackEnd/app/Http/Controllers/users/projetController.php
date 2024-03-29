<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projet as Projet;
use Carbon\Carbon;
use DateInterval;
use DateTime;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

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

    public function getallprojetenattnde()
    {
      
        try
        {
            $nombreprojet=DB::table('projets')->where('accepte','en attand')->count();
            if( $nombreprojet>0)
            {
                $projet=DB::table('projets')
                ->join('users', 'users.id', '=', 'projets.user_id')
                ->select('projets.*', 'users.user_name','users.nom','users.prenom','users.photo')
                ->where("accepte","en attand")
                ->orderBy('id','DESC')
                ->get();
              return  response()->json(['data'=>$projet], 200);
            }
            else
            {
               return response()->json(['message'=>"not found"], 200);
            }
        }
        catch(exception $ex)
        {
          return  response()->json(['err'=>$ex->getMessage()], 200);
        }
        
    
    }
    public function accepetationdeProjets($id)
    {
        try
        {
            DB::table('projets')->where('id','=',$id)->update(["accepte"=>"oui"]);
            return response()->json(['message'=>"bienModifiere"],200);
        }
        catch(Exception $ex)
        {
            return response()->json(['error'=>$ex->Message],400);
        }
    }
    //reffser Projet
    public function refuseProjet($id)
    {
        try
        {
            DB::table('projets')->where('id','=',$id)->update(["accepte"=>"non"]);
            return response()->json(['message'=>"bienModifiere"],200);
        }
        catch(Exception $ex)
        {
            return response()->json(['error'=>$ex->Message],400);
        }
    }

    public function ProjetAccepte()
    {
        try
        {
            $projet=DB::table('projets')->where('accepte','oui')->get();
            return response()->json(['data'=>$projet],200);
        }
        catch(Exception $ex)
        {
            return response()->json(['error'=>$ex->Message],400);
        }
       
    }
    public function AffichierProjetCatetpays(Request $request)
    {
       $pay=$request->pays;
       $cat=$request->Catégorie;
       if($pay=='' && $cat=='')
       {
        $projet=DB::table('projets')->where([['accepte','oui'],['date_lance_projet','<=',date('Y-m-d')]])->get();
        return response()->json(['data'=>$projet],200);
           
       }  
       if($pay=='' && $cat!='')
       {
        $projet=DB::table('projets')->where([['accepte','oui'],['Catégorie',$cat],['date_lance_projet','<=',date('Y-m-d')]])->get();
        return response()->json(['data'=>$projet],200);
       }
       if($pay!='' && $cat=='')
       {
        $projet=DB::table('projets')->where([['accepte','oui'],['pays',$pay],['date_lance_projet','<=',date('Y-m-d')]])->get();
        return response()->json(['data'=>$projet],200);
       }
       if($pay!='' && $cat!='')
       {
        $projet=DB::table('projets')->where([['accepte','oui'],['pays',$pay],['Catégorie',$cat],['date_lance_projet','<=',date('Y-m-d')]])->get();
        return response()->json(['data'=>$projet],200);
       }
    }
    
    public function likeprojet($user_name)
    {
        $id=DB::table('users')->select('id')->where('user_name',$user_name)->get();
       
        try
        {
            $projet=DB::table('like_projets')
            ->where('user_id',$id[0]->id)
            ->get();
            return response()->json(['data'=>$projet],200);
        }
        catch(exception $ex)
        {
            return response()->json(['error'=>$ex->getMessage()],400);
        }
        
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
    public function NombreProjet($user_name)
    {
        try
        {
            $id=DB::table('users')->select('id')->where('user_name',$user_name)->first();
            $nb=DB::table('projets')->where('user_id',$id->id)->count();
            if($nb==0)
            {
              return response()->json(['nombre'=>$nb],200);
            }
            else
            {
                $data=DB::table('projets')->where('user_id',$id->id)->get();
                return response()->json(['nombre'=>$nb,'data'=>$data],200);
            }
           
        }
        catch(exception $ex)
        {
            return response()->json(['error'=>$ex->getMessage()], 200);
        }
      
    }
   
    public function checkTitre(Request $request)
    {
      $nombre=DB::table('projets')->where('nom_projet',$request->nom_projet)->count();
       return response()->json(['countprojets'=>$nombre],200);
    }
        public function CountTousproduits()
        {    $somme=0;
            try
            {
                $db1=DB::table('projets')->where("accepte","oui")->count();
                $db2=DB::table('invi')->count();
                $proxinv=DB::table('invi')->select('prix')->get();
                foreach ($proxinv as $prix) {
                   $somme=$somme+floatval($prix->prix);
                }
                return response()->json(["oui"=>$db1,"non"=>$db2,"prix"=>$somme],200);
               
            }
            catch(Exception $ex)
            {
                return response()->json(["err"=>$ex->getMessage()],400);
            }
        

        }
    public function store(Request $request)
    {
        try
        {
            $file = $request->file('images');
            //$image=$file->getClientOriginalName();
            $image = time().'.'.$file->getClientOriginalExtension();
            $destinationPath ='assets/projets/';
            $file->move($destinationPath,$image);
            $img=$destinationPath.$image;

           
            $date = new DateTime($request->date_lance_projet);
            $nombre='P'.($request->nombre_jour).'D';
            $date->add(new DateInterval($nombre));
            $Date2 = $date->format('Y-m-d');
       
            DB::table('projets')->insert([
                'user_id'=> $request->user_id,
                'images' => $img,
                'date_lance_projet' => $request->date_lance_projet,
                'nom_projet' => $request->nom_projet,
                'Résumé'=>$request->Résumé,
                'prix_total'=> $request->prix_total,
                'Prix_rest'=> $request->prix_total,
                'Catégorie'=> $request->Catégorie,
                'pays'=> $request->pays,
                'date_fin_projet'=> $Date2,
                'Url_vedio_youtube'=> $request->Url_vedio_youtube,
                'titre1'=>$request->titre1,
                'titre2'=>$request->titre2,
                'description1'=>$request->description1,
                'description2'=>$request->description2,
                'titre3'=>$request->titre2,
                'description3'=>$request->description3,
                'nombre_jour'=>$request->nombre_jour,
                ]);
                $projets=DB::table('projets')->select('id')->where('nom_projet',$request->nom_projet)->get();
              return response()->json([
                'message' =>'projet bien ajouté',
                'id'=>$projets
              ], 200);
          
        }
        catch(Exception $ex)
        {
            return response()->json([
                'error' =>$ex->getMessage(),
              ], 200);

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
                ], 200);
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
            $user_id=DB::table('projets')->select('user_id')->where('id',$id)->get();
            DB::table('cadeauxes')->where('projet_id', $id)->delete();
             
            //  $nombreProjetLancer=DB::table('users')->select('nembre_projet_lancer')->where('id',$user_id[0]->user_id)->get();
            //  DB::table('users')->where('id',$user_id[0]->user_id)->update(['nembre_projet_lancer'=>intval($nombreProjetLancer[0]->nembre_projet_lancer)-1]);
             Projet::destroy($id);
             return response()->json([
                'message' =>'projet bien supprimé',
            ], 200);
        

    }
    }
    public function SupprimerParNome($nom)
    {
        $id=DB::table('projets')->select('id')->where('nom_projet',$nom)->first();
        try
        {
          DB::table('cadeauxes')->where('projet_id', $id->id)->delete();
          DB::table('projets')->where('nom_projet',$nom)->delete();
          return response()->json(['message','bien supprimer'],200);
        } 
        catch(exception $ex)
        {
         return response()->json(['error',$ex->getMessage()],200);
        }   
    }

        public function projetScusshomme()
        {
            try
            {
                $pins = array();
                $id=array();
                $lasttable=array();
                $noveutable=array();
                $cont=0;
                $conts=0;
                $projet=DB::table('projets')->where("success","oui")->get();
                while($cont<3)
                {
                $random=rand(0,(sizeOf($projet)-1));
                if(in_array($projet[$random]->id,$noveutable)==false)
                {
                    $noveutable[$cont]=$projet[$random]->id;  
                    $cont++;
                }
                }
                for($KK=0;$KK<sizeOf($projet);$KK++)
                {
                for($ll=0;$ll<3;$ll++)
                {
                    if($noveutable[$ll]==$projet[$KK]->id)
                    {
                        $conts++;
                        array_push($lasttable, $projet[$KK]);
                        if($conts==3)
                        break;
                    }
                }
                }
                return response()->json(["data"=>$lasttable],200);
              
            }
            catch(exception $ex)
            {
                return response()->json([$ex->getMessage()],200);
            }
         
        }
        public function projetgethomme()
        {
            try
            {
                $pins = array();
                $id=array();
                $lasttable=array();
                $noveutable=array();
                $cont=0;
                $conts=0;
                $projet=DB::table('projets')->where("success","en attand")->get();
                while($cont<3)
                {
                $random=rand(0,(sizeOf($projet)-1));
                if(in_array($projet[$random]->id,$noveutable)==false)
                {
                    $noveutable[$cont]=$projet[$random]->id;  
                    $cont++;
                }
                }
                for($KK=0;$KK<sizeOf($projet);$KK++)
                {
                for($ll=0;$ll<3;$ll++)
                {
                    if($noveutable[$ll]==$projet[$KK]->id)
                    {
                        $conts++;
                        array_push($lasttable, $projet[$KK]);
                        if($conts==3)
                        break;
                    }
                }
                }
                return response()->json(["data"=>$lasttable],200);
              
            }
            catch(exception $ex)
            {
                return response()->json([$ex->getMessage()],200);
            }
         
        }

}