<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Residents extends Model
{
    protected $table = 'residents';
    protected $fillable = [
        'id',
        'residents_name',
        'residents_genre',
        'residents_monday_tasks',
        'residents_tuesday_tasks',
        'residents_wednesday_tasks',
        'residents_thursday_tasks',
        'residents_friday_tasks',
        'residents_saturday_tasks',
        'residents_sunday_tasks',
        'residents_total_tasks',
        'updated_at'

    ];
}

class ResidentsId extends Model
{
    protected $table = 'residents';

    protected $fillable = [
        'id',
    ];
}