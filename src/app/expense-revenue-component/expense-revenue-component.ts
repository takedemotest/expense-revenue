import { Component, inject, signal, TemplateRef, ViewChild } from '@angular/core';
import { IconService } from '@takedemotest/krishito-ui-icons';
import { MatIconModule } from '@angular/material/icon';
import { CardConfig, CardsComponent } from '@takedemotest/krishito-ui-card';
import { Transaction, TransactionService } from '../services/transaction.service';
import { AgGridUiComponent, gridConfig } from '@takedemotest/krishito-ui-ag-grid';
import { EXPENSE_REVENUE_CONFIG, TRANSACTION_GRID_CONFIG } from './expens-revenue-config';
@Component({
  selector: 'expense-revenue',
  standalone:true,
  imports: [MatIconModule, CardsComponent, AgGridUiComponent],
  templateUrl: './expense-revenue-component.html',
  styleUrl: './expense-revenue-component.scss',
})
export class ExpenseRevenueComponent {
  private iconService = inject(IconService);
  public expenseRevenue = signal<CardConfig[]>([]);

  transactions: Transaction[] = [];
  summary: any = null;
  loading = false;
  errorMessage = '';

  @ViewChild('expense') expenseTemplate!: TemplateRef<any>;
  @ViewChild('revenue') revenueTemplate!: TemplateRef<any>;
  @ViewChild('netProfit') netProfitTemplate!: TemplateRef<any>; 
  @ViewChild('profitMarginPercent') profitMarginPercentTemplate!: TemplateRef<any>;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(){
      this.iconService.registerIcons([
      'dashboard', 'warning']);
      this.fetchData();
  }

 

  fetchTransactionData = () => this.transactionService.getTransactions();

  fetchData(){
    this.transactionService.getFinancialSummary().subscribe({
      next:(response) => {
        this.summary = response.data;
      },
      error:(err) => {
        this.errorMessage = err?.error?.message || 'Failed to fetch financial summary.';
      }
    })
  }
  

  gridConfig = signal<gridConfig>(TRANSACTION_GRID_CONFIG);

  handleAction(event: { actionName: string; rowData: any }): void {
    if (event.actionName === 'delete') {
      this.transactionService.deleteTransaction(event.rowData._id).subscribe({
        next: () => { 
              alert('Transaction deleted successfully');
        },
        error: (err) => {
          alert(err?.error?.message || 'Failed to delete transaction.');
        }
      })
    }
  }
    
    ngAfterViewInit(){
  
      const expenseRevenueConfig = EXPENSE_REVENUE_CONFIG({
        expense: this.expenseTemplate,
        revenue: this.revenueTemplate,
        netProfit: this.netProfitTemplate,
        profitMarginPercent: this.profitMarginPercentTemplate
      });
      this.expenseRevenue.set(expenseRevenueConfig);
    }

}
