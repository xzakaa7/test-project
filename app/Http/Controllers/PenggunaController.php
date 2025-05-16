<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PenggunaController extends Controller
{
     public function loginFlutter(Request $request)
    {
        $pengguna = DB::table('pengguna')->where('email', $request->email)->first();

        if (!$pengguna) {
            return response()->json(['message' => 'Email tidak ditemukan'], 404);
        }

       if (!Hash::check($request->password, $pengguna->password)) {
    return response()->json(['message' => 'Password salah'], 401);
}


        return response()->json([
            'message' => 'Login berhasil',
            'pengguna' => $pengguna
        ]);
    }
}
