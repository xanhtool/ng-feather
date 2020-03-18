import { Component, ElementRef, Input, Inject, ChangeDetectorRef, OnChanges, SimpleChanges, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { Icons } from './icons.provider';
import { uppercamelcase } from './utils';
@Component({
  selector: 'i-feather, feather-icon',
  templateUrl: './feather.component.html',
  styleUrls: ['./feather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatherComponent implements OnChanges {
  @Input() iconName = '';
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private changeDetector: ChangeDetectorRef,
    @Inject(Icons) private icons: Icons
  ) {
    this.renderer.addClass(this.elementRef.nativeElement, 'fea-ico')
  }

  ngOnChanges(changes: SimpleChanges) {
    const icons:any = { ... this.icons };
    const svg = icons[ uppercamelcase(changes.name.currentValue) ] ?? '';
    if (!svg) {
      console.warn(`${changes.name.currentValue} icon is missing!`);
    }
    this.elementRef.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }
}
