<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom_projet',
        'Ncompte',
        'Url_vedio_youtube',
        'images',
        'description',
        'date_fin_projet',
        'prix_total',
        'Prix_payes',
        'Prix_rest',
        'Catégorie',
        'reussi',
    ];
}
