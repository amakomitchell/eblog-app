import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedArticlesComponent } from './feed-articles.component';

describe('FeedArticlesComponent', () => {
  let component: FeedArticlesComponent;
  let fixture: ComponentFixture<FeedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
