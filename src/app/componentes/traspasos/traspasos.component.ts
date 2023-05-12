import { Component, inject} from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-traspasos',
  templateUrl: './traspasos.component.html',
  styleUrls: ['./traspasos.component.scss']
})
export class TraspasosComponent {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  Trapaso$: Observable<any>;

  constructor() {

    const collectionInstance = collection(this.firestore, 'Traspasos');
    collectionData(collectionInstance, { idField: 'id' }).subscribe(() => {});
    this.Trapaso$ = collectionData(collectionInstance, { idField: 'id' });

}
}
