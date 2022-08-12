<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    //skraceni nacin
    public function index() {
        return new BookCollection(Book::all());
    }

    public function store(Request $request) {

        $logged_user = auth()->user();
        $user_role=UserRole::find($logged_user->id_role);

        if($user_role->role_name != 'admin') {
            return response()->json(['You do not have premission for that action!']);
        }

            $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:50',
                'description' => 'required|string|max:255',
                'id_author'=>'required|integer',
                'id_category'=>'required|integer'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors());
            }

            $book = Book::create([
                'title'=> $request->title,
                'description'=> $request->description,
                'id_author'=> $request->id_author,
                'id_category'=> $request->id_category,
                'id_user' => $logged_user->id
            ]);
//DA LI OVDE TREBA SAVE();??????
            return response()->json(['success' => true, 'message' => 'Book saved!', new BookResource($book)]);

    }
/*
    public function update(Request $request, Book $book)
    {
        $logged_user = auth()->user();
        $user_role=UserRole::find($logged_user->id_role);

        if($user_role->role_name != 'user') {
            return response()->json(['You do not have premission fro that action!']);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:50',
            'description' => 'required|string|max:255',
            'id_author'=>'required|integer',
            'id_category'=>'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        } 

        $book->title = $request->title;
        $book->description = $request->description;
        $book->id_author = $request->id_author;
        $book->id_category = $request->id_category;
        $book->id_user = $logged_user->id;

        $book->save();
        

        return response()->json(['success' => true, 'message' => 'Book updated.', new BookResource($book)]);
    }

*/
//OVA DRUGA METODA RADI!!!!!!!!!!!!
    public function update(Request $request, $id)
    {
        $logged_user = auth()->user();
        $user_role=UserRole::find($logged_user->id_role);

        if($user_role->role_name != 'user') {
            return response()->json(['You do not have premission fro that action!']);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:50',
            'description' => 'required|string|max:255',
            'id_author'=>'required|integer',
            'id_category'=>'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        } 

        $book = Book::find($id);

        $book->title = $request->title;
        $book->description = $request->description;
        $book->id_author = $request->id_author;
        $book->id_category = $request->id_category;
        $book->id_user = $logged_user->id;

        $book->save();
        

        return response()->json(['success' => true, 'message' => 'Book updated.', new BookResource($book)]);
    }

    public function destroy(Book $book) {

        $logged_user = auth()->user();
        $user_role=UserRole::find($logged_user->id_role);

        if($user_role->role_name!='admin') {
            return response()->json(['You do not have premission for that action!']);
        }

        $book->delete();
        return response()->json(['Book deleted!']);
    }

    public function show($id)
    {
        $book = Book::find($id);
        return new BookResource($book);
    }
}
