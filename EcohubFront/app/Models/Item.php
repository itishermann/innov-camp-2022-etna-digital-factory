<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Model\Home;
use App\Model\Space;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'product_id',
        'status',
        'guarantee_id',
        'img',
   ];

    public function home()
    {
        return $this->belongsTo(Space::class, 'space_id', 'id')->belongsTo(Home::class, 'home_id', 'id');
    }
}
