import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoalsTab } from './goals-tab';

describe('GoalsTab', () => {
  let component: GoalsTab;
  let fixture: ComponentFixture<GoalsTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsTab],
    }).compileComponents();

    fixture = TestBed.createComponent(GoalsTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
