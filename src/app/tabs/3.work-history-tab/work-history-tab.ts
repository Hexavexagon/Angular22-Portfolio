import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  imports: [],
  selector: 'app-work-history-tab',
  styleUrl: './work-history-tab.less',
  templateUrl: './work-history-tab.html',
})
export class WorkHistoryTab {
  private dataService = inject(DataService);
}

