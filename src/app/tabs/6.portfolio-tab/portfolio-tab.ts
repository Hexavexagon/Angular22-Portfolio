import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { DataService } from '../../services/data-service';

@Component({
  imports: [
    MatCardModule,
  ],
  selector: 'app-portfolio-tab',
  styleUrl: './portfolio-tab.less',
  templateUrl: './portfolio-tab.html',
})
export class PortfolioTab {
  private dataService = inject(DataService);
}
