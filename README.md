### Description

This package allows you to use the [Feather Icons](https://github.com/colebemis/feather) in your angular applications. The icons are designed by Cole Bemis.
Import only the icons that you need.
Insprited by [Michael Bazos](https://github.com/michaelbazos/angular-feather)
### Demo
<h4>
  <a href="https://stackblitz.com/edit/ng-feather?file=src%2Fapp%2Fapp.component.html">
    >> See live demo <<
  </a>  (right-click, open in new tab)
</h4>

### Usage

_1. Install the package_

```sh
npm install ng-feather
```

_2. Generate a module to host the icons you'll import_
 
```sh
ng generate module icons
```
  
_3. Import assets_ 

You need to import:
 - FeatherModule, as it contains the `<i-feather>` component
 - The SVGs that you need

We put this in IconsModule for modularity. See example below:


*file: icon.module.ts*
```ts  
import { NgModule } from '@angular/core';

import { FeatherModule } from 'ng-feather';
import { Camera, Heart, Github } from 'ng-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github
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

// NOTES:
// 1. We add FeatherModule to the 'exports', since the <i-feather> component will be used in templates of parent module
// 2. Don't forget to pick some icons using FeatherModule.pick({ ... })
```

_3. Use it in template_

After importing the _IconsModule_ in your feature or shared module, use the icons as follows:

```html
<i-feather name="github" class="someclass"></i-feather>
<i-feather name="heart" style="color: green;"></i-feather>
<i-feather name="camera"></i-feather>
```



### Styling icons


```html
<i-feather name="heart" class="big fill-red"></i-heart>
```

```css
.big {
  height: 50px;
  width: 50px;
}

.fill-red {
  fill: red;
}
```

### FAQ

**1. Is there a way to pick all the icons at once?**

Yes, by importing `allIcons` from `'ng-feather/icons'`:

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

However, keep in mind that by doing this, all icons will end up in your application bundle. While this may not be much of an issue for prototyping, it is not recommended for any application that you plan to release.

### License

MIT © [Xanh Tool](mailto:xanhtool@gmail.com)
