import { Component, OnInit, Input } from '@angular/core';
import { CrudTableService } from '../services/crud-table.service';
import {Observable} from "rxjs";
import {GroupModel} from "../model/group.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-groups',
  templateUrl: './crud-groups.component.html',
  styleUrls: ['./crud-groups.component.scss']
})
export class CrudGroupsComponent implements OnInit {

  @Input() band!: GroupModel;
  aBands$!: Observable<GroupModel[]>;
  constructor(private crudTableService:CrudTableService,
              private router: Router) { }

  ngOnInit(): void {
    // Récupération de tous mes groupes depuis le service qui appelle les controlleurs Symfony
    this.aBands$ = this.crudTableService.getAllBands();
  }

  onViewBand(id: number){
    // Redirection au clic sur le btn modifier
    this.router.navigateByUrl(`band/${id}`);
  }

  deleteBand(id: number){
    // Suppression puis rechargement page
    this.crudTableService.deleteBandById(id);
    location.reload();
  }

}
