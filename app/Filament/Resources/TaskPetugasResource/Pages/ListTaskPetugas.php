<?php

namespace App\Filament\Resources\TaskPetugasResource\Pages;

use App\Filament\Resources\TaskPetugasResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTaskPetugas extends ListRecords
{
    protected static string $resource = TaskPetugasResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
