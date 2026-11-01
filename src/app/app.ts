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
    '(body:keyup.ArrowRight)': 'onRight()',
    '(body:keyup.ArrowLeft)': 'onLeft()',
    '(body:touchstart)': 'onTouchStart($event)',
    '(body:touchmove)': 'onTouchMove($event)',
    '(body:touchend)': 'unsetTouch()',
    '(body:touchcancel)': 'unsetTouch()',
  },
})
export class App {
  protected readonly title = signal('Angular22-Portfolio');
  public dataService = inject(DataService);
  public tabIndex = 0;
  private minTabindex = 0;
  private maxTabindex = this.dataService.tabs.length - 1;
  private activeTouchX: number | undefined = undefined;

  // Originally I wrote these as smarter functions, but they were much less human readible.
  private onRight(): void {
    if (this.tabIndex === this.maxTabindex) {
      // Wrap around to start
      this.tabIndex = 0;
    } else {
      this.tabIndex++;
    }
  }
  private onLeft(): void {
    if (this.tabIndex === this.minTabindex) {
      // Wrap around to end
      this.tabIndex = this.maxTabindex;
    } else {
      this.tabIndex--;
    }
  }

  // This part I hate, but I wanted swipe working on mobile
  private onTouchStart($event: TouchEvent): void {
    this.activeTouchX = $event.touches[0].clientX;
  }

  private onTouchMove($event: TouchEvent): void {
    const touchMoveX = $event.touches[0].clientX;
    if (this.activeTouchX) {
      if (this.activeTouchX - touchMoveX > 20) {
        // Accept left swipes larger than 20px
        this.onLeft();
        this.unsetTouch();
      } else if (touchMoveX - this.activeTouchX > 20) {
        // Accept right swipes larger than 20px
        this.onRight();
        this.unsetTouch();
      }
    }
  }

  private unsetTouch(): void {
    this.activeTouchX = undefined;
  }
}
