import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PodcastsContainerComponent } from './podcasts-container.component';

describe('PodcastsContainerComponent', () => {
  let component: PodcastsContainerComponent;
  let fixture: ComponentFixture<PodcastsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
