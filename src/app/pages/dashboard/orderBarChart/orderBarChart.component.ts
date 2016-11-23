import {Component,  ViewEncapsulation} from '@angular/core';
import {OrderService} from '../../../services/order.service';


@Component({
  selector: 'order-bar-chart',
  encapsulation: ViewEncapsulation.None,
  providers: [OrderService],
  template: require('./orderBarChart.html')
})

export class OrderBarChart {
    private ordersCurrenciesChartOptions = {
      chartType: 'BarChart',
      dataTable: [],
      options: {backgroundColor: 'transparent', height: '260'}
    };

    constructor(private orderService:OrderService) {
        setInterval(() => {
                this.ordersCurrenciesChartOptions = Object.create(this.ordersCurrenciesChartOptions);
                this.orderService.getOrderCurrenciesChartData()
                        .subscribe(
                                currencies => this.ordersCurrenciesChartOptions.dataTable = currencies,
                                err => console.error('Error: ' + err)
                        );
        }, 5000);        
    }

    public ngOnInit() {
      this.orderService.getOrderCurrenciesChartData()
                .subscribe(
                  currencies => this.ordersCurrenciesChartOptions.dataTable = currencies,
                  err => console.error('Error: ' + err)
                );
    }
}