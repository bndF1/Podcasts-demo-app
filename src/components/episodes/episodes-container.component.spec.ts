import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodesContainerComponent } from './episodes-container.component';

describe('EpisodesContainerComponent', () => {
  let component: EpisodesContainerComponent;
  let fixture: ComponentFixture<EpisodesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodesContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
