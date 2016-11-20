import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule } from '@angular/http';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NewComponent } from './new.component';
import { routing } from './new.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    Ng2GoogleChartsModule,
    routing
  ],
  declarations: [
    NewComponent
  ]
})
export default class NewModule {}