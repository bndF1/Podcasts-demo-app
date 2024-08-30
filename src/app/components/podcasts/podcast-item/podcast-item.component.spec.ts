import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PodcastItemComponent } from './podcast-item.component';

describe('PodcastItemComponent', () => {
  let component: PodcastItemComponent;
  let fixture: ComponentFixture<PodcastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
