import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from "src/app/models/item";
import { Data } from "src/app/models/data";
import { GoogleItem } from "src/app/models/googleItem";
import { GoogleData } from "src/app/models/googleData";

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  itemsUrl = "https://randomuser.me/api/?results=1000&seed=someSeed&inc=name,dob"
  data?: GoogleData

  constructor(private http: HttpClient) { }

  public getDataFromAPI(): Observable<Data> {
    return this.http.get<Data>(this.itemsUrl)
  }

  public getItemsList(): Promise<GoogleData> {
    return Promise.resolve<GoogleData>(this.getJSON()).then(data => {
      this.data = data
      return this.data
    });
  }

  private getJSON(): Promise<any> {
    return this.http.get("../../assets/graveyard.json").toPromise();
  }

}
