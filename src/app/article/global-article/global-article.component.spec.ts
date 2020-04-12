import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalArticleComponent } from './global-article.component';

describe('GlobalArticleComponent', () => {
  let component: GlobalArticleComponent;
  let fixture: ComponentFixture<GlobalArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
