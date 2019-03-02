import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingMovieComponent } from './up-coming-movie.component';

describe('UpComingMovieComponent', () => {
  let component: UpComingMovieComponent;
  let fixture: ComponentFixture<UpComingMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComingMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
