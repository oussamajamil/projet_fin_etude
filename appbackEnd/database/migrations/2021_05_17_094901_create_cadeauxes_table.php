<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCadeauxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cadeauxes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('projet_id')->unsigned();
            $table->string('titre');
            $table->string('description');
            $table->enum('Rechargeable',['oui','non']);
            $table->integer('prix_debut');
            $table->integer('prix_fin');
            $table->timestamps();
            $table->foreign('projet_id')
            ->references('id')->
            on('projets')->onUpdate('cascade')->onDelete('cascade'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cadeauxes');
    }
}
