import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../model/user-model";
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UsersService { 
    
    constructor(
        private http: HttpClient
    ) {}

    readonly baseURL: string = 'https://localhost:7249/';
    formData: UserModel = new UserModel();
    userList!: UserModel[];

    postUser() {
        return this.http.post(this.baseURL, this.formData);
    }

    putUser() {
        return this.http.put(this.baseURL, this.formData);
    }

    deleteUser(id: number) {
        return this.http.delete(`${this.baseURL}/${id}`);
    }

    getUserList() {
        return this.http.get<UserModel>(this.baseURL);
    }
}