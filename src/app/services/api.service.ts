import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {

    }

    private baseUrl: string = 'https://api.ratemyagent.com.au';

    get<T>(url, queryParams?, urlParams?): Observable<T> {
        const fullUrl = this.getUrl(url, urlParams);
        const httpsOptions = this.getHttpOption(queryParams);
        return this.http.get<T>(fullUrl, httpsOptions);
    }

    //other http metods to handle post/put/patch and delete operations
    post() { }

    put() { }

    patch() { }

    delete() { }

    //to handle URL parameters for future reference
    getUrl(url, urlParams?) {
        let fullUrl = this.baseUrl + url;
        if (urlParams) {
            for (const p in urlParams) {
                if (urlParams.hasOwnProperty(p)) {
                    fullUrl = fullUrl.replace(`{${p}}`, urlParams[p]);
                }
            }
        }
        return fullUrl;
    }

    //to handle HTTP Headers, Authorization if any and Query parameters
    getHttpOption(queryParams) {
        const options = {
            'Content-Type': 'application/json',
        };
        const httpsOptions = {
            headers: new HttpHeaders(options)
        };
        if (queryParams) {
            httpsOptions['params'] = queryParams;
        }
        return httpsOptions;
    }
}
