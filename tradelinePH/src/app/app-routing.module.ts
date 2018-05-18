import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeStatisticsComponent } from './trade-statistics/trade-statistics.component';
import { ImportComponent } from './import/import.component';

const routes: Routes = [
  { path: '', redirectTo: '/trade-statistics', pathMatch: 'full'},
  { path: 'trade-statistics', component: TradeStatisticsComponent },
  { path: 'import', component: ImportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
