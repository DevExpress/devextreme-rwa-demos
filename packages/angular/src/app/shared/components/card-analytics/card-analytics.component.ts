import { CommonModule } from '@angular/common';
import {
  Component, NgModule, Input, OnInit, ElementRef, OnDestroy,
} from '@angular/core';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';
import { PositionConfig } from 'devextreme/animation/position';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CardMenuModule } from '../card-menu/card-menu.component';

class ResizeObservable extends Observable<ResizeObserverEntry[]> {
  constructor(el: HTMLElement) {
    super((subscriber) => {
      const ro = new ResizeObserver((entries) => {
        subscriber.next(entries);
      });

      ro.observe(el);

      return function unsubscribe() {
        ro.unobserve(el);
        ro.disconnect();
      };
    });
  }
}

@Component({
  selector: 'card-analytics',
  templateUrl: './card-analytics.component.html',
  styleUrls: ['./card-analytics.component.scss'],
})

export class CardAnalytticsComponent implements OnInit, OnDestroy {
  @Input() titleText: string;

  @Input() contentClass: string;

  @Input() component: { instance: { render: () => void }};

  @Input() isMenuVisible = true;

  @Input() isLoading = false;

  resizeObserverSubscription: Subscription;

  observedElement = this.el.nativeElement;

  menuItems: Array<{ text: string }> = [
    { text: 'Configure' },
    { text: 'Remove' },
  ];

  position: PositionConfig;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (!this.isGreyCard() && this.component) {
      this.resizeObserverSubscription = new ResizeObservable(this.observedElement)
        .pipe(debounceTime(300))
        .subscribe(this.resizeCallback.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (!this.isGreyCard() && this.component) {
      this.resizeObserverSubscription.unsubscribe();
    }
  }

  resizeCallback() {
    if (this.component) {
      this.component.instance.render();
    }
  }

  isGreyCard() {
    return this.el.nativeElement.classList[0] === 'grey';
  }
}

@NgModule({
  imports: [
    DxLoadPanelModule,
    CardMenuModule,

    CommonModule,
  ],
  declarations: [CardAnalytticsComponent],
  exports: [CardAnalytticsComponent],
})
export class CardAnalyticsModule { }
