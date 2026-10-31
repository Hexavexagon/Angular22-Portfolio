// Angular
import { Component, Input } from '@angular/core';

// Types
import { ParagraphData } from '../../../types/tab-types';

@Component({
  imports: [],
  selector: 'app-paragraph-tab',
  styleUrl: './paragraph-tab.less',
  templateUrl: './paragraph-tab.html',
})
export class ParagraphTab {
  @Input() tab!: ParagraphData;
}
