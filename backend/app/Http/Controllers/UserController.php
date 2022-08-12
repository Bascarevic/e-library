<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
       $users = User::all();
       $logged_user = auth()->user();
       $user_role = UserRole::find($logged_user->id_role);
       if($user_role->role_name != 'admin'){
        return response()->json(['success'=>false, 'error'=>'You do not have permission for that action!']);
       }
       return response()->json(['succes'=>true, 'users'=>new UserCollection(($users))]);
    }

    //ako bude trebala ovu metodu ispravljas tako da primi id usera i po tome pretrazuje
    public function show(User $user) {
        $logged_user = auth()->user();
        $user_role = UserRole::find($logged_user->id_role);
        if ($user_role->role_name != 'admin' && $logged_user->id != $user->id) {
            return response()->json(['success' => false, 'error' => 'You do not have permission for that action!']);
        }
        return response()->json(['success' => true, 'user' => new UserResource($user)]);
    }

    //AKO BUDE TREBALO DODATI METODU ZA UPDATE
    public function destroy(User $user) {
        $logged_user = auth()->user();
        $user_role = UserRole::find($logged_user->role_id);
        if ($user_role->role_name != 'admin') {
            return response()->json(['success' => false, 'error' => 'You do not have permission for that action!']);
        }
        $user->delete();
        return response()->json('User deleted!');
    }
}
