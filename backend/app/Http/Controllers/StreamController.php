<?php

namespace App\Http\Controllers;

use App\Events\StreamLastMessage;
use App\Http\Resources\StreamResource;
use App\Models\Stream;
use Illuminate\Http\Request;

class StreamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $streams = Stream::where('start_date', '>', now())->orderBy('start_date', 'desc')->get();

        return response()->json($streams);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Stream $stream)
    {
        return response()->json(StreamResource::make($stream));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stream $stream)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Stream $stream)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stream $stream)
    {
        //
    }
}
