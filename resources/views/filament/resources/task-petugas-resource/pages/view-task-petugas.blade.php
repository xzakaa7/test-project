{{-- filepath: resources/views/filament/resources/task-petugas-resource/pages/view-task-petugas.blade.php --}}
@php
    $pelapor = \App\Models\User::find($record->pengguna_id);
    $petugas = \App\Models\User::find($record->petugas_id);

    $statusPengaduanLabel = [
        'darurat' => 'Darurat',
        'biasa' => 'Biasa',
    ][$record->jenis_pengaduan] ?? $record->jenis_pengaduan;

    $statusPengaduanColor = [
        'darurat' => 'bg-red-100 text-red-700',
        'biasa' => 'bg-yellow-100 text-yellow-700',
    ][$record->jenis_pengaduan] ?? 'bg-gray-100 text-gray-700';

    $statusLabel = [
        'dikirim' => 'Dikirim',
        'diproses' => 'Diproses',
        'ditangani' => 'Ditangani',
    ][$record->status] ?? $record->status;

    $statusColor = [
        'dikirim' => 'bg-blue-100 text-blue-700',
        'diproses' => 'bg-yellow-100 text-yellow-700',
        'ditangani' => 'bg-green-100 text-green-700',
    ][$record->status] ?? 'bg-gray-100 text-gray-700';
@endphp

<x-filament-panels::page>
    <div class="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-8 space-y-6">
        {{-- FOTO DI ATAS DAN TENGAH --}}
        <div class="flex flex-col items-center mb-4">
            @if($record->foto)
                <img src="{{ asset('storage/pengaduan/' . $record->foto) }}"
                     alt="Foto Pengaduan"
                     class="rounded-xl shadow-lg w-48 h-48 object-cover border-4 border-primary-200 dark:border-primary-700 mb-4">
            @else
                <div class="w-48 h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-400 text-lg mb-4">
                    Tidak ada foto
                </div>
            @endif
            <div class="text-center">
                <div class="text-lg font-bold text-primary-700 dark:text-primary-300">Pelapor</div>
                <div class="text-2xl font-extrabold text-gray-800 dark:text-white mb-1">
                    {{ $pelapor?->name ?? '-' }}
                </div>
            </div>
        </div>
        <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <div class="mb-1 text-gray-500 dark:text-gray-400">Judul</div>
                <div class="font-semibold text-lg">{{ $record->judul }}</div>
            </div>
            <div>
                <div class="mb-1 text-gray-500 dark:text-gray-400">Lokasi</div>
                <div class="font-semibold">{{ $record->lokasi }}</div>
            </div>
            <div>
                <div class="mb-1 text-gray-500 dark:text-gray-400">Status Pengaduan</div>
                <span class="inline-block px-3 py-1 rounded-full text-xs font-bold {{ $statusPengaduanColor }}">
                    {{ $statusPengaduanLabel }}
                </span>
            </div>
            <div>
                <div class="mb-1 text-gray-500 dark:text-gray-400">Status</div>
                <span class="inline-block px-3 py-1 rounded-full text-xs font-bold {{ $statusColor }}">
                    {{ $statusLabel }}
                </span>
            </div>
            <div class="md:col-span-2">
                <div class="mb-1 text-gray-500 dark:text-gray-400">Deskripsi</div>
                <div class="bg-gray-100 dark:bg-gray-800 rounded p-3">{{ $record->deskripsi }}</div>
            </div>
            <div>
                <div class="mb-1 text-gray-500 dark:text-gray-400">Tanggal Dibuat</div>
                <div>{{ $record->created_at->format('d-m-Y H:i') }}</div>
            </div>
            <div>
                <div class="mb-1 text-gray-500 dark:text-gray-400">Tanggal Update</div>
                <div>{{ $record->updated_at->format('d-m-Y H:i') }}</div>
            </div>
        </div>
    </div>
</x-filament-panels::page>
