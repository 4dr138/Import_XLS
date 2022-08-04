import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as XLSX from 'xlsx';
// import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

// API url
  baseApiUrl = "https://file.io"

  constructor(private http:HttpClient) { }

// Returns an observable
  upload(file: any):Observable<any> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    this.fileReader(file, null);
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
  }

  private fileReader(file: any, line: any) {
    let fileReader = new FileReader();

    // Lecture du fichier puis stockage ligne par ligne dans la BDD
    fileReader.onload = (e) => {
      file.arrayBuffer = fileReader.result;
      const data = new Uint8Array(file.arrayBuffer);
      const arr = [];

      for (let i = 0; i !== data.length; i++) {
        arr[i] = String.fromCharCode(data[i]);
      }

      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary', cellDates: true });
      const first_sheet_name = workbook.SheetNames[0];

      const worksheet = workbook.Sheets[first_sheet_name];
      file.worksheet = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      /**
       * Call matching function
       */
      this.stockFileInBDD(file.worksheet);
    };
    fileReader.readAsArrayBuffer(file);
  }

  stockFileInBDD(worksheet: []){
    for(let i = 1; i < worksheet.length; i++){
      let line = worksheet[i];
      let body = new HttpParams();
      body = body.set('name', line['Nom du groupe']);
      body = body.append ('origin', line['Origine']);
      body = body.append ('city', line['Ville']);
      body = body.append('year_start', line['Année début']);
      body = body.append('year_end', line['Année séparation']);
      body = body.append('creator', line['Fondateurs']);
      body = body.append('members', line['Membres']);
      body =  body.append('style', line['Courant musical']);
      body = body.append('presentation', line['Présentation']);
      let req = this.http.post('https://127.0.0.1:8000/insertFromXls', body).subscribe();
    }
  }

}
