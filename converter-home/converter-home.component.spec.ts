import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterHomeComponent } from './converter-home.component';

describe('ConverterHomeComponent', () => {
  let component: ConverterHomeComponent;
  let fixture: ComponentFixture<ConverterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
