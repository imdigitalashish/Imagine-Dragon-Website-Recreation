<?php

namespace App\Http\Controllers;

use App\Models\Music;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class MusicController extends Controller
{
    //
    public function getAllMusicList(Request $request)
    {
        return response()->json(Music::all());
    }

    public function addMusic(Request $request)
    {
        try {
            $token = $request->get("token");
            $userStatus = User::where("remember_token", $token)->first()->role;
            if ($userStatus == "admin") {
                $jsonObject = $request->all();
                unset($jsonObject["token"]);
                // 
                Music::insert($jsonObject);
                return response()->json(["response" => "Your music was successfully added"]);
            } else {
                return response()->json(["response" => "you don't have permission to add tour"], 501);
            }
        } catch (Exception $e) {
            return response()->json(["response" => "Somethign went wrong"]);
        }
    }

    
}
