import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { IntroductionTab } from './tabs/1.introduction-tab/introduction-tab';
import { AchievementsTab } from './tabs/4.achievements-tab/achievements-tab';
import { EducationTab } from './tabs/2.education-tab/education-tab';
import { WorkHistoryTab } from './tabs/3.work-history-tab/work-history-tab';
import { RefereesTab } from './tabs/5.referees-tab/referees-tab';
import { PortfolioTab } from './tabs/6.portfolio-tab/portfolio-tab';
import { InterestsTab } from './tabs/7.interests-tab/interests-tab';
import { GoalsTab } from './tabs/8.goals-tab/goals-tab';
import { ContactTab } from './tabs/9.contact-tab/contact-tab';
import { Footer } from './footer/footer';

// Services
import { DataService } from './services/data-service';

@Component({
  imports: [
    RouterOutlet,
    MatTabGroup,
    MatTab,
    IntroductionTab,
    EducationTab,
    WorkHistoryTab,
    AchievementsTab,
    RefereesTab,
    PortfolioTab,
    InterestsTab,
    GoalsTab,
    ContactTab,
    Footer,
  ],
  selector: 'app-root',
  styleUrl: './app.less',
  templateUrl: './app.html',
  host: {
    '(body:keyup.ArrowRight)': 'onRight()',
    '(body:keyup.ArrowLeft)': 'onLeft()',
  },
})
export class App {
  protected readonly title = signal('Angular22-Portfolio');
  public dataService = inject(DataService);
  public tabIndex = 0;
  private minTabindex = 0;
  private maxTabindex = this.dataService.whitelistLength;

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
}
