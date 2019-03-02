import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInforComponent } from './contact-infor.component';

describe('ContactInforComponent', () => {
  let component: ContactInforComponent;
  let fixture: ComponentFixture<ContactInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
