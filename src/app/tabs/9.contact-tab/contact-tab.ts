import { Component, inject } from '@angular/core';

import { DataService } from '../../services/data-service';

@Component({
  imports: [],
  selector: 'app-contact-tab',
  styleUrl: './contact-tab.less',
  templateUrl: './contact-tab.html',
})
export class ContactTab {
  private dataService = inject(DataService);
}
