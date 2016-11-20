import {Component,  ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';


@Component({
  selector: 'order-col-chart',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderService],
  template: require('./orderColumnChart.html')
})

export class OrderColumnChart {
    private chartData:Object;
    private ordersTopProductsChartOptions = {
      chartType: 'ColumnChart',
      dataTable: [],
      options: {is3D:true,
                backgroundColor: 'transparent'}
    };

    constructor(private orderService:OrderService, 
                private cd: ChangeDetectorRef) {
        IntervalObservable.create(7000).flatMap(() => {return this.orderService.getOrderTopProductsChartData()})
                .subscribe(
                        topProducts => this.ordersTopProductsChartOptions.dataTable = this.chartData = topProducts,
                        err => console.error('Error: ' + err),
                        () => this.cd.markForCheck()
                );
    }

    public ngOnInit() {
      this.orderService.getOrderTopProductsChartData()
                .subscribe(
                  topProducts => this.ordersTopProductsChartOptions.dataTable = topProducts,
                  err => console.error('Error: ' + err),
                  () => this.cd.markForCheck()
                );
    }
}