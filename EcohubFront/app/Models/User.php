<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Home;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    private $selected_home=null;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'main_home_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function homes()
    {
        return $this->hasMany(Home::class);
    }

    public function getMainHome()
    {
        return Home::where('id', $this->main_home_id)->first();
    }

    public function isMainHome($id)
    {
        return $id == $this->main_home_id;
    }

    public function getSelectedHome()
    {
        if ($this->selected_home==null){
            $this->selected_home = $this->getMainHome();
        }
        return $this->selected_home;
    }

    public function setSelectedHome($selected_home)
    {
        $this->selected_home = $selected_home;
    }

}
