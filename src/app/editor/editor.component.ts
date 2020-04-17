import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../core/services';
import { ArticleService } from '../core/services/article.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editorForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.editorForm = this.formBuilder.group({
      title: ['', Validators.required], 
      description: ['', Validators.required],
      body: ['', Validators.required],
      tagList: ['']
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.editorForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.editorForm.invalid) {
      return;
    }

    this.loading = true;
    this.articleService.createArticle(this.editorForm.value)
      .subscribe(
        data => {
          this.alertService.success('Article created successfully', true);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

}
