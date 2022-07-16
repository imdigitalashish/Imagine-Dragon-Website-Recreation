<?php

namespace App\Http\Controllers;

use App\Models\LandingSlider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    //

    public function getAllSliderImages(Request $request)
    {
        return response()->json(LandingSlider::all());
    }

    public function uploadSliderImage(Request $request)
    {

        $file = $request->file('uploaded_file')->store("public/documents");
        $fileNameWithUploaded =  explode("/", $file)[2];
        $fileNameWithUploaded = "storage/documents/" . $fileNameWithUploaded;

        $createLandingSlide = new LandingSlider();
        $createLandingSlide->file_name = $request->post("file_name");
        $createLandingSlide->file_url = $fileNameWithUploaded;
        $createLandingSlide->save();

        return response()->json(["response" => "Slider Images Succsesfully Added"]);
    }
}
