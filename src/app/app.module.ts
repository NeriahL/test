import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FramesComponent } from './components/frames/frames.component';
import { SingleFrameComponent } from './components/single-frame/single-frame.component';
import { LensesComponent } from './components/lenses/lenses.component';
import { SingleLenseComponent } from './components/single-lense/single-lense.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path: '', component: FramesComponent},
  {path: 'lenses', component: LensesComponent},
  {path: 'numbers', component: NumbersComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  
  declarations: [
    AppComponent,
    FramesComponent,
    SingleFrameComponent,
    LensesComponent,
    SingleLenseComponent,
    NumbersComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
