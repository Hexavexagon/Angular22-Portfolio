import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioTab } from './portfolio-tab';

describe('PortfolioTab', () => {
  let component: PortfolioTab;
  let fixture: ComponentFixture<PortfolioTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioTab],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
