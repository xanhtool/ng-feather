import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { FeatherComponent } from './feather.component';
import { Icons } from './icons.provider';


@NgModule({
  declarations: [
    FeatherComponent
  ],
  exports: [
    FeatherComponent
  ]
})
export class FeatherModule {
  constructor(
    @Optional() private icons: Icons
  ) {
    if ( !this.icons ) {
      throw new Error(
        `No icon provided use FeatherModule.pick({ ... })`);
    }
  }

  static pick(icons: {[key: string]: string}): ModuleWithProviders {
    return {
      ngModule: FeatherModule,
      providers: [
        { provide: Icons, multi: true, useValue: icons }
      ]
    };
  }
}
