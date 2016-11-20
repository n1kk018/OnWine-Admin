import {Component,  ViewEncapsulation} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'new',
  encapsulation: ViewEncapsulation.None,
  providers: [ProductService,OrderService],
  template: require('./new.html')
})

export class NewComponent {
    private productsTypesChartOptions =  {
      chartType: 'PieChart',
      dataTable: [],
      options: {is3D:true,
                slices:{0:{color: 'green'}, 1:{color: 'pink'}, 2:{color: 'yellow'}, 3:{color: 'red'}},
                backgroundColor: 'transparent'}
    };

    private ordersTypesChartOptions =  {
      chartType: 'PieChart',
      dataTable: [],
      options: {pieHole:0.4,
                slices:{0:{color: 'green'}, 1:{color: 'pink'}, 2:{color: 'yellow'}, 3:{color: 'red'}},
                backgroundColor: 'transparent'}
    };

    private ordersCountriesChartOptions =  {
      chartType: 'GeoChart',
      dataTable: [],
      options: {backgroundColor: 'transparent'}
    };

    private ordersCurrenciesChartOptions = {
      chartType: 'BarChart',
      dataTable: [],
      options: {backgroundColor: 'transparent'}
    };

    private ordersTopProductsChartOptions = {
      chartType: 'ColumnChart',
      dataTable: [],
      options: {is3D:true,
                backgroundColor: 'transparent'}
    };

    constructor(productService: ProductService, orderService:OrderService) {
      productService.getProductTypesChartData()
                .subscribe(
                  types => this.productsTypesChartOptions.dataTable = types,
                  err => console.error('Error: ' + err),
                  () => console.log('Completed!')
                );
      orderService.getOrderTypesChartData()
                .subscribe(
                  types => this.ordersTypesChartOptions.dataTable = types,
                  err => console.error('Error: ' + err),
                  () => console.log('Completed!')
                );
      orderService.getOrderCountriesChartData()
                .subscribe(
                  countries => this.ordersCountriesChartOptions.dataTable = countries,
                  err => console.error('Error: ' + err),
                  () => console.log('Completed!')
                );
      orderService.getOrderCurrenciesChartData()
                .subscribe(
                  currencies => this.ordersCurrenciesChartOptions.dataTable = currencies,
                  err => console.error('Error: ' + err),
                  () => console.log('Completed!')
                );
      orderService.getOrderTopProductsChartData()
                .subscribe(
                  topProducts => this.ordersTopProductsChartOptions.dataTable = topProducts,
                  err => console.error('Error: ' + err),
                  () => console.log('Completed!')
                );
    }
}