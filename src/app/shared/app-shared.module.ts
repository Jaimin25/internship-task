import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/layout/header/header.component';
import { FooterComponent } from '../core/layout/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent], // Export the header for use in other modules
})
export class AppSharedModule {}
