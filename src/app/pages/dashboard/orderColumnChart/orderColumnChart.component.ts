import {Component,  ViewEncapsulation} from '@angular/core';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'order-col-chart',
  encapsulation: ViewEncapsulation.None,
  providers: [OrderService],
  template: require('./orderColumnChart.html')
})

export class OrderColumnChart {
    private ordersTopProductsChartOptions = {
      chartType: 'ColumnChart',
      dataTable: [],
      options: {is3D:true,
                backgroundColor: 'transparent', height: '260'}
    };

    constructor(private orderService:OrderService) {
        setInterval(() => {
                this.ordersTopProductsChartOptions = Object.create(this.ordersTopProductsChartOptions);
                this.orderService.getOrderTopProductsChartData()
                        .subscribe(
                                topProducts => this.ordersTopProductsChartOptions.dataTable = topProducts,
                                err => console.error('Error: ' + err)
                        );
        }, 4000);
    }

    public ngOnInit() {
      this.orderService.getOrderTopProductsChartData()
                .subscribe(
                  topProducts => this.ordersTopProductsChartOptions.dataTable = topProducts,
                  err => console.error('Error: ' + err)
                );
    }
}