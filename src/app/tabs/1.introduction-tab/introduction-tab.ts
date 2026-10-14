import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  imports: [],
  selector: 'app-introduction-tab',
  styleUrl: './introduction-tab.less',
  templateUrl: './introduction-tab.html',
})
export class IntroductionTab {
  public dataService = inject(DataService);
}
