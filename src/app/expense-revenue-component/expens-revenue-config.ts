import { TemplateRef } from '@angular/core';
import { gridConfig } from '@takedemotest/krishito-ui-ag-grid';
import { CardConfig } from '@takedemotest/krishito-ui-card';


interface ExpenseRevenue {
  expense: TemplateRef<any>;
  revenue: TemplateRef<any>;
  netProfit: TemplateRef<any>;
  profitMarginPercent: TemplateRef<any>;
}

export const EXPENSE_REVENUE_CONFIG = (templates: ExpenseRevenue): CardConfig[] => [
  {
    id: `Expenses MTD`,
    title: `Expenses MTD`,
    icon: 'warning',
    showHeader: true,
    hasBodyContent: templates.expense,
  },
  {
    id: 'Revenue MTD',
    title: 'Revenue MTD',
    icon: 'warning',
    showHeader: true,
    hasBodyContent: templates.revenue,
  },
  {
    id: 'Net Profit MTD',
    title: 'Net Profit MTD',
    icon: 'warning',
    showHeader: true,
    hasBodyContent: templates.netProfit,
  },
  {
    id: 'Profit Margin Percent MTD',
    title: 'Profit Margin Percent MTD',
    icon: 'warning',
    showHeader: true,
    hasBodyContent: templates.profitMarginPercent,
  },
];

export const TRANSACTION_GRID_CONFIG: gridConfig = {
  gridId: 'transactions-grid',
  title: 'All financial transactions',
  rowSelection: 'multiple',
  pageSize: 10,
  columns: [
    {
      headerName: '',
      width: 50,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      pinned: 'left',
      resizable: false,
    },
    {
      field: 'type',
      headerName: 'Type',
      type: 'badge',

      badgeColorMap: {
        REVENUE: { bg: '#dcfce7', text: '#15803d' },
        EXPENSE: { bg: '#fee2e2', text: '#b91c1c' },
      },
    },
    { field: 'category', headerName: 'Category', type: 'text' },
    { field: 'title', headerName: 'Title', type: 'text' },
    { field: 'description', headerName: 'Description', type: 'text' },
    { field: 'amount', headerName: 'Amount', type: 'currency', currencySymbol: '₹' },
    { field: 'createdAt', headerName: 'Date', type: 'date' },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      actions: [{ name: 'delete', label: 'Delete', btnClass: 'btn-danger' }],
    },
  ],
  actionButtons: [
    { actionName: 'Add', label: 'Add Transaction ', icon: 'warning', disable: false },
  ],
};
