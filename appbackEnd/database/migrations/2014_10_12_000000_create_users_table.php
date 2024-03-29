<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nom');
            $table->string('prenom');
            $table->string('user_name')->unique();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->date('date_naissance');
            $table->string('Tele')->default(null);
            $table->string('pays');
            $table->string('Ncompte')->default(null);
            $table->enum('Type',['user','Admin'])->default('user');
            $table->string('photo')->default('images/user.png');
            $table->integer('nembre_projet_invi')->default(0);
            $table->integer('nembre_projet_lancer')->default(0);
            $table->float('prixTotal_dinvi')->default(0);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
