import {Component,  ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';


@Component({
  selector: 'order-geo-chart',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderService],
  template: require('./orderGeoChart.html')
})

export class OrderGeoChart {
    private ordersCountriesChartOptions =  {
      chartType: 'GeoChart',
      dataTable: [],
      options: {backgroundColor: 'transparent'}
    };

    constructor(private orderService:OrderService, 
                private cd: ChangeDetectorRef) {
        IntervalObservable.create(60000).flatMap(() => {return this.orderService.getOrderCountriesChartData()})
                .subscribe(
                        countries => this.ordersCountriesChartOptions.dataTable = countries,
                        err => console.error('Error: ' + err),
                        () => this.cd.markForCheck()
                );
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