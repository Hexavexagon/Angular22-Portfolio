// Services
import { Service } from '@angular/core';

// Types
import { CardData, ListData, ParagraphData } from '../types/tab-types';

// Tabs
import { introductionData } from './data/1.introduction-data';
import { educationData } from './data/2.education-data';
import { workHistoryData } from './data/3.work-history-data';
import { achievementsData } from './data/4.achievements-data';
import { refereesData } from './data/5.referees-data';
import { portfolioData } from './data/6.portfolio-data';
import { interestsData } from './data/7.interests-data';
import { goalsData } from './data/8.goals-data';
import { contactData } from './data/9.contact-data';

@Service()
export class DataService {
  private _tabs: (ParagraphData | ListData | CardData)[];

  constructor() {
    this._tabs = [
      introductionData,
      educationData,
      workHistoryData,
      achievementsData,
      refereesData,
      portfolioData,
      interestsData,
      goalsData,
      contactData,
    ];
  }

  get tabs(): (ParagraphData | ListData | CardData)[] {
    return this._tabs;
  }
}
