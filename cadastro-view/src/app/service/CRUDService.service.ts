import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BaseEntity } from '../model/base-entity.model';

export class CRUDService<T extends BaseEntity<any>> {

    public readonly API_URL;

    constructor(protected http: HttpClient, protected baseUrl: string, protected resource: string) {
        this.API_URL = this.baseUrl + resource;
    }

    save(object: T): Observable<T> {
        return this.http.post<T>(this.API_URL, object);
    }

    update(object: T): Observable<T> {
        return this.http.put<T>(`${this.API_URL}/${object.id}`, object);
    }

    delete(id: number | string): Observable<T> {
        return this.http.delete<T>(`${this.API_URL}/${id}`);
    }

}
