<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\News;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\NewsResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\NewsResource\RelationManagers;

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
                FileUpload::make('image')
                    ->label('Gambar')
                    ->image()
                    ->imagePreviewHeight('200')
                 //   ->directory('news-images')
                   // ->preserveFilenames()
                    //->columnSpanFull()
                     ->downloadable()
                    // ->columnSpanFull()
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')->label('Gambar')->square(),
                TextColumn::make('judul')->sortable()->label('Judul'),
                TextColumn::make('penulis')->label('Penulis')->sortable(),
                TextColumn::make('created_at')->dateTime('d M Y')->label('Dibuat'),
            
          
            ])  ->defaultSort('created_at', 'desc')
            ->filters([
                //
            ])
            ->actions([
                    Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
              
            ])
            ->bulkActions([
                // Tables\Actions\BulkActionGroup::make([
                //     Tables\Actions\DeleteBulkAction::make(),
                // ]),
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
            'index' => Pages\ListNews::route('/'),
            'create' => Pages\CreateNews::route('/create'),
            'edit' => Pages\EditNews::route('/{record}/edit'),
        ];
    }
}
