<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvestissementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investissements', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_projet')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->float('Prixdinvetissemnt');
            $table->foreign('user_id')
            ->references('id')->
            on('users')->onDelete('cascade')->onUpdate('cascade'); 
            $table->foreign('id_projet')
            ->references('id')->
            on('projets')->onDelete('cascade')->onUpdate('cascade'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('investissements');
    }
}
