import { TemplateRef } from "@angular/core";
import { CardConfig } from "@takedemotest/krishito-ui-card";



interface ExpenseRevenue{
    expense:TemplateRef<any>;
    revenue:TemplateRef<any>;
    netProfit:TemplateRef<any>;
    profitMarginPercent:TemplateRef<any>;
}

export const  EXPENSE_REVENUE_CONFIG=(templates: ExpenseRevenue): CardConfig[] => [
  {
    id: `Expenses MTD`,
    title: `Expenses MTD`,
    icon: 'warning',
    showHeader: true,
    hasBodyContent:templates.expense
  },
  {
    id: 'Revenue MTD',
    title: 'Revenue MTD',
    icon: 'warning',
    showHeader: true,
    hasBodyContent:templates.revenue
  },
  {
    id: 'Net Profit MTD',
    title: 'Net Profit MTD',
    icon: 'warning',
    showHeader: true,
    hasBodyContent:templates.netProfit
  },
  {
    id: 'Profit Margin Percent MTD',
    title: 'Profit Margin Percent MTD',
    icon: 'warning',
    showHeader: true,
    hasBodyContent:templates.profitMarginPercent
  }
]