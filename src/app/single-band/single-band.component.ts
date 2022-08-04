import { Component, OnInit } from '@angular/core';
import { GroupModel } from "../model/group.model";
import {ActivatedRoute, Router} from '@angular/router';
import {CrudTableService} from "../services/crud-table.service";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-single-band',
  templateUrl: './single-band.component.html',
  styleUrls: ['./single-band.component.scss']
})
export class SingleBandComponent implements OnInit {

  name!: string;

  band!: Observable<GroupModel[]>;
  constructor(private route: ActivatedRoute,
              private crudTableService: CrudTableService,
              private router: Router){

  }

  ngOnInit(): void {
    // Récupération des informations d'un groupe par id
    const bandId = +this.route.snapshot.params['id'];
    this.band = this.crudTableService.getBandById(bandId);
  }

  updateBand(form: NgForm){
    //Mise à jour d'un groupe à partir du formulaire soumis
    this.crudTableService.updateBand(form.value);
    this.router.navigateByUrl(`/`);
  }

}
