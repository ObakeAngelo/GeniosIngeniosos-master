import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import * as moment from 'moment';
@Component({
  selector: 'app-campeonatos',
  templateUrl: './campeonatos.component.html',
  styleUrls: ['./campeonatos.component.scss']
})
export class CampeonatosComponent{
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  campeonatos$: Observable<any>;

  constructor(){

    const collectionInstance = collection(this.firestore, 'Campeonato');
    collectionData(collectionInstance, { idField: 'id' }).subscribe(() => {});
    this.campeonatos$ = collectionData(collectionInstance, { idField: 'id' });

  }
}
