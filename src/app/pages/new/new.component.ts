import {Component,Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'new',
  template: `<google-chart [(data)]="pieChartOptions"></google-chart>`
})
@Injectable()
export class NewComponent {
  private urlService = 'http://localhost:8080/Onwine-BigData/';
  public pieChartOptions =  {
    chartType: 'PieChart',
    dataTable: /*[
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]*/[],
    options: {'title':'Répartition des types de vin provisionnés',
        			is3D:true,
              slices:{0:{color: 'green'}, 1:{color: 'pink'}, 2:{color: 'yellow'}, 3:{color: 'red'}},
                       'backgroundColor': 'transparent',
                       'width':600,
                       'height':300},
    };
    constructor(private http: Http) {
      this.getProductTypesChartData();
    };

   private getProductTypesChartData() {
        return this.http.get(this.urlService+'products/typesChartData')
                        .map(response => response.json())
                        .subscribe(
                          people => this.pieChartOptions.dataTable = people,
                          () => console.log('Completed!')
                        );
					
   }
}