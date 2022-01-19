<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Model\Home;
use App\Model\Item;

class Space extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'img',
   ];

    public function home()
    {
        return $this->belongsTo(Home::class, 'home_id', 'id');
    }

    public function items()
    {
        return $this->hasMany(Item::class);
    }
}
