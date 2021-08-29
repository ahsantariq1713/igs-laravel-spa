<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class welcomeController extends Controller
{
    public function welcome()
    {
        return Inertia::render('welcome');
    }

    public function postWelcome(Request $request)
    {
        # code...
    }
}
