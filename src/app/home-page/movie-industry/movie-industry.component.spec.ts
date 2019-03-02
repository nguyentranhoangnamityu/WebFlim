import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieIndustryComponent } from './movie-industry.component';

describe('MovieIndustryComponent', () => {
  let component: MovieIndustryComponent;
  let fixture: ComponentFixture<MovieIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
