// model/item.ts
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Item}           from '../components/home/model/item';
import {ITEMS}          from '../data/items';



@Injectable()
export class RunescapeService {

  constructor(private http: Http) {};

  updatePrices() {
    var items: Item[] = ITEMS;
    var result = [];

    for (var item of items) {
     console.log(item.id);

      var search = this.search(item.id);
        search.subscribe(
        item => result.push(item));
    }

    setTimeout(() =>
         this.assignNewPrice(result, items)
 ,2000);

   console.log(result);
    return items;
  }

  private search (itemId: string): Observable<any> {
    let apiURL = 'http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json'+'?item='+itemId;

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

  private assignNewPrice(result, items) {
     for (var i = 0; i < result.length; i++) {
      console.log('price is: '+ result[i].current.price);
      items[i].price = result[i].current.price;
    }
  }

}
