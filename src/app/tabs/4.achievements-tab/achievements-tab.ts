import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  imports: [],
  selector: 'app-achievements-tab',
  styleUrl: './achievements-tab.less',
  templateUrl: './achievements-tab.html',
})
export class AchievementsTab {
  private dataService = inject(DataService);
}
