<?php

namespace App\Filament\Resources;

use App\Models\User;
use Filament\Forms;
use Filament\Tables;
use Filament\Resources\Resource;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\PetugasResource\Pages;

class PetugasResource extends Resource
{
    protected static ?string $model = User::class;
    protected static ?string $navigationLabel = 'Petugas';
    
    protected static ?string $navigationGroup = 'Users';
        protected static ?string $navigationIcon = 'heroicon-o-users';


    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('name')->required(),
            Forms\Components\TextInput::make('email')->email()->required(),
            // Tambahkan field lain sesuai kebutuhan
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            Tables\Columns\TextColumn::make('name')->label('Nama'),
            Tables\Columns\TextColumn::make('email')
                ->label('✉️ Email')
                ->formatStateUsing(fn ($state) => \Illuminate\Support\Str::words($state, 5, '...'))
                ->extraAttributes(['class' => 'text-blue-600 font-semibold'])
                ->tooltip(fn ($record) => $record->email),
            // Tampilkan semua aduan yang ditugaskan ke petugas ini
            Tables\Columns\TextColumn::make('pengaduan_count')
                ->label('Jumlah Aduan Yang Ditugaskan')
                ->counts('pengaduan'),
        ])->actions([
                Tables\Actions\ViewAction::make()
                ->label('Detail'),
                Tables\Actions\EditAction::make(),
             
            ]);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->whereHas('roles', function ($q) {
                $q->where('name', 'petugas');
            });
    }
    

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPetugas::route('/'),
            'create' => Pages\CreatePetugas::route('/create'),
            'edit' => Pages\EditPetugas::route('/{record}/edit'),
        ];
    }
}
