@extends('layouts.app')

@section('content')
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div><span class="activity-done">Spaces</span></div>
                <div class="mt-3">
                    <ul class="list list-inline">
                        @foreach($spaces as $space)
                            <li class="d-flex justify-content-between">
                                <div class="ml-2">
                                    <h6 class="mb-0">{{$space->name}}</h6>
                                </div>
                            </li>
                        @endforeach
                        <br>
                        <li class="add-button d-flex justify-content-center space-list">
                            <div class="ml-2">
                                <h6 class="mb-0">add</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endsection
