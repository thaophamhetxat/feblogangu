import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeeComponent } from './create-see.component';

describe('CreateSeeComponent', () => {
  let component: CreateSeeComponent;
  let fixture: ComponentFixture<CreateSeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
