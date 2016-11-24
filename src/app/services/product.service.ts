import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {
    private urlService = 'http://192.168.0.10:8080/Onwine-BigData/';
    constructor(private http: Http) {}

    public getProductTypesChartData() {
        return this.http.get(this.urlService+'products/typesChartData')
                            .map(response => response.json());
    }
}