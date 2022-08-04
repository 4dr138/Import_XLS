import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBandComponent } from './single-band.component';

describe('SingleBandComponent', () => {
  let component: SingleBandComponent;
  let fixture: ComponentFixture<SingleBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
