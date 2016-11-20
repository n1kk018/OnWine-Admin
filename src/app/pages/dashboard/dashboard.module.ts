import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { OrderPieChart } from './orderPieChart';
import { ProductPieChart } from './productPieChart';
import { OrderGeoChart } from './orderGeoChart';
import { OrderBarChart } from './orderBarChart';
import { OrderColumnChart } from './orderColumnChart';

import {ProductService} from '../../services/product.service';
import {OrderService} from '../../services/order.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    NgaModule,
    Ng2GoogleChartsModule,
    routing
  ],
  declarations: [
    OrderPieChart,
    ProductPieChart,
    OrderGeoChart,
    OrderBarChart,
    OrderColumnChart,
    Dashboard
  ],
  providers: [
    ProductService,
    OrderService
  ]
})
export default class DashboardModule {}
