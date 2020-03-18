import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { NgFeatherComponent } from './ng-feather.component';

export class Icons {
  // tslint:disable-next-line: ban-types
  constructor(private icons: Object) { }
}

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
