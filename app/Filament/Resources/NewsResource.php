<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\News;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Illuminate\Support\HtmlString;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\Facades\Storage;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\NewsResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\NewsResource\RelationManagers;
use Filament\Infolists\Infolist;
use Illuminate\Support\Str;

class NewsResource extends Resource
{
    protected static ?string $model = News::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';
    protected static ?string $navigationLabel = 'Berita';
   protected static ?string $navigationGroup = 'Layanan Publik';

    protected static ?string $modelLabel = 'Berita';
    protected static ?string $pluralModelLabel = 'Daftar Berita';
   
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('judul')->required()->label('Judul Berita'),
              
                TextInput::make('penulis')->required()->label('Nama Penulis'),
                  Textarea::make('isi')->required()->label('Isi Berita')->rows(6),
               FileUpload::make('image') ->visible(fn (string $context) => in_array($context, [ 'edit','create']))
    ->label('Gambar')
    ->image()
    ->imagePreviewHeight('200')
    ->disk('public') // gunakan disk 'public' (sesuai config/filesystems.php)
    ->directory('news') // ini berarti 'storage/app/public/news'
    ->visibility('public') ->openable()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->poll('15s') // Auto-refresh setiap 15 detik
            ->columns([
                ImageColumn::make('image')
                    ->label('🖼️ Gambar')
                    ->size(80)
                    ,
                TextColumn::make('judul')
                    ->label('📰 Judul')
                    ->formatStateUsing(fn ($state) => Str::words($state, 5, '...'))
                    ->tooltip(fn ($record) => $record->judul)
                    ->searchable()
                    ->sortable(),
                TextColumn::make('penulis')
                    ->label('✍️ Penulis')
                    ->formatStateUsing(fn ($state) => Str::words($state, 5, '...'))
                    ->tooltip(fn ($record) => $record->penulis)
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label('🕒 Dibuat')
                    ->dateTime('d M Y')
                    ->sortable(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make()
                    ->label('Detail'),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    // public static function infolist(Infolist $infolist): Infolist
    // {
        
    // }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListNews::route('/'),
            'create' => Pages\CreateNews::route('/create'),
            'edit' => Pages\EditNews::route('/{record}/edit'),
        ];
    }
}
