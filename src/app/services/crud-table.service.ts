import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";
import {CrudGroupsComponent} from "../crud-groups/crud-groups.component";
import {GroupModel} from "../model/group.model";
import {Form} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class CrudTableService {

  aGroups$!: Observable<GroupModel[]>;

  constructor(private http:HttpClient) { }

  getAllBands(): Observable<GroupModel[]>{
    // Récupération de tous les groupes
    return this.http.get<GroupModel[]>('https://127.0.0.1:8000/getAllBands');
  }

  getBandById(bandId: number): Observable<GroupModel[]>{
    // Récupération d'un groupe par son id
    return this.http.get<GroupModel[]>('https://127.0.0.1:8000/getBandById/' + bandId);
  }

  updateBand(formData: []){
    // Mise à jour des informations d'un groupe, par id
    this.http.post('https://127.0.0.1:8000/updateBand', JSON.stringify(formData)).subscribe();
  }

  deleteBandById(idBand: number){
    // Suppression d'un groupe par id
    this.http.post('https://127.0.0.1:8000/deleteBand', idBand).subscribe();
  }

}
