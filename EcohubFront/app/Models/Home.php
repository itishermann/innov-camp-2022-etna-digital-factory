<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Space;
use App\Models\Item;

class Home extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'street',
        'postal_code',
        'city',
   ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function spaces()
    {
        return $this->hasMany(Space::class);
    }

    public function items()
    {
        $res = [];
        foreach ($this->spaces() as $space){
            $res = array_merge($res, $space->items());
        }
        return $res;
    }
    
}
