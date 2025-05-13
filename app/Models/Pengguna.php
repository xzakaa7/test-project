<?php

namespace App\Models;

use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pengguna extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'pengguna';

    protected $fillable = ['nama', 'email', 'password', 'no_hp', 'alamat'];

    // Otomatis hash password saat diset
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
}
