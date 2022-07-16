<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class TourController extends Controller
{
    //

    public function getAllTour(Request $request)
    {

        return response()->json(Tour::all());
    }

    public function addTour(Request $request)
    {
        try {
            $token = $request->get("token");
            $userStatus = User::where("remember_token", $token)->first()->role;
            if ($userStatus == "admin") {
                $jsonObject = $request->all();
                unset($jsonObject["token"]);

                $tour = Tour::insert($jsonObject);
                return response()->json(["response" => "tour added successfully"]);
            } else {
                return response()->json(["response" => "you don't have permission to add tour"], 501);
            }
        } catch (Exception $e) {
            return response()->json(["response" => "Something went wrong please try again later. $e"]);
        }
    }
}
