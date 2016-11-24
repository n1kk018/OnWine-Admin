import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OrderService {
    private urlService = 'http://192.168.0.10:8080/Onwine-BigData/';
    constructor(private http: Http) {}

    public getOrderTypesChartData() {
        return this.http.get(this.urlService+'orders/typesChartData')
                            .map(response => response.json());
    }

    public getOrderCountriesChartData() {
        return this.http.get(this.urlService+'orders/countriesChartData')
                            .map(response => response.json());
    }

    public getOrderCurrenciesChartData() {
        return this.http.get(this.urlService+'orders/currenciesChartData')
                            .map(response => response.json());
    }

    public getOrderTopProductsChartData() {
        return this.http.get(this.urlService+'orders/topProductsChartData')
                            .map(response => response.json());
    }
}