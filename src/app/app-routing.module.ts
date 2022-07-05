import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./screen/home-page/home-page.component";
import { NotPageFoundComponent } from "./screen/not-page-found/not-page-found.component";
import { ResultsComponent } from "./screen/results/results.component";

const routes: Routes = [
  { path: "", component: HomePageComponent, pathMatch: "full" },
  { path: "results/:id", component: ResultsComponent },
  { path: "**", component: NotPageFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes )],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
