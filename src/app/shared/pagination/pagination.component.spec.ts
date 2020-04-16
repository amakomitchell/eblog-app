import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;

    component.page = 1;
    component.itemsPerPage = 15;
    component.totalItems = 100;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct value for @isFirstPage', () => {
    expect(component.isFirstPage).toEqual(true);

    component.page = 2;

    expect(component.isFirstPage).toEqual(false);
  });

  it('should return correct value for @isLastPage', () => {
    expect(component.isLastPage).toEqual(false);

    component.page = 7;

    expect(component.isLastPage).toEqual(true);
  });

  it('should return correct value for @lastPage', () => {
    expect(component.lastPage).toEqual(7);
  });

  it('should return correct value for @previousPage', () => {
    expect(component.previousPage).toEqual(1);

    component.page = 5;

    expect(component.previousPage).toEqual(4);
  });

  it('should return correct value for @nextPage', () => {
    expect(component.nextPage).toEqual(2);

    component.page = 5;

    expect(component.nextPage).toEqual(6);
  });

  it('should @nextPage be equal @lastPage if @page = @lastPage', () => {
    expect(component.nextPage).not.toEqual(component.lastPage);

    component.page = 7;

    expect(component.nextPage).toEqual(component.lastPage);
  });

  it('should emit $pageChanged when #navigate called', (done) => {
    component.pageChanged.subscribe(newPage => {
      expect(newPage).toEqual(2);

      done();
    });

    expect(component.page).toEqual(1);

    component.navigate(false, component.nextPage);
  });

  describe('DOM Tests', () => {
    it('should call #navigate with correct params when "First" button clicked', () => {
      const navigateSpy = spyOn(component, 'navigate');

      const anchorList = fixture.debugElement.queryAll(By.css('.page-link'));

      anchorList[0].nativeElement.dispatchEvent(new CustomEvent('click'));

      expect(navigateSpy).toHaveBeenCalledWith(true, 1);
    });

    it('should call #navigate with correct params when "Last" button clicked', () => {
      const navigateSpy = spyOn(component, 'navigate');

      const anchorList = fixture.debugElement.queryAll(By.css('.page-link'));

      anchorList[4].nativeElement.dispatchEvent(new CustomEvent('click'));

      expect(navigateSpy).toHaveBeenCalledWith(false, 7);
    });

    it('should call #navigate with correct params when "Previous" button clicked', () => {
      const navigateSpy = spyOn(component, 'navigate');

      const anchorList = fixture.debugElement.queryAll(By.css('.page-link'));

      anchorList[1].nativeElement.dispatchEvent(new CustomEvent('click'));

      expect(navigateSpy).toHaveBeenCalledWith(true, 1);
    });

    it('should call #navigate with correct params when "Next" button clicked', () => {
      const navigateSpy = spyOn(component, 'navigate');

      const anchorList = fixture.debugElement.queryAll(By.css('.page-link'));

      anchorList[3].nativeElement.dispatchEvent(new CustomEvent('click'));

      expect(navigateSpy).toHaveBeenCalledWith(false, 2);
    });

    it('should render correct page number when navigation buttons clicked', () => {
      const anchorList = fixture.debugElement.queryAll(By.css('.page-link'));

      const pageNumberElement: HTMLElement = anchorList[2].nativeElement;

      expect(pageNumberElement.textContent).toEqual("1");

      // click "first"
      anchorList[0].nativeElement.dispatchEvent(new CustomEvent('click'));

      expect(pageNumberElement.textContent).toEqual("1");

      // click "last"
      anchorList[4].nativeElement.dispatchEvent(new CustomEvent('click'));
      fixture.detectChanges();

      expect(pageNumberElement.textContent).toEqual("7");

      // click "previous"
      anchorList[1].nativeElement.dispatchEvent(new CustomEvent('click'));
      fixture.detectChanges();

      expect(pageNumberElement.textContent).toEqual("6");

      // click "next"
      anchorList[3].nativeElement.dispatchEvent(new CustomEvent('click'));
      fixture.detectChanges();

      expect(pageNumberElement.textContent).toEqual("7");
    });
  });

});
