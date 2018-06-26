import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProductAppProductMySuffixModule } from './product-my-suffix/product-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ProductAppProductMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductAppEntityModule {}
