<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use App\Models\Pengaduan;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Facades\Filament;
use Filament\Resources\Resource;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\TaskPetugasResource\Pages;

class TaskPetugasResource extends Resource
{
    protected static ?string $model = Pengaduan::class;
    protected static ?string $navigationLabel = 'Tugas Saya';
    protected static ?string $navigationGroup = 'Layanan Publik';
   
    protected static ?string $navigationIcon = 'heroicon-o-clipboard-document-check';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Informasi Pengaduan')
                ->schema([
                    Forms\Components\TextInput::make('judul')
                        ->label('Judul')
                        ->disabled(),
                   Forms\Components\Textarea::make('deskripsi')
    ->label('Deskripsi')
    ->disabled()
    ->autosize()
    ->rows(8)
    ->columnSpan(2),
                    Forms\Components\TextInput::make('lokasi')
                        ->label('Lokasi')
                        ->disabled(),
                    Forms\Components\Select::make('jenis_pengaduan')
                        ->label('Status Pengaduan')
                        ->options([
                            'darurat' => 'Darurat',
                            'biasa' => 'Biasa',
                        ])
                        ->disabled(),
                    Forms\Components\Select::make('status')
                        ->label('Status')
                        ->options([
                            'dikirim' => 'Dikirim',
                            'diproses' => 'Diproses',
                            'ditangani' => 'Ditangani',
                        ])
                        ->required(),
                ])->columns(2),

            Forms\Components\Section::make('Detail Lainnya')
                ->schema([
                    Forms\Components\TextInput::make('pengguna.nama')
                        ->label('Nama Pelapor')
                        ->disabled(),
                    Forms\Components\TextInput::make('petugas.name')
                        ->label('Petugas')
                        ->disabled(),
                    Forms\Components\FileUpload::make('foto')
                        ->label('Foto')
                        ->disk('public')
                        ->directory('pengaduan')
                        ->image()
                        ->disabled(),
                    Forms\Components\TextInput::make('created_at')
                        ->label('Tanggal Dibuat')
                        ->formatStateUsing(fn ($state) => $state ? \Carbon\Carbon::parse($state)->format('d-m-Y H:i') : '-')
                        ->disabled(),
                    Forms\Components\TextInput::make('updated_at')
                        ->label('Tanggal Update')
                        ->formatStateUsing(fn ($state) => $state ? \Carbon\Carbon::parse($state)->format('d-m-Y H:i') : '-')
                        ->disabled(),
                ])->columns(2),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('pengguna.nama')
    ->label('Nama Pelapor')
    ->sortable()
    ->searchable(),
                Tables\Columns\TextColumn::make('judul')
                    ->label('Judul')
                    ->searchable()
                    ->formatStateUsing(fn ($state) => \Illuminate\Support\Str::words($state, 5, '...'))
                    ->tooltip(fn ($record) => $record->judul),
                Tables\Columns\TextColumn::make('lokasi')
                    ->label('Lokasi')
                    ->searchable()
                    ->formatStateUsing(fn ($state) => \Illuminate\Support\Str::words($state, 5, '...')),
                Tables\Columns\BadgeColumn::make('jenis_pengaduan')
                    ->label('Status Pengaduan')
                    ->formatStateUsing(fn ($state) => $state === 'darurat' ? 'Darurat' : ($state === 'biasa' ? 'Biasa' : $state))
                    ->color(fn ($state) => match ($state) {
                        'darurat' => 'danger',
                        'biasa' => 'warning',
                        default => 'secondary',
                    }),
                Tables\Columns\BadgeColumn::make('status')
                    ->label('Status')
                    ->formatStateUsing(fn ($state) => match ($state) {
                        'dikirim' => 'Dikirim',
                        'diproses' => 'Diproses',
                        'ditangani' => 'Ditangani',
                        default => $state,
                    })
                    ->color(fn ($state) => match ($state) {
                        'dikirim' => 'info',
                        'diproses' => 'warning',
                        'ditangani' => 'success',
                        default => 'secondary',
                    }),
                // Tables\Columns\TextColumn::make('created_at')
                //     ->dateTime('d-m-Y H:i')
                //     ->label('Tanggal'),
            ])
             ->filters([
            SelectFilter::make('jenis_pengaduan')
                ->label('Jenis Pengaduan')
                ->options([
                    'darurat' => 'Darurat',
                    'biasa' => 'Biasa',
                ]),
        ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
               

            ]);
    }

    

    // Filter hanya pengaduan yang ditugaskan ke petugas login
  public static function getEloquentQuery(): Builder
{
    $userId = Filament::auth()->id();

    if (!$userId) {
        return parent::getEloquentQuery()->whereRaw('1=0');
    }

    return parent::getEloquentQuery()
        ->where('petugas_id', $userId);
}
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTaskPetugas::route('/'),
            'edit' => Pages\EditTaskPetugas::route('/{record}/edit'),
            'view' => Pages\ViewTaskPetugas::route('/{record}'),
        ];
    }

    public static function canCreate(): bool
{
    return false;
}

public static function canDelete($record): bool
{
    return false;
}

public static function getNavigationBadge(): ?string
{
    $userId = \Filament\Facades\Filament::auth()->id();

    if (!$userId) {
        return null;
    }

    // Hitung task yang status-nya bukan 'ditangani' untuk petugas login
    $count = \App\Models\Pengaduan::where('petugas_id', $userId)
        ->where('status', '!=', 'ditangani')
        ->count();

    return $count > 0 ? (string) $count : null;
}
}
