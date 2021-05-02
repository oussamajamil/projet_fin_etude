<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projets', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('nom_projet')->unique();
            $table->string('Ncompte');
            $table->string('Url_vedio_youtube');
            $table->string('images');
            $table->string('description');
            $table->date('date_fin_projet');
            $table->float('prix_total');
            $table->float('Prix_payes')->default(0); 
            $table->float('Prix_rest'); 
            $table->string('Catégorie');
            $table->foreign('user_id')
            ->references('id')->
            on('users')->onDelete('cascade')->onUpdate('cascade'); 
               });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projets');
    }
}
