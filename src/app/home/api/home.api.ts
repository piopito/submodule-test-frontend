import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../types/item';
import { Observable, of } from 'rxjs';

@Injectable()
export class HomeApi {
    constructor(private readonly http: HttpClient) {}

    public fetchItems(): Observable<Item[]> {
        return of([
            { id: '1', name: 'Item 1' },
            { id: '2', name: 'Item 2' },
        ] as Item[]);
        // return this.http.get<Item[]>('/items');
    }

    public addItem(item: Item): Observable<Item[]> {
        return of([
            { id: '1', name: 'Item 1' },
            { id: '2', name: 'Item 2' },
        ] as Item[]);
        // return this.http.post<Item[]>('/items', item);
    }
}
