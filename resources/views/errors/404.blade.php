
@extends('errors.layout')

@section('title', __('Not Found'))
@section('image', asset('images/face-404.png'))
@section('message')
    404 | {{ __('Not Found') }}
@endsection