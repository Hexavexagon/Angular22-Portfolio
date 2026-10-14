import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  imports: [],
  selector: 'app-portfolio-tab',
  styleUrl: './portfolio-tab.less',
  templateUrl: './portfolio-tab.html',
})
export class PortfolioTab {
  private dataService = inject(DataService);
}
