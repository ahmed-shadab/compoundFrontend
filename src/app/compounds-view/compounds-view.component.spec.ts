import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundsViewComponent } from './compounds-view.component';

describe('CompoundsViewComponent', () => {
  let component: CompoundsViewComponent;
  let fixture: ComponentFixture<CompoundsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoundsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
