import { Component, inject, signal, TemplateRef, ViewChild } from '@angular/core';
import { IconService } from '@takedemotest/krishito-ui-icons';
import { MatIconModule } from '@angular/material/icon';
import { CardConfig, CardsComponent } from '@takedemotest/krishito-ui-card';
import { TASK_NOTIFICATION_CONFIG } from './task-notification-config';
@Component({
  selector: 'expense-revenue',
  standalone:true,
  imports: [MatIconModule, CardsComponent],
  templateUrl: './expense-revenue-component.html',
  styleUrl: './expense-revenue-component.scss',
})
export class ExpenseRevenueComponent {
  private iconService = inject(IconService);
  public taskNotification = signal<CardConfig[]>([]);

  @ViewChild('milkProduction') milkProductionTemplate!: TemplateRef<any>;
  @ViewChild('inventoryAlerts') inventoryAlertsTemplate!: TemplateRef<any>;
  @ViewChild('upcomingTasks') upcomingTasksTemplate!: TemplateRef<any>; 

  ngOnInit(){
      this.iconService.registerIcons([
      'dashboard', 'warning'])
  }

    ngAfterViewInit(){
  
      const taskNotificationConfig = TASK_NOTIFICATION_CONFIG({
        milkProduction: this.milkProductionTemplate,
        inventoryAlerts: this.inventoryAlertsTemplate,
        upcomingTasks: this.upcomingTasksTemplate
      });
      this.taskNotification.set(taskNotificationConfig);
    }

}
