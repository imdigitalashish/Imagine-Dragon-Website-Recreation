<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    use HasFactory;

    protected $fillable = [
        "tour_date",
        "location_of_tour",
        "destination_of_tour",
        "tickets_link",
        "tickets_link_vip",
    ];
}
