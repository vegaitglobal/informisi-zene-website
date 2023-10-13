<?php

namespace App\Notifications;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use NotificationChannels\WebPush\WebPushMessage;
use NotificationChannels\WebPush\WebPushChannel;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use App\Models\Guest;

class NewPost extends Notification
{

    use Queueable;
    public $newPost;
    public function __construct(Guest $post)
    {
        $this->newPost = $post;
    }
    
    public function via($notifiable)
    {
        return [WebPushChannel::class];
    }

    public function toWebPush($notifiable, $notification)
    {
        return (new WebPushMessage)
            ->title('New post')
            ->icon('/notification-icon.png')
            ->body('Zuko posted a new post')
            ->data(['id' => $this->newPost->id])
            ->action('View post', 'view_post_action');
    }
    
}