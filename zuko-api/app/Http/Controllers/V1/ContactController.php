<?php

Namespace App\Http\Controllers\V1;
use App\Notifications\ContactFormMessage;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactFormRequest;
use App\Models\Recipient;

Class ContactController extends Controller
{
    public function mailContactForm(ContactFormRequest $message, Recipient $recipient)
    {
        $recipient->notify(new ContactFormMessage($message));
  
        return response()->json(['success' => true],200);
    }
}