import {Component,  ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';


@Component({
  selector: 'order-bar-chart',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderService],
  template: require('./orderBarChart.html')
})

export class OrderBarChart {
    private chartData:Object;
    private ordersCurrenciesChartOptions = {
      chartType: 'BarChart',
      dataTable: [],
      options: {backgroundColor: 'transparent'}
    };

    constructor(private orderService:OrderService, 
                private cd: ChangeDetectorRef) {
        IntervalObservable.create(6000).flatMap(() => {return this.orderService.getOrderCurrenciesChartData()})
                .subscribe(
                        types => this.ordersCurrenciesChartOptions.dataTable = this.chartData = types,
                        err => console.error('Error: ' + err),
                        () => this.cd.markForCheck()
                );
    }

    public ngOnInit() {
      this.orderService.getOrderCurrenciesChartData()
                .subscribe(
                  currencies => this.ordersCurrenciesChartOptions.dataTable = currencies,
                  err => console.error('Error: ' + err),
                  () => this.cd.markForCheck()
                );
    }
}