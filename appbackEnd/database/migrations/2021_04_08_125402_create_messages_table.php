<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('messageText');
            $table->integer('user_id_envoyer')->unsigned();
            $table->integer('user_id_recu')->unsigned();
            $table->timestamps();
            $table->foreign('user_id_envoyer')
            ->references('id')->
            on('users')->onUpdate('cascade'); 
            $table->foreign('user_id_recu')
            ->references('id')->
            on('users')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
