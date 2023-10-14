import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiClientDetailsComponent } from './api-client-details.component';

describe('ApiClientDetailsComponent', () => {
  let component: ApiClientDetailsComponent;
  let fixture: ComponentFixture<ApiClientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiClientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
