import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestsTab } from './interests-tab';

describe('InterestsTab', () => {
  let component: InterestsTab;
  let fixture: ComponentFixture<InterestsTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestsTab],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestsTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
