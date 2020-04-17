import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  loading: false;
  submitted: false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.settingsForm = this.formBuilder.group({
      image: ['', Validators.required], 
      username: ['', Validators.required],
      bio: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
