import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroductionTab } from './introduction-tab';

describe('IntroductionTab', () => {
  let component: IntroductionTab;
  let fixture: ComponentFixture<IntroductionTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionTab],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
