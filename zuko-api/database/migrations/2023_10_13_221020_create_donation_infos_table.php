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
        Schema::create('donation_infos', function (Blueprint $table) {
            $table->id();
            $table->string("account_number", 50);
            $table->string("recipient_name", 256);
            $table->integer("default_amount");
            $table->integer("payment_code");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donation_infos');
    }
};
