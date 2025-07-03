<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pengaduan extends Model
{
    use HasFactory;

    protected $table = 'pengaduan';

    protected $fillable = [
        'pengguna_id',
        'judul',
        'deskripsi',
        'foto',
        'lokasi',
        'jenis_pengaduan',
        'status',
        'petugas_id',
    ];

    public function pengguna()
    {
        return $this->belongsTo(Pengguna::class);
    }

    public function petugas()
    {
        return $this->belongsTo(User::class, 'petugas_id');
    }
}
