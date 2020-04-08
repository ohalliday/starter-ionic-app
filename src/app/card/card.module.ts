import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroCardComponent } from './hero-card/hero-card.component';

@NgModule({
  declarations: [HeroCardComponent],
  imports: [CommonModule],
  exports: [HeroCardComponent],
})
export class CardModule {}
