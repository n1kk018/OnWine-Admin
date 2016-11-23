import {Component,  ViewEncapsulation} from '@angular/core';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'order-pie-chart',
  encapsulation: ViewEncapsulation.None,
  providers: [OrderService],
  template: require('./orderPieChart.html')
})

export class OrderPieChart {
    public ordersTypesChartOptions =  {
      chartType: 'PieChart',
      dataTable: [],
      options: {is3D:true,
                height: '230',
                slices:{0:{color: 'green'}, 1:{color: 'pink'}, 2:{color: 'yellow'}, 3:{color: 'red'}},
                backgroundColor: 'transparent'}
    };

    constructor(private orderService:OrderService) {
        setInterval(() => {
                this.ordersTypesChartOptions = Object.create(this.ordersTypesChartOptions);
                this.orderService.getOrderTypesChartData()
                        .subscribe(
                                types => this.ordersTypesChartOptions.dataTable = types,
                                err => console.error('Error: ' + err)
                        );
        }, 3000);
    }

    public ngOnInit() {
      this.orderService.getOrderTypesChartData()
                .subscribe(
                        types => this.ordersTypesChartOptions.dataTable = types,
                        err => console.error('Error: ' + err)
                );
    }
}