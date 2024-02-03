<?php

namespace App\Http\Controllers;

use App\Mail\DemoMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function index()
    {
        $adat=[
            "title" => "Cim leírás",
            "body"  => "Általános szöveg leírás."
        ];

        Mail::to("weinbergerpeti@gmail.com")->send(new DemoMail($adat));
        // return response()->json(["Nézd meg az emailed"]);

        dd("Sikeresen elküldve az email.");
    }
}
