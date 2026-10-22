import { Component, inject } from '@angular/core';

import { DataService } from '../../services/data-service';

@Component({
  imports: [],
  selector: 'app-interests-tab',
  styleUrl: './interests-tab.less',
  templateUrl: './interests-tab.html',
})
export class InterestsTab {
  private dataService = inject(DataService);
}
