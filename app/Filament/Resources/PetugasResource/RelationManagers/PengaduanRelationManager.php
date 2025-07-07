<?php

namespace App\Filament\Resources\PetugasResource\RelationManagers;

use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class PengaduanRelationManager extends RelationManager
{
    protected static string $relationship = 'pengaduan';

    public function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('judul')->label('Judul Pengaduan'),
                Tables\Columns\TextColumn::make('status')->label('Status'),
            ]);
    }
}
