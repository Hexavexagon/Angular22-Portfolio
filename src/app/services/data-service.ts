// Services
import { Service } from '@angular/core';

// Types
import { CardData, ListData, ParagraphData } from '../types/tab-types';

// Tabs
import { introductionData } from './data/1.introduction-data';
import { educationData } from './data/2.education-data';
import { workHistoryData } from './data/3.work-history-data';
import { portfolioData } from './data/4.portfolio-data';
import { goalsData } from './data/5.goals-data';
import { contactData } from './data/6.contact-data';

@Service()
export class DataService {
  private _tabs: (ParagraphData | ListData | CardData)[];

  constructor() {
    this._tabs = [
      introductionData,
      educationData,
      workHistoryData,
      portfolioData,
      goalsData,
      contactData,
    ];
  }

  get tabs(): (ParagraphData | ListData | CardData)[] {
    return this._tabs;
  }
}
