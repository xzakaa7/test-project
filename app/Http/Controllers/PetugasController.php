<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class PetugasController extends Controller
{
      public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => true,
                'message' => 'Login berhasil',
                'data' => [
                    'id'    => $user->id,
                    'nama'  => $user->name,
                    'email' => $user->email,
                ]
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'Email atau password salah',
        ], 401);
    }
}


