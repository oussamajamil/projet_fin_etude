<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cadeaux extends Model
{
    use HasFactory;
    protected $fillable = [
       'titre',
       'description',
       'Rechargeable',
       'prix_debut',
       'prix_fin',
    ];
}
