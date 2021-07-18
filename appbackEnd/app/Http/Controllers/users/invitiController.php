<?php

namespace App\Http\Controllers\users;

use App\Http\Controllers\Controller;
use App\Models\investissements as investissements;
use App\Models\Projet as Projet;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Stripe\Charge;
use Stripe\Stripe;

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
        $projet=DB::table('invi')->where('id_projet',$id_projet)->get();
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
        
         
    }
    public function inviParjours()
    {
        try
        {
        $projet=DB::table('invi')
        ->join('projets','invi.projetID','=','projets.id')
        ->select('projets.*','invi.prix')
        ->where("data",date('Y-m-d'))
        ->get(); 
        return response()->json(["data"=>$projet],200);
        }
        catch(exception $ex)
        {
            return response()->json(["error"=>$ex->getMessage()],400);
        }
      
    }
    public function payements(Request $req)
    {
        try
        {
            $stripe = new \Stripe\StripeClient(
                "sk_test_51JACeLA5JsjwR9VpfSefimaxnWBuQXym9QJw253o7fcYvDWGnHpqREmCrzjtBcPudath12T3LTAnZs73UiNkfGet000KXbJfSf"
              );
              $a=$stripe->tokens->create([
                'card' => [
                  'number' => $req->number,
                  'exp_month' => $req->exp_month,
                  'exp_year' => $req->exp_year,
                  'cvc' => $req->cvc,
                ],
              ]);
                    Stripe::setApiKey("sk_test_51JACeLA5JsjwR9VpfSefimaxnWBuQXym9QJw253o7fcYvDWGnHpqREmCrzjtBcPudath12T3LTAnZs73UiNkfGet000KXbJfSf");
                    Charge::create ([
                            "amount" => floatval($req->prix)*100,
                            "currency" => "mad",
                            "source" => $a->id,
                            "description" => "Make payment and chill." 
                    ]);
                    DB::table('invi')->insert([
                        "nomComplete"=>$req->nomComplete,
                        "email"=>$req->email,
                        "prix"=>$req->prix,
                        "visible"=>$req->visible,
                        "projetID"=>$req->projetID,
                ]);
                $projet= DB::table('projets')->select('prix_total','Prix_payes','Prix_rest','date_fin_projet')->where('id',$req->projetID)->get();
                DB::table('projets')->where('id',$req->projetID)->update([
                  'Prix_payes'  => $projet[0]->Prix_payes+$req->prix
                ]);
    
                $prixtotlapays=$projet[0]->Prix_payes+$req->prix;
                if($prixtotlapays>=$projet[0]->prix_total)
                {
                    DB::table('projets')->where('id',$req->projetID)->update([
                        'Success'  => "oui"
                      ]);  
                }
                    return response()->json(["message"=>"bien payer"],200);
        }
                catch(exception $ex)
                {
                    return response()->json(["error"=> $ex->getMessage()],400); 
                }
        

               
    }
}
