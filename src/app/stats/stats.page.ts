import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';
import { SELECT_OPTIONS, STAT_OPTIONS } from '../core/interfaces';
import { DataMappingService } from '../core/services/data-mapping.service';
import { CommonService } from '../core/services/common.service';
import { RoutingService } from '../core/services/routing.service';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonGrid,
    IonRow,
    IonCol,
    HeaderComponent,
  ],
})
export class StatsPage {
  statsOptions!: STAT_OPTIONS[];

  constructor(
    private dataMapping: DataMappingService,
    public cmnService: CommonService,
    private routingSvc: RoutingService,
  ) {}

  ionViewWillEnter() {
    this.statsOptions = this.dataMapping.statsOptions;
  }

  selectOption(stat: STAT_OPTIONS) {
    this.routingSvc.navigateForward(stat.url);
  }
}
