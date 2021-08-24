import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegementComponent } from './segement/segement.component';

@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective, SegementComponent],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
  exports: [],
})
export class ElementsModule {}
