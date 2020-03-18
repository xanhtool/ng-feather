// tslint:disable-next-line: max-line-length
import { Component, OnInit, Input, Renderer2, ElementRef, ChangeDetectorRef, Inject, SimpleChanges, OnChanges, AfterViewInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { uppercamelcase } from './utils';
import { Icons } from '../public-api';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'fea-icon',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
      .fea-ico {
        display: inline-block;
        width: 24px;
        height: 24px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgFeatherComponent implements OnInit, OnChanges, AfterViewInit {
  hostCustomClass = ['fea-ico'];
  @Input() name = '';
  @Input() class = '';
  @HostBinding('class')
  get hostClasses(): string {
    return [
      this.hostCustomClass,
      this.class, // include our new one
    ].join(' ');
  }
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private changeDetector: ChangeDetectorRef,
    @Inject(Icons) private icons: Icons
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.addChildClass();
    // }, 10);
  }

  // addChildClass() {
  //   const img = this.renderer.selectRootElement('img');
  //   // console.log('img', img);
  //   this.imgClass.split(' ').forEach(className => this.renderer.addClass(img, className));
  // }

  ngOnChanges(changes: SimpleChanges) {
    const icons: any = { ... this.icons };
    const svg = icons[uppercamelcase(changes.name.currentValue)] ?? '';
    if (!svg) {
      console.warn(`${changes.name.currentValue} icon is missing!`);
    }
    this.elementRef.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }

}
