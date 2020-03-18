### Description

This package allows you to use the [Feather Icons](https://github.com/colebemis/feather) in your angular applications. The icons are designed by Cole Bemis. Angular version insprited by [Michael Bazos](https://github.com/michaelbazos/angular-feather).

### Demo
<h4>
  <a href="https://stackblitz.com/edit/ng-feather?file=src%2Fapp%2Fapp.component.html">
    Demo Here
  </a>
</h4>

### Usage

```ts  
import { NgModule } from '@angular/core';

import { FeatherModule } from 'ng-feather';
import { Camera, Heart, Github } from 'ng-feather/icons';

const icons = {
  X,
  Home
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

```

```html
<i-feather name="home" class="w1 h1"></i-feather>
<i-feather name="x"></i-feather>
```
### FAQ

!!!! WARNING !!!!
import all icon causing big bundle

```ts
import { allIcons } from 'ng-feather/icons';

@NgModule({
  imports: [
    FeatherModule.pick(allIcons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
```

### License

MIT © [Xanh Tool](mailto:xanhtool@gmail.com)
