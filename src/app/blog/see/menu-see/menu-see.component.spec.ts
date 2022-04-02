import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSeeComponent } from './menu-see.component';

describe('MenuSeeComponent', () => {
  let component: MenuSeeComponent;
  let fixture: ComponentFixture<MenuSeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
