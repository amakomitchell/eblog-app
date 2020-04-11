import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services';

@Injectable({ providedIn: 'root' })
export class UserService {
    currentUserSubscription: Subscription;
    currentUser: User;

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService 
        ) {
            this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
                this.currentUser = user;
            });
     }

    getProfile() {
        return this.http.get<any[]>(`${environment.apiUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users`, { user });
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/${user}`, user);
    }
}