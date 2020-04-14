import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleExtensionComponent } from './article-extension.component';

describe('ArticleExtensionComponent', () => {
  let component: ArticleExtensionComponent;
  let fixture: ComponentFixture<ArticleExtensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleExtensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
