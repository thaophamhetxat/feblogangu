import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeeComponent } from './edit-see.component';

describe('EditSeeComponent', () => {
  let component: EditSeeComponent;
  let fixture: ComponentFixture<EditSeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
