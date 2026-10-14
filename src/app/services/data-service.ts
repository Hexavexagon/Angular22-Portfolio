import { Service } from '@angular/core';

@Service()
export class DataService {
  private _introduction: string[];
  private _education: string[];
  private _workHistory: string[];
  private _achievements: string[];
  private _referees: string[];
  private _portfolio: string[];
  private _interests: string[];
  private _contact: string[];

  constructor() {
    // TODO: replace these with loads from a csv file
    this._introduction = ['test para 1', 'test para 2'];
    this._education = ['test para 1', 'test para 2'];
    this._workHistory = ['test para 1', 'test para 2'];
    this._achievements = ['test para 1', 'test para 2'];
    this._referees = ['test para 1', 'test para 2'];
    this._portfolio = ['test para 1', 'test para 2'];
    this._interests = ['test para 1', 'test para 2'];
    this._contact = ['test para 1', 'test para 2'];
  }

  get introduction(): string[] {
    return this._introduction;
  }
  get education(): string[] {
    return this._education;
  }
  get workHistory(): string[] {
    return this._workHistory;
  }
  get achievements(): string[] {
    return this._achievements;
  }
  get referees(): string[] {
    return this._referees;
  }
  get portfolio(): string[] {
    return this._portfolio;
  }
  get interests(): string[] {
    return this._interests;
  }
  get contact(): string[] {
    return this._contact;
  }
}
