import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoidlistComponent } from './poidlist.component';

describe('PoidlistComponent', () => {
  let component: PoidlistComponent;
  let fixture: ComponentFixture<PoidlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoidlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
