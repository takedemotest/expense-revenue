import { Routes } from '@angular/router';
import { ExpenseRevenueComponent } from './expense-revenue-component/expense-revenue-component';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  },
    {
    path: 'test',
    component: ExpenseRevenueComponent
  },
];
