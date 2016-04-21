// model/item.ts
import {Injectable} from 'angular2/core';
import {Jsonp, URLSearchParams} from 'angular2/http';

@Injectable()
export class RunescapeService {

  constructor(private jsonp: Jsonp) {}

  search 	(itemId: string) {
  	let apiURL = 'http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json';

  	 var params = new URLSearchParams();
  	 params.set('item', itemId);

    return this.jsonp
               .get(apiURL, { search: params })
               .map(request => <string[]> request.json()[1]);
  }
}
