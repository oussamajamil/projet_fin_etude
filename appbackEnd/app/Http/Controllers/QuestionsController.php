<?php

namespace App\Http\Controllers;

use App\Models\Questions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Exception;
class QuestionsController extends Controller
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
    public function store(Request $request)
    {
        $input = $request->all(); 
        if($input['Qustion']=="")
        {
            return response()->json(['error' =>'tapez votre question'],200);
        }
        else
        {
            $user_name=$input['user_name'];
             $user=DB::table('users')->select('id','nom','prenom')->where('user_name','=',$user_name)->get();
            DB::table('questions')->insert(
                [
                    'Qustion'=>$request->Qustion,
                      'user_id'=>$user[0]->id,
                ]
                );
                return response()->json(['message'=>'questions Bien Ajouter'],200);
        }
    }

        public function getQuestionPasaccepte()
        {
            try
            {
                $nombre=DB::table('questions')->where('accepte','oui')->count();
                if($nombre>0)
                {
                    $questions=DB::table('questions')->where('accepte','=','non')->get();
                    $questions = DB::table('questions')
                    ->join('users', 'users.id', '=', 'questions.user_id')
                    ->select('questions.*', 'users.user_name','users.nom','users.prenom','users.photo')
                    ->where('accepte','non')
                    ->orderBy('id','DESC')
                    ->get();
                    return response()->json(['Data'=>$questions,'nombre'=>$nombre],200);
                }
               else
               {
                return response()->json(['message'=>'auccun message'],200);
               }
          
            }
            catch(exception $ex)
            {
                return response()->json(['error'=> $ex->getMessage()],404);
           }
           

        }
    public function getQestion()
    {
        $nombre=DB::table('questions')->where('accepte','oui')->count();
        if($nombre>0)
        {
            $questions = DB::table('questions')
            ->join('users', 'users.id', '=', 'questions.user_id')
            ->select('questions.*', 'users.user_name','users.nom','users.prenom','users.photo')
            ->where('accepte','oui')
            ->get();
            return response()->json(['Data'=>$questions],200);
        }
        else
        {
            return response()->json(['message'=>'auccun message accepter'],200);
        }

        

    }
//Admin
    public function AccepteQuestion(Request $request)
    {
        try
        {
            DB::table('questions')->where('id',$request->id)->update(["accepte"=>"oui","reponde"=>$request->reponde]);
            return response()->json(['message'=>"bien reponder"],200);
        }
        catch(Exception $ex)
        {
            return response()->json(['error' =>$ex->getMessage()],400);
        }
       
    } 
    //AdmimnSpprimer Question
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Questions  $questions
     * @return \Illuminate\Http\Response
     */
    public function show(Questions $questions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Questions  $questions
     * @return \Illuminate\Http\Response
     */
    public function edit(Questions $questions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Questions  $questions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Questions $questions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Questions  $questions
     * @return \Illuminate\Http\Response
     */
    public function supprimerQestion($id)
    {
        try
        {
            DB::table('questions')->where('id',$id)->delete();
            return response()->json(['message'=>"bien supprimer"]);
        }
        catch(exception $ex)
        {
            return response()->json(['error'=>$ex->getMessage()]);
        }
    }
}
