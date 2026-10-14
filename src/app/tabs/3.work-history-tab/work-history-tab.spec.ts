import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkHistoryTab } from './work-history-tab';

describe('WorkHistoryTab', () => {
  let component: WorkHistoryTab;
  let fixture: ComponentFixture<WorkHistoryTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkHistoryTab],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
