<?php

namespace App\Http\Controllers;

use App\Models\Stream;
use App\Http\Requests\StreamRequest;
use App\Http\Resources\StreamResource;

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
     * Store a newly created resource in storage.
     */
    public function store(StreamRequest $request)
    {
        $data = $request->validated();

        $data['user_id'] = auth()->user()->id;

        $stream = Stream::create($data);

        return response()->json(StreamResource::make($stream));
    }

    /**
     * Display the specified resource.
     */
    public function show(Stream $stream)
    {
        return response()->json(StreamResource::make($stream));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StreamRequest $request, Stream $stream)
    {
        $data = $request->validated();

        $stream->update($data);

        return response()->json(StreamResource::make($stream));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stream $stream)
    {
        $stream->delete();

        return response()->json(['message' => 'Stream deleted successfully']);
    }
}
