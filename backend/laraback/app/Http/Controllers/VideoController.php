<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\videoData;
use Exception;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    //

    public function getAllVideos(Request $request)
    {
        return response()->json(videoData::all());
    }

    public function addVideoToList(Request $request)
    {
        try {
            $token = $request->get("token");
            $userStatus = User::where("remember_token", $token)->first()->role;
            if ($userStatus == "admin") {
                $jsonObject = $request->all();
                unset($jsonObject["token"]);
                // return $jsonObject;
                videoData::insert($jsonObject);
                return response()->json(["response" => "Video added successfully"]);
            } else {
                return response()->json(["response" => "you don't have permission to add tour"], 501);
            }
        } catch (Exception $e) {
            return response()->json(["response" => "Something went wrong $e"] , 401);
        }
    }
}
