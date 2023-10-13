<?php

namespace App\Http\Controllers\V1;
use Illuminate\Http\Request;
use App\Notifications\NewPost;
use App\Models\Guest;
use Auth;
use Notification;
use App\Http\Controllers\Controller;

class PushController extends Controller
{
    public function notify()
    {
    Notification::send(Guest::all(),new NewPost(Guest::find(2)));
    return response()->json(['success' => true],200);
    }

    /**
     * Store the PushSubscription.
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request){
        $this->validate($request,[
            'endpoint'    => 'required',
            'keys.auth'   => 'required',
            'keys.p256dh' => 'required'
        ]);
        $endpoint = $request->endpoint;
        $token = $request->keys['auth'];
        $key = $request->keys['p256dh'];
        $user = Guest::firstOrCreate([
            'endpoint' => $endpoint
        ]);
        $user->updatePushSubscription($endpoint, $key, $token);
        
        return response()->json(['success' => true],200);
    }
    
}