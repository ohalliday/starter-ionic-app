import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeroCardComponent } from './hero-card/hero-card.component';

@NgModule({
  declarations: [HeroCardComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [HeroCardComponent],
})
export class CardModule {}
