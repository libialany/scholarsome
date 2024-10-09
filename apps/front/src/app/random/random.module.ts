import { NgModule } from "@angular/core";
import { RandomComponent } from "./random.component";
import { RandomRoutingModule } from "./random-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    RandomRoutingModule,
    FontAwesomeModule,
    CommonModule
  ],
  declarations: [RandomComponent]
})
export class RandomModule {}
