import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewRoutingModule } from './view-routing.module';
import { ViewStudySetsComponent } from './study-set/view-study-sets.component';
import { StudySetCardComponent } from './study-set-card/study-set-card.component';
import { PopoverModule } from "ngx-bootstrap/popover";

@NgModule({
  declarations: [ViewStudySetsComponent, ViewComponent, StudySetCardComponent],
  imports: [CommonModule, FontAwesomeModule, ViewRoutingModule, PopoverModule],
})
export class ViewModule {}
