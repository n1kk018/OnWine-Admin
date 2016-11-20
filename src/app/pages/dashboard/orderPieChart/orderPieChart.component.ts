import {Component,  ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';


@Component({
  selector: 'order-pie-chart',
  encapsulation: ViewEncapsulation.None,
  providers: [OrderService],
  template: require('./orderPieChart.html')
})

export class OrderPieChart {
    public chartData:Object;
    public ordersTypesChartOptions =  {
      chartType: 'PieChart',
      dataTable: [],
      options: {pieHole:0.4,
                height: '220',
                slices:{0:{color: 'green'}, 1:{color: 'pink'}, 2:{color: 'yellow'}, 3:{color: 'red'}},
                backgroundColor: 'transparent'}
    };

    constructor(private orderService:OrderService, 
                private ref: ChangeDetectorRef) {
        IntervalObservable.create(10000).flatMap(() => {return this.orderService.getOrderTypesChartData()})
                .subscribe(
                        types => this.ordersTypesChartOptions.dataTable = this.chartData = types,
                        err => console.error('Error: ' + err)
                );
            setInterval(() => {
                this.ref.detectChanges();
                }, 5000);
    }

    public ngOnInit() {
      this.orderService.getOrderTypesChartData()
                .subscribe(
                        types => this.ordersTypesChartOptions.dataTable = this.chartData = types,
                        err => console.error('Error: ' + err),
                        () => console.log('Completed!')
                );
    }
}