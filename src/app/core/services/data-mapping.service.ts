import { Injectable } from '@angular/core';
import { SELECT_OPTIONS, STAT_OPTIONS } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataMappingService {
  constructor() {}

  paymentOptions: SELECT_OPTIONS[] = [
    { name: 'Daily', value: 'daily' },
    { name: 'Weekly', value: 'weekly' },
    { name: 'No Interest', value: 'noInterest' },
  ];

  statsOptions: STAT_OPTIONS[] = [
    {
      name: 'Users',
      url: 'users',
      color: 'border-sky-blue',
    },
  ];
}
