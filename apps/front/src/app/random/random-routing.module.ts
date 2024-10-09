import { RouterModule, Routes } from "@angular/router";
import { RandomComponent } from "./random.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: RandomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomRoutingModule {}
