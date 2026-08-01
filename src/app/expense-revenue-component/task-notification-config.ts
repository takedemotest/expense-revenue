import { TemplateRef } from "@angular/core";
import { CardConfig } from "@takedemotest/krishito-ui-card";



interface DashboardTaskNotification{
    milkProduction:TemplateRef<any>;
    inventoryAlerts:TemplateRef<any>;
    upcomingTasks:TemplateRef<any>;
}

export const  TASK_NOTIFICATION_CONFIG=(templates: DashboardTaskNotification): CardConfig[] => [
  {
    id: `Milk Production`,
    title: `Today's Milk Production`,
    icon: 'warning',
    showHeader: true,
    hasBodyContent:templates.milkProduction
  },
  {
    id: 'Inventory Alerts',
    title: 'Inventory Alerts',
    icon: 'warning',
    showHeader: true,
    hasBodyContent:templates.inventoryAlerts
  },
  {
    id: 'Upcoming Tasks',
    title: 'Upcoming Tasks',
    icon: 'warning',
    showHeader: true,
    hasBodyContent:templates.upcomingTasks
  }
]