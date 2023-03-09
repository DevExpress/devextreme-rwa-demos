import {
  Component, NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from "devextreme-angular";
import { ThemeService } from 'src/app/services';

@Component({
  selector: 'theme-switcher',
  template: `
    <dx-button class="theme-button"
               [icon]="'assets/icons/' + (themeService.currentTheme !== 'dark' ? 'moon' : 'sun') +'.svg'"
               (click)="onButtonClick()">
    </dx-button>
`,
  styleUrls: [],
})
export class ThemeSwitcherComponent {
  constructor(public themeService: ThemeService) {}

  onButtonClick () {
    this.themeService.switchTheme();
  }
}

@NgModule({
  imports: [CommonModule, DxButtonModule],
  declarations: [ThemeSwitcherComponent],
  exports: [ThemeSwitcherComponent],
})
export class ThemeSwitcherModule { }
