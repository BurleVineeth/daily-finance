import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { COLLECTIONS } from '../core/enums';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private firestore: Firestore) {}

   createSingleDocument(collectionName: COLLECTIONS) {

   }

   updateSingleDocument<T>(collectionName: COLLECTIONS, docId: string, data: T) {

   }

   deleteSingleDocument(collectionName: COLLECTIONS, docId: string) {

   }

   getSingleDocument<T>(collectionName: COLLECTIONS, docId: string): T {
    return null as T;
   }

   getCollectionData<T>(collectionName: COLLECTIONS): T[] {
    // console.error('king');
    // const ref = collection(this.firestore, 'king');
    // collectionData(ref).subscribe(res => {
    //   console.log(res);
    // })
    return [null] as T[];
   }
}
