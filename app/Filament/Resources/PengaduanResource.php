<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\User;
use Filament\Tables;
use Filament\Forms\Form;
use App\Models\Pengaduan;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Illuminate\Support\HtmlString;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\SelectColumn;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\PengaduanResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\PengaduanResource\RelationManagers;

use Illuminate\Support\Facades\Storage;



class PengaduanResource extends Resource
{
    protected static ?string $model = pengaduan::class;

    protected static ?string $navigationIcon = 'heroicon-o-exclamation-circle';
    protected static ?string $navigationGroup = 'Layanan Publik';
    protected static ?string $label = 'Pengaduan';
    
    protected static ?string $pluralLabel = 'Daftar Pengaduan';
    

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('pengguna_id')
                ->relationship('pengguna', 'nama')
                ->required(),
            Forms\Components\TextInput::make('judul')
                ->required(),
                Select::make('jenis_pengaduan')
    ->label('Jenis Pengaduan')
    ->required()
    ->options([
        'darurat' => 'Darurat',
        'biasa' => 'Biasa',
    ])
    ->native(false) // agar pakai dropdown custom UI Filament, bukan default browser
    ->default('biasa'),
        
       
            Forms\Components\TextInput::make('lokasi')
                ->required(),
                Forms\Components\Select::make('petugas_id')
    ->label('Ditugaskan ke Petugas')
    ->options(
        User::role('petugas')->pluck('name', 'id')
    )
    ->searchable()
    ->nullable()
    ->helperText('Pilih petugas yang akan menangani aduan ini'),
            // Forms\Components\Select::make('status')
            //     ->options([
            //         'dikirim' => 'Dikirim',
            //         'diproses' => 'Diproses',
            //         'ditangani' => 'Ditangani',
            //     ])
            //     ->default('dikirim')
            //     ->native(false)
            //     ->required(),


            Select::make('status')
            ->options([
                'dikirim' => 'Dikirim',
                'diproses' => 'Diproses',
                'ditangani' => 'Ditangani',
    ])
                  ->default('dikirim')
                  ->native(false)
                  ->required()
                ->disabled(fn ($record) => $record && $record->status === 'ditangani'),
                    FileUpload::make('foto')
                ->label('Foto Bukti')
                ->image()
                ->visible(fn (string $context) => in_array($context, ['edit', 'create']))
                ->imagePreviewHeight('150')
                ->downloadable()
                ->disk('public')
                ->required(),

                    Forms\Components\Textarea::make('deskripsi')
                    ->required()
                    ->rows(10),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->poll('30 s')
            ->columns([
                Tables\Columns\TextColumn::make('pengguna.nama')
                    ->label('👤 Nama Pelapor')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('judul')
                    ->label('🚨 Pengaduan')
                    ->formatStateUsing(fn ($state) => Str::words($state, 5, '...'))
                    ->tooltip(fn ($record) => $record->judul),
                Tables\Columns\TextColumn::make('lokasi')
                    ->label('📍 Lokasi')
                    ->formatStateUsing(fn ($state) => Str::words($state, 5, '...')),

                Tables\Columns\BadgeColumn::make('jenis_pengaduan')
                    ->label('Jenis Pengaduan')
                    ->colors([
                        'danger' => 'darurat',
                        'warning' => 'biasa',
                    ])
                    ->formatStateUsing(fn ($state) => ucfirst($state)),

                Tables\Columns\BadgeColumn::make('status')
                    ->label('Status Laporan')
                    ->colors([
                        'danger' => 'dikirim',
                        'warning' => 'diproses',
                        'success' => 'ditangani',
                    ])
                    ->formatStateUsing(fn ($state) => match ($state) {
                        'dikirim' => 'Dikirim',
                        'diproses' => 'Diproses',
                        'ditangani' => 'Ditangani',
                        default => ucfirst($state),
                    }),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('🕒 Tanggal')
                    ->dateTime('d-m-Y H:i')
                    ->sortable(),
                     Tables\Columns\SelectColumn::make('petugas_id')
    ->label('Petugas')
    ->options(
        User::role('petugas')->pluck('name', 'id')
    )
    ->searchable()
    ->placeholder('Pilih Petugas'),
            ])
            ->filters([
                SelectFilter::make('jenis_pengaduan')
                    ->label('Jenis Pengaduan')
                    ->options([
                        'darurat' => 'Darurat',
                        'biasa' => 'Biasa',
                    ]),

                      SelectFilter::make('status')
        ->label('Status')
        ->options([
            'dikirim' => 'Dikirim',
            'diproses' => 'Diproses',
            'ditangani' => 'Ditangani',
        ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make()
                    ->label('Lihat')
                    ->icon('heroicon-o-eye')
                    ->modalHeading('Detail Pengaduan')
                    ->modalContent(function ($record) {
                        $foto = $record->foto
                            ? "<img src='" . Storage::url($record->foto) . "' alt='Foto Bukti' class='mx-auto rounded-xl shadow-lg mb-6 max-w-xs h-auto border-4 border-[#6c47ff22]' />"
                            : '';
                        return new HtmlString("
                           
                                {$foto}
                               
                        ");
                    }),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }
public static function getNavigationBadge(): ?string
{
    $count = static::getModel()::whereIn('status', ['Dikirim', 'Diproses'])->count();

    return $count > 0 ? (string) $count : null;
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
            'index' => Pages\ListPengaduans::route('/'),
            'create' => Pages\CreatePengaduan::route('/create'),
            'edit' => Pages\EditPengaduan::route('/{record}/edit'),
        ];
    }

//     public static function shouldRegisterNavigation(): bool
// {
//     $user = \Filament\Facades\Filament::auth()->user();
//     return $user && in_array($user->role, ['admin', 'super_admin']);
// }
}
