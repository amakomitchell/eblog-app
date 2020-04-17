import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteButtonComponent } from './favorite-button.component';

import { By } from '@angular/platform-browser';

describe('FavoriteButtonComponent', () => {
  let component: FavoriteButtonComponent;
  let fixture: ComponentFixture<FavoriteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteButtonComponent);
    component = fixture.componentInstance;

    component.favoritesCount = 1;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #click with correct params when "FavouritesCount" is clicked', () => {
    const  navigateSpy = spyOn(component,  'onClick');

    const anchorList = fixture.debugElement.queryAll(By.css('.button-count'));
    anchorList[0].nativeElement.dispatchEvent(new CustomEvent('click'));
    
    expect(navigateSpy).toHaveBeenCalledWith(false, 1);
  })
});
