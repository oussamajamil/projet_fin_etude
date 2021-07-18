<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function getDataAllProjectAdmin()
    {
        $mytime = Carbon::now();

    //   $projet=DB::table('projets')->count();
    //   $Questions=DB::table('questionxes')->where('created_at',getdate())->count();
    return response()->json(["data"=>$mytime->toDateString()]);
    }
    public function getlesNombre()
    {
        try
        {
            $nombre_projet=DB::table('projets')->count();
            $nombre_user=DB::table('users')->count();
            $nombre_investissements=DB::table('invi')->count();
            return response()->json(["nombrepro"=>$nombre_projet,"nombreinvi"=>$nombre_investissements,"nombreuser"=> $nombre_user],200);
        }
    
            catch(Exception $ex)
            {
                return response()->json(['error',$ex->getMessage()],200);
            }
        
    
    }
    public function  ActiverComptreParAdmin($id)
    {
        try
        {
         DB::table('users')->where('id',$id)->update(['ActiveCompte'=>"oui"]);
       
         return response()->json(['data',"bien Modifier"],200);
        }
      catch(exception $ex)
      {
        return response()->json(['error',$ex->getMessage()],200);
      }
    }
    public function  desActiverComptreParAdmin($id)
    {
        try
        {
         DB::table('users')->where('id',$id)->update(['ActiveCompte'=>'non']);
         return response()->json(['data'=>"bien Modifier"],200);
        }
      catch(exception $ex)
      {
        return response()->json(['error',$ex->getMessage()],200);
      }
    }
    public function mieurprojet()
    {
        $prix_max=DB::table('projets')->select('Prix_payes')->max('Prix_payes');
        if( $prix_max>0)
        {
         $projet=DB::table('projets')->where('Prix_payes', $prix_max)->first();
         return response()->json(["data"=>$projet],200);
        }
        else
        {
            return response()->json(["message"=>"note found"],200);
        }
         
        // $projet=DB::table('projets')->max('Prix_payes')->first();
    }
    public function getseccusProjet()
    {
        try
        {
            $nombre_projet_succs=DB::table('projets')->where('Success','oui')->count();
            $nombre_projet_echec=DB::table('projets')->where('Success','non')->count();
            $nombre_projet_enattand=DB::table('projets')->where('Success','en attand')->count();
            return response()->json(["seccus"=> $nombre_projet_succs,"revise"=>$nombre_projet_echec,"enattand"=> $nombre_projet_enattand],200);
        }
        catch(exception $ex)
        {
            return response()->json(["error"=> $ex->getMessage()],200);
        }
       
    }
    public function getAllMessage()
    {
        try
        {
          $message=DB::table('messages')->where('reponde','non')->get();

         return response()->json(["data"=>$message],200);
        }
        catch(exception $ex)
        {
            return response()->json(["error"=>  $ex->getMessage()],400);
        }
    }
    public function addMessage(Request $req)
    {
      try
      {
       DB::table('messages')->insert([
           'Message'=>$req->Message,
           'nom'=>$req->nom,
           'email'=>$req->email,
           'sujet'=>$req->sujet
       ]);
       return response()->json(["message"=>'bien creer'],200);
      }
      catch(exception $ex)
      {
          return response()->json(["error"=>  $ex->getMessage()],400);
      }
    }
    public function supprimerMessage($id)
    {
        try
        {
            DB::table('messages')->where('id',$id)->delete();
            return response()->json(["message"=>'bien supprimer'],200);
        }
        
        catch(exception $ex)
        {
            return response()->json(["error"=>  $ex->getMessage()],400);
        }
    }
    public function repondeMessage(Request $req)
    {
        try
        {
            $data=[
            'nom'=>$req->nom,
            'email'=> $req->email,
            'reponde'=>$req->reponde,
             ];
              DB::table('messages')->where('id',$req->id)->update(["reponde"=>"oui"]);
                Mail::send('repondeMessage', ["data1"=>$data], function ($message) use($req) {
           
                $message->to($req->email);
                $message->subject("$req->nom,reponde de vos question");
                $message->from('oussamajamil01@gmail.com','Admin de Ammal');
            });
            return response()->json(['message '=>"Bien Modifier"],200); 
        }
        catch(exception $ex)
        {
            return response()->json(["error"=>  $ex->getMessage()],400);
        }
    }
}
