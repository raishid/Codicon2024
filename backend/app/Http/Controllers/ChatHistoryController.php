<?php

namespace App\Http\Controllers;

use App\Events\StreamSendMessage;
use App\Models\ChatHistory;
use App\Models\Stream;
use Illuminate\Http\Request;

class ChatHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Stream $stream, Request $request)
    {
        $request->validate([
            'message' => 'required',
            'username' => 'required|string|max:25'
        ]);

        $chatHistory = ChatHistory::create([
            'message' => $request->message,
            'stream_id' => $stream->id,
            'username'  => $request->username,
        ]);

        broadcast(new StreamSendMessage($chatHistory));

        return response()->json($chatHistory);
    }

    /**
     * Display the specified resource.
     */
    public function show(ChatHistory $chatHistory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ChatHistory $chatHistory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ChatHistory $chatHistory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ChatHistory $chatHistory)
    {
        //
    }
}
