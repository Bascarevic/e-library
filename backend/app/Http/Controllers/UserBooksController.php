<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use App\Models\Book;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\ErrorHandler\Collecting;

class UserBooksController extends Controller
{
    public function index()
    {
        $logged_user = auth()->user();
        $user_role=UserRole::find($logged_user->id_role);

        if($user_role->role_name != 'admin') {
            return response()->json(['You do not have premission for that action!']);
        }
/*
        $books = DB::table('books')
        ->join('users', 'books.id_user', '=', 'users.id')
        ->where('users.id', '=', $logged_user->id)
        ->get();
        */
        $books = Book::where('id_user', $logged_user->id)->get();

      //  return response()->json($books); //nzm hoce li ga ovako procitati
        return new BookCollection($books);
    }
}
