import { NgModule } from '@angular/core';

import { ProductAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ProductAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ProductAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProductAppSharedCommonModule {}
