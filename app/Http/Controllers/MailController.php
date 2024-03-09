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
            "cim" => "Cim leírás",
            "uzenet"  => "Általános szöveg leírás."
        ];

        Mail::to("weinbergerpeti@gmail.com")->send(new DemoMail($adat));
        // return response()->json(["Nézd meg az emailed"]);

        dd("Sikeresen elküldve az email.");
    }

    public function index2(Request $request)
    {
        $fajl =$request->all();
        $adat=[
            "cim" => "Cim leírás",
            "uzenet"  => "Általános szöveg leírás.",
            "fajl" => $fajl
        ];

        Mail::to("weinbergerpeti@gmail.com")->send(new DemoMail($adat));
        // return response()->json(["Nézd meg az emailed"]);

        dd("Sikeresen elküldve az email.");
    }
}
