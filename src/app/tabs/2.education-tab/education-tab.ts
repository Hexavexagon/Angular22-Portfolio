import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  imports: [],
  selector: 'app-education-tab',
  styleUrl: './education-tab.less',
  templateUrl: './education-tab.html',
})
export class EducationTab {
  private dataService = inject(DataService);
}
