<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Suaramu;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\SuaramuResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\SuaramuResource\RelationManagers;
use Illuminate\Support\Str;

class SuaramuResource extends Resource
{
    protected static ?string $model = Suaramu::class;

    protected static ?string $navigationIcon = 'heroicon-o-exclamation-circle';
    protected static ?string $navigationGroup = 'Layanan Publik';
    protected static ?string $label = 'Suara Rakyat';
    
    
    

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('pengguna_id')
            ->relationship('pengguna', 'nama') // sesuaikan dengan kolom nama di tabel pengguna
            ->required(),

        TextInput::make('judul')->required()->maxLength(255),

        Textarea::make('isi_saran')->required()->maxLength(5000),

        Select::make('kategori')
            ->options([
                'pendidikan' => 'Pendidikan',
                'lingkungan' => 'Lingkungan',
                'kesehatan' => 'Kesehatan',
                'transportasi' => 'Transportasi',
                'lainnya' => 'Lainnya',
            ])
            ->nullable()
            ->label('Kategori'),
    ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->poll('15s') // Auto-refresh setiap 15 detik, opsional
            ->columns([
                        TextColumn::make('pengguna.nama')
                ->label('👤 Nama Pengirim')
                ->searchable()
                ->sortable(),
            TextColumn::make('judul')
                ->label('📝 Judul Saran')
                ->formatStateUsing(fn ($state) => Str::words($state, 5, '...'))
                ->tooltip(fn ($record) => $record->judul)
                ->searchable(),
            TextColumn::make('isi_saran')
                ->label('💬 Isi Saran')
                ->formatStateUsing(fn ($state) => Str::words($state, 5, '...'))
                ->tooltip(fn ($record) => $record->isi_saran)
                ->toggleable(isToggledHiddenByDefault: true), // kolom ini bisa di-hide
            TextColumn::make('kategori')
                ->label('🏷️ Kategori')
                ->badge()
                ->color(fn ($state) => match ($state) {
                    'pendidikan' => 'info',
                    'lingkungan' => 'success',
                    'kesehatan' => 'danger',
                    'transportasi' => 'warning',
                    'lainnya' => 'secondary',
                    default => 'gray',
                }),
            TextColumn::make('created_at')
                ->label('🕒 Dibuat Pada')
                ->dateTime('d M Y')
                ->sortable(),
            ])
            ->filters([
                // Tambahkan filter jika perlu
            ])
            ->actions([              
                Tables\Actions\ViewAction::make()->label('Detail'),
                Tables\Actions\EditAction::make()->label('Edit'),
            ])
            ->bulkActions([
                // Bulk actions jika diperlukan
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSuaramus::route('/'),
            'create' => Pages\CreateSuaramu::route('/create'),
            'edit' => Pages\EditSuaramu::route('/{record}/edit'),
        ];
    }
//      public static function shouldRegisterNavigation(): bool
// {
//     $user = \Filament\Facades\Filament::auth()->user();
//     return $user && in_array($user->role, ['admin', 'super_admin']);
// }
}
