### Description
ANGULAR 9 READY!

This package allows you to use the [Feather Icons](https://github.com/colebemis/feather) in your angular applications. The icons are designed by Cole Bemis. 
Angular version insprited by [Michael Bazos](https://github.com/michaelbazos/angular-feather).

### Demo

### Usage

```ts  
import { NgModule } from '@angular/core';

import { NgFeatherModule } from 'ng-feather';
import { Camera, Heart, Github } from 'ng-feather/icons';

const icons = {
  X,
  Home
};

@NgModule({
  imports: [
    NgFeatherModule.pick(icons)
  ],
  exports: [
    NgFeatherModule
  ]
})
export class IconsModule { }

```

```html
<fea-icon name="home" class="w1 h1"></fea-icon>
<fea-icon name="x"></fea-icon>
```
### FAQ

!!!! WARNING !!!!
import all icon causing big bundle

```ts
import { allIcons } from 'ng-feather/icons';

@NgModule({
  imports: [
    NgFeatherModule.pick(allIcons)
  ],
  exports: [
    NgFeatherModule
  ]
})
export class IconsModule { }
```

### License

MIT © [Xanh Tool](mailto:xanhtool@gmail.com)
