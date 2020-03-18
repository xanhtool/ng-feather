import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { NgFeatherComponent } from './ng-feather.component';
import { Icons } from './icons.class';



@NgModule({
  declarations: [NgFeatherComponent],
  imports: [
  ],
  exports: [NgFeatherComponent]
})
export class NgFeatherModule {
  constructor(
    @Optional() private icons: Icons
  ) {
    if (!this.icons) {
      throw new Error(
        `No icon provided use FeatherModule.pick({ ... })`);
    }
  }

  static pick(icons: { [key: string]: string }): ModuleWithProviders {
    return {
      ngModule: NgFeatherModule,
      providers: [
        { provide: Icons, multi: true, useValue: icons }
      ]
    };
  }
}
