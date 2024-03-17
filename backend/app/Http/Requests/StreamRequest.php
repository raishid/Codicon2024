<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StreamRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        if ($this->route()->getName() === 'stream.store') {
            return [
                'name'  => 'required|string',
                'description'   => 'required|string',
                'status'    => 'required|boolean',
                'video_stream_url'  => 'required|string',
                'poster_url'    => 'required|string',
                'start_date'    => 'required|date',
                'end_date'  => 'required|date'
            ];
        }

        if ($this->route()->getName() === 'stream.update') {
            return [
                'name'  => 'string',
                'description'   => 'string',
                'status'    => 'boolean',
                'video_stream_url'  => 'string',
                'poster_url'    => 'string',
                'start_date'    => 'date',
                'end_date'  => 'date'
            ];
        }
    }
}
