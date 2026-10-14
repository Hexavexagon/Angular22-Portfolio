import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefereesTab } from './referees-tab';

describe('RefereesTab', () => {
  let component: RefereesTab;
  let fixture: ComponentFixture<RefereesTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefereesTab],
    }).compileComponents();

    fixture = TestBed.createComponent(RefereesTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
