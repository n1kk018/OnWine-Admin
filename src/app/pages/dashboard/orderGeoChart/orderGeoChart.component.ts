import {Component,  ViewEncapsulation} from '@angular/core';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'order-geo-chart',
  encapsulation: ViewEncapsulation.None,
  providers: [OrderService],
  template: require('./orderGeoChart.html')
})

export class OrderGeoChart {
    private ordersCountriesChartOptions =  {
      chartType: 'GeoChart',
      dataTable: [],
      options: {backgroundColor: 'transparent'}
    };

    constructor(private orderService:OrderService) {
        setInterval(() => {
                this.ordersCountriesChartOptions = Object.create(this.ordersCountriesChartOptions);
                this.orderService.getOrderCountriesChartData()
                        .subscribe(
                                countries => this.ordersCountriesChartOptions.dataTable = countries,
                                err => console.error('Error: ' + err)
                        );
        }, 10000);
    }

    public ngOnInit() {
      this.orderService.getOrderCountriesChartData()
                .subscribe(
                  countries => this.ordersCountriesChartOptions.dataTable = countries,
                  err => console.error('Error: ' + err),
                  () => console.log('Completed!')
                );
    }
}