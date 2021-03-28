import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSingleValueComponent } from './map-single-value.component';

describe('MapSingleValuesComponent', () => {
  let component: MapSingleValueComponent;
  let fixture: ComponentFixture<MapSingleValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSingleValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSingleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
