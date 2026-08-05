import { Component, inject, signal, TemplateRef, ViewChild } from '@angular/core';
import { IconService } from '@takedemotest/krishito-ui-icons';
import { MatIconModule } from '@angular/material/icon';
import { CardConfig, CardsComponent } from '@takedemotest/krishito-ui-card';
import { Transaction, TransactionService } from '../services/transaction.service';
import { AgGridUi, gridConfig } from '@takedemotest/krishito-ui-ag-grid';
import { EXPENSE_REVENUE_CONFIG } from './expens-revenue-config';
@Component({
  selector: 'expense-revenue',
  standalone:true,
  imports: [MatIconModule, CardsComponent, AgGridUi],
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
    this.fetchData();
      this.iconService.registerIcons([
      'dashboard', 'warning'])
  }

  fetchData() {
    this.loading = true;

    // Fetch Transactions List
    this.transactionService.getTransactions().subscribe({
      next: (res:any) => {
        this.transactions = res.data;
        this.loading = false;
      },
      error: (err:any) => {
        this.errorMessage = 'Failed to load transactions';
        this.loading = false;
      }
    });

    // Fetch Summary Totals
    this.transactionService.getFinancialSummary().subscribe({
      next: (res:any) => {
        this.summary = res.data;
      }
    });
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.transactionService.deleteTransaction(id).subscribe({
        next: () => {
          this.fetchData(); // Refresh list after deletion
        }
      });
    }
  }


  fetchFn = () => this.transactionService.getTransactions();

  // Low-code Config stored as a Signal
  gridConfig = signal<gridConfig>({
    gridId: 'transactions-grid',
    title: 'All financial transactions',
    pageSize: 10,
    columns: [
      { 
        field: 'type', 
        headerName: 'Type', 
        type: 'badge',
        badgeColorMap: {
          'REVENUE': { bg: '#dcfce7', text: '#15803d' },
          'EXPENSE': { bg: '#fee2e2', text: '#b91c1c' }
        }
      },
      { field: 'category', headerName: 'Category', type: 'text' },
      { field: 'amount', headerName: 'Amount', type: 'currency', currencySymbol: '₹' },
      { field: 'createdAt', headerName: 'Date', type: 'date' },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        actions: [{ name: 'delete', label: 'Delete', btnClass: 'btn-danger' }]
      }
    ]
  });

  handleAction(event: { actionName: string; rowData: any }): void {
    if (event.actionName === 'delete') {
      this.transactionService.deleteTransaction(event.rowData._id).subscribe(() => {
        alert('Transaction deleted!');
      });
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
