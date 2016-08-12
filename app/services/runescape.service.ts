// model/item.ts
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Item}           from '../model/item';
import {ITEMS}          from '../data/items';


@Injectable()
export class RunescapeService {
     priceData: Item[] = [];

  constructor(private http: Http) {};

  updatePrices() {
    var sourceItems: Item[] = ITEMS;
    this.clearOldPrices();

    for (var item of sourceItems) {
      var search = this.search(item.id);
      search.subscribe(res => this.createPriceData(res));
      console.log(item.name);
    }
     return this.priceData;
  }

  private clearOldPrices() {
    this.priceData = [];
  }

  private createPriceData(res: any) {
    console.log(res);
    this.priceData.push(new Item(res.name, res.current.price, res.id));
  }

   private search (itemId: number): Observable<any> {
    let apiURL = 'http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json'+'?item='+itemId;

    return this.http.get(apiURL)
                    .map(this.extractData)
                    .catch(this.handleError);
}

   private extractData (res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.item || { };
  }

    private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
