import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundViewIdComponent } from './compound-view-id.component';

describe('CompoundViewIdComponent', () => {
  let component: CompoundViewIdComponent;
  let fixture: ComponentFixture<CompoundViewIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoundViewIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundViewIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
