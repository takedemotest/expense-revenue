import { Component, inject } from '@angular/core';
import { IconService } from '@takedemotest/krishito-ui-icons';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'expense-revenue',
  standalone:true,
  imports: [MatIconModule],
  templateUrl: './expense-revenue-component.html',
  styleUrl: './expense-revenue-component.scss',
})
export class ExpenseRevenueComponent {
  private iconService = inject(IconService);

  ngOnInit(){
      this.iconService.registerIcons([
      'dashboard', 'warning'])
  }
}
