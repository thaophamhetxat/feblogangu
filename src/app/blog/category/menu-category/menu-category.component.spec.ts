import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryComponent } from './menu-category.component';

describe('PostCategoryComponent', () => {
  let component: MenuCategoryComponent;
  let fixture: ComponentFixture<MenuCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
