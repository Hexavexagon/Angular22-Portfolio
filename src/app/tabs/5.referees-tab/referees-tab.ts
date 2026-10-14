import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  imports: [],
  selector: 'app-referees-tab',
  styleUrl: './referees-tab.less',
  templateUrl: './referees-tab.html',
})
export class RefereesTab {
  private dataService = inject(DataService);
}
