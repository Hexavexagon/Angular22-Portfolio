// Angular
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { MatTabsModule } from '@angular/material/tabs';
import { ParagraphTab } from './components/tabs/paragraph-tab/paragraph-tab';
import { CardTab } from './components/tabs/card-tab/card-tab';
import { ListTab } from './components/tabs/list-tab/list-tab';
import { Footer } from './components/footer/footer';

// Services
import { DataService } from './services/data-service';

@Component({
  imports: [
    RouterOutlet,
    MatTabsModule,
    ParagraphTab,
    CardTab,
    ListTab,
    Footer,
  ],
  selector: 'app-root',
  styleUrl: './app.less',
  templateUrl: './app.html',
  host: {
    '(body:keyup.ArrowRight)': 'changeTab("right")',
    '(body:keyup.ArrowLeft)': 'changeTab("left")',
    '(body:pointerdown)':'dragStart($event)',
    '(body:pointermove)':'dragMove($event)',
    '(body:pointerup)':'dragClear()',
  },
})
export class App {
  protected readonly title = signal('Angular22-Portfolio');
  public dataService = inject(DataService);
  public tabIndex = 0;
  private minTabindex = 0;
  private maxTabindex = this.dataService.tabs.length - 1;
  private activeX: number | undefined = undefined;

  // Cursor key controls
  private changeTab(direction: 'right' | 'left'): void {
    switch (direction) {
      case 'right':
        this.tabIndex = (this.tabIndex === this.maxTabindex) ? 0 : this.tabIndex + 1;
        this.dragClear();
        break;
      case 'left':
        this.tabIndex = (this.tabIndex === this.minTabindex) ? this.maxTabindex : this.tabIndex - 1;
        this.dragClear();
        break;
    }
  }

  // Swipe and stylus controls
  private dragStart($event: any): void {
    if ($event.pointerType === 'mouse') { return; }
    this.activeX = ($event.type === 'touchStart') ? $event.touches[0].clientX : $event.clientX;
  }
  private dragMove($event: any): void {
    if ($event.pointerType === 'mouse') { return; }
    if (!this.activeX) { return }
    const moveX = ($event.type === 'touchMove') ? $event.touches[0].clientX : $event.clientX;
    if (this.activeX - moveX > 100) {
      this.changeTab('right');
    } else if (moveX - this.activeX > 100) {
      this.changeTab('left');
    }
  }
  private dragClear(): void {
    this.activeX = undefined;
  }
}
