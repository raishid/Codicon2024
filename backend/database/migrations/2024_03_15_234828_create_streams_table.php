<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('streams', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name', 255);
            $table->text('description');
            $table->text('video_stream_url');
            $table->text('poster_url');
            $table->boolean('status');
            $table->timestamp('start_date');
            $table->timestamp('end_date');
            $table->unsignedBigInteger('user_id');

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('streams');
    }
};
