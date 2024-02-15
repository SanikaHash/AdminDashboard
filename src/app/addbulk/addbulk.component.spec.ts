import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbulkComponent } from './addbulk.component';

describe('AddbulkComponent', () => {
  let component: AddbulkComponent;
  let fixture: ComponentFixture<AddbulkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddbulkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddbulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
