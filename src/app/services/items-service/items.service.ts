import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from "src/app/models/item";
import { Data } from "src/app/models/data";

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  itemsUrl = "https://randomuser.me/api/?results=1000&seed=someSeed&inc=name,dob"

  constructor(private http: HttpClient) { }

  public getDataFromAPI(): Observable<Data> {
    return this.http.get<Data>(this.itemsUrl)
  }
}
