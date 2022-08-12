<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthorCollection;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    //ne znam sta ce nam ovde trebati od metoda
    public function index()
    {
        $sviAutori = Author::all();
        return new AuthorCollection($sviAutori); //proveri da li je ovako dobro
    }

    public function destroy(Author $autor)
    {
        $autor->delete();
        return response()->json('Autor obrisan!');
    }
}
