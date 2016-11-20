import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../../../services/product.service';


@Component({
  selector: 'product-pie-chart',
  encapsulation: ViewEncapsulation.None,
  providers: [ProductService],
  template: require('./productPieChart.html')
})

export class ProductPieChart {
    private productsTypesChartOptions =  {
      chartType: 'PieChart',
      dataTable: [],
      options: {is3D:true,
                height: '220',
                slices:{0:{color: 'green'}, 1:{color: 'pink'}, 2:{color: 'yellow'}, 3:{color: 'red'}},
                backgroundColor: 'transparent'}
    };

    constructor(private productService: ProductService) {}

    public ngOnInit() {
      this.productService.getProductTypesChartData()
                .subscribe(
                  types => this.productsTypesChartOptions.dataTable = types,
                  err => console.error('Error: ' + err),
                  () => console.log('Completed!')
                );
    }
}