import { NgModule } from '@angular/core';

import { DarkenOnHoverDirective } from './darken-on-hover.diretive';

@NgModule({
  declarations: [DarkenOnHoverDirective],
  exports: [DarkenOnHoverDirective]
})
export class DarkenOnHoverModule {}