import { Component, signal } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { IntroductionTab } from './tabs/1.introduction-tab/introduction-tab';
import { AchievementsTab } from './tabs/4.achievements-tab/achievements-tab';
import { EducationTab } from './tabs/2.education-tab/education-tab';
import { WorkHistoryTab } from './tabs/3.work-history-tab/work-history-tab';
import { RefereesTab } from './tabs/5.referees-tab/referees-tab';
import { PortfolioTab } from './tabs/6.portfolio-tab/portfolio-tab';
import { InterestsTab } from './tabs/7.interests-tab/interests-tab';
import { ContactTab } from './tabs/8.contact-tab/contact-tab';
import { Footer } from './footer/footer';

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
    ContactTab,
    Footer,
  ],
  selector: 'app-root',
  styleUrl: './app.less',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular22-Portfolio');
}
