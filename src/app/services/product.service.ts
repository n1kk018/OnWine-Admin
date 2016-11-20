import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private urlService = 'http://localhost:8080/Onwine-BigData/';
    constructor(private http: Http) {}

    public getProductTypesChartData() {
        return this.http.get(this.urlService+'products/typesChartData')
                            .map(response => response.json());
    }
}