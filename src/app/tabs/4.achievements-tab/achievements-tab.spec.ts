import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchievementsTab } from './achievements-tab';

describe('AchievementsTab', () => {
  let component: AchievementsTab;
  let fixture: ComponentFixture<AchievementsTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsTab],
    }).compileComponents();

    fixture = TestBed.createComponent(AchievementsTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
