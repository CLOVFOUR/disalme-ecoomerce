<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    //
    public function __construct()
    {
        //   $this->middleware('auth');
    }
    public function index()
    {

        return view('ecommerce.index');

    }
    public function faq()
    {

        return view('ecommerce.faqs');

    }
}
