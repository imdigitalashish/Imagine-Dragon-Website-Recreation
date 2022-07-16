<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class storeItem extends Model
{
    use HasFactory;

    protected $fillable = [
        "image_of_item",
        "name_of_item",
        "price_of_item",
        "quantity",
        "list_of_sizes",
        "expected_date_of_delivery",
        "category_of_item",
    ];
}
