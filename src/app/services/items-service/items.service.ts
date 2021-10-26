import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GoogleData } from "src/app/models/googleData";

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  itemsUrl = "../../assets/graveyard.json"
  data?: GoogleData

  constructor(private http: HttpClient) { }

  public getItemsList(): Promise<GoogleData> {
    return Promise.resolve<GoogleData>(this.getJSON()).then(data => {
      this.data = data
      return this.data
    });
  }

  private getJSON(): Promise<any> {
    return this.http.get(this.itemsUrl).toPromise();
  }

}
