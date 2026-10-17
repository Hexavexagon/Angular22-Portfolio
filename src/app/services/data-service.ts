import { Service } from '@angular/core';

import { IntroductionData, introductionData } from './data/1.introduction-data';
import { EducationData, educationData } from './data/2.education-data';
import { WorkHistoryData, workHistoryData } from './data/3.work-history-data';
import { AchievementsData, achievementsData } from './data/4.achievements-data';
import { RefereesData, refereesData } from './data/5.referees-data';
import { PortfolioData, portfolioData } from './data/6.portfolio-data';
import { InterestsData, interestsData } from './data/7.interests-data';
import { GoalsData, goalsData } from './data/8.goals-data';
import { ContactData, contactData } from './data/9.contact-data';

import { WhitelistData, whitelistData } from './data/whitelist-data';

@Service()
export class DataService {
  private _introduction: IntroductionData;
  private _education: EducationData;
  private _workHistory: WorkHistoryData;
  private _achievements: AchievementsData;
  private _referees: RefereesData;
  private _portfolio: PortfolioData;
  private _interests: InterestsData;
  private _goals: GoalsData;
  private _contact: ContactData;

  private _whitelist: WhitelistData;

  constructor() {
    // TODO: replace these with loads from a csv file
    this._introduction = introductionData;
    this._education = educationData;
    this._workHistory = workHistoryData;
    this._achievements = achievementsData;
    this._referees = refereesData;
    this._portfolio = portfolioData;
    this._interests = interestsData;
    this._goals = goalsData;
    this._contact = contactData;
    this._whitelist = whitelistData;
  }

  get introduction(): IntroductionData {
    return this._introduction;
  }
  get education(): EducationData {
    return this._education;
  }
  get workHistory(): WorkHistoryData {
    return this._workHistory;
  }
  get achievements(): AchievementsData {
    return this._achievements;
  }
  get referees(): RefereesData {
    return this._referees;
  }
  get portfolio(): PortfolioData {
    return this._portfolio;
  }
  get interests(): InterestsData {
    return this._interests;
  }
  get goals(): InterestsData {
    return this._goals;
  }
  get contact(): ContactData {
    return this._contact;
  }

  get whitelist(): WhitelistData {
    return this._whitelist;
  }
  get whitelistLength(): number {
    var count = 0;
    for(const [key, value] of Object.entries(this._whitelist)) {
      if (value) count++;
    }
    return count - 1;
  }
}
