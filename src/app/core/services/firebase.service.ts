import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { firstValueFrom } from 'rxjs';
import { COLLECTIONS } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private fireStore: Firestore) {}

  async createSingleDocument<T extends { [x: string]: any }>(
    collectionName: COLLECTIONS,
    payload: T,
  ) {
    try {
      const ref = collection(this.fireStore, collectionName);
      const docRef = await addDoc(ref, payload);
      console.log('Document successfully added with ID:', docRef.id);
    } catch (error) {
      throw error;
    }
  }

  async updateSingleDocument<T extends { [x: string]: any }>(
    collectionName: COLLECTIONS,
    docId: string,
    data: T,
  ): Promise<void> {
    try {
      const docRef = doc(this.fireStore, collectionName, docId);
      await setDoc(docRef, data, { merge: true }); // Merges updates with existing data
      console.log('Document successfully updated');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  }

  async deleteSingleDocument(
    collectionName: COLLECTIONS,
    docId: string,
  ): Promise<void> {
    try {
      const docRef = doc(this.fireStore, collectionName, docId);
      await deleteDoc(docRef);
      console.log('Document successfully deleted');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  }

  async getSingleDocument<T>(
    collectionName: COLLECTIONS,
    docId: string,
  ): Promise<T | null> {
    try {
      const docRef = doc(this.fireStore, collectionName, docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        return docSnap.data() as T;
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching document:', error);
      return null;
    }
  }

  async getCollectionData<T>(collectionName: COLLECTIONS | ''): Promise<T[]> {
    try {
      const ref = collection(this.fireStore, collectionName);
      const data$ = collectionData(ref);
      const results = await firstValueFrom(data$);
      console.log('Fetched data:', results);
      return results as T[];
    } catch (error) {
      console.error('Error fetching collection data:', error);
      return [];
    }
  }

  createUniqueId() {}
}
