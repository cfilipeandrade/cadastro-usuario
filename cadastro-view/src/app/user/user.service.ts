import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CRUDService } from '../service/CRUDService.service';
import { User } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService extends CRUDService<User> {

  private users: User[] = [];

    constructor(protected http: HttpClient) {
        super(http, environment.cadastroApiUrl, 'usuarios');
    }

    listAll(): Observable<User[]> {
      return of(this.users);
    }
}
