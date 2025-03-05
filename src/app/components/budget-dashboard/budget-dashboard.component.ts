import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { COLLECTIONS } from 'src/app/core/enums';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-budget-dashboard',
  templateUrl: './budget-dashboard.component.html',
  styleUrls: ['./budget-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BudgetDashboardComponent implements OnInit {
  amountToGet: number = 0;
  amountHave: number = 0;

  constructor(private firebaseSvc: FirebaseService) {}

  async ngOnInit() {
    this.amountToGet = 200000;
    this.amountHave = 50000;
    await this.getBudgetDetails();
  }

  async getBudgetDetails() {
    try {
      const budgetDetails = await this.firebaseSvc.getCollectionData(
        COLLECTIONS.BUDGET,
      );

      console.error(budgetDetails);
    } catch (error) {
      console.error('@Error', error);
    }
  }
}
