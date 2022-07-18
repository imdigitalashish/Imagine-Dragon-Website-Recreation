import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrls: ['./slider-images.component.css']
})
export class SliderImagesComponent implements OnInit {

  constructor(private httpClient: HttpClient, private _snackbar: MatSnackBar) { }

  tourForm = new FormGroup({
    tour_date: new FormControl(''),
    location_of_tour: new FormControl(''),
    destination_of_tour: new FormControl(''),
    tickets_link: new FormControl(''),
    tickets_link_vip: new FormControl(''),
  })

  ngOnInit(): void {


  }


  addTourToList() {
    let formatedDate: any = new Date(this.tourForm.controls.tour_date.value!);

    formatedDate = `${formatedDate.getFullYear()}-${formatedDate.getMonth()}-${formatedDate.getDate()}`;
    const formData = new FormData();
    formData.append('token', "tokenfornow");
    formData.append("tour_date", formatedDate);
    formData.append("location_of_tour", this.tourForm.controls.location_of_tour.value!);
    formData.append("destination_of_tour", this.tourForm.controls.destination_of_tour.value!);
    formData.append("tickets_link", this.tourForm.controls.destination_of_tour.value!);
    formData.append("tickets_link_vip", this.tourForm.controls.destination_of_tour.value!);

    this.httpClient.post(environment.LARABACK + "/tours/add", formData).subscribe((res: any) => {
      if (res.response == "tour added successfully") {
        this._snackbar.open("Successfully Added Tours", "OK");
      }
    })


  }



}
