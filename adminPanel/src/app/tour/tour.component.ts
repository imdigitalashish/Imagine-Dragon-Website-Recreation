import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor(private httpClient: HttpClient, private _snackbar: MatSnackBar) { }


  fileName = new FormControl('');
  file: any;
  addFileToFileList(event: any) {
    this.file = event.target.files[0];
  }

  ngOnInit(): void {
  }


  uploadFileToSlider() {
    let formdata = new FormData();

    formdata.append("uploaded_file", this.file);
    formdata.append("file_name", this.fileName.value!);

    this.httpClient.post(`${environment.LARABACK}/slider/upload`, formdata).subscribe((res:any)=>{
      if(res.response === "Slider Images Succsesfully Added") {
        this._snackbar.open("Slider Image Added Successfully", "OK")
      }
    })


  }
  

}
