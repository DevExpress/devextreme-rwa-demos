import './theme-dark';
import './theme-light';
import { currentTheme as currentVizTheme, refreshTheme } from 'devextreme/viz/themes';
import { ref } from 'vue';

type Theme = 'dark' | 'light';

class ThemeService {
  private readonly storageKey = 'app-theme';

  private readonly themeMarker = 'theme-';

  currentTheme = ref<Theme>(this.getCurrentTheme());

  getCurrentTheme(): Theme {
    return window.localStorage[this.storageKey] || 'light';
  }

  private getThemeStyleSheets() {
    return [...document.styleSheets as unknown as CSSStyleSheet[]]
      .filter((styleSheet) => styleSheet?.href?.includes(this.themeMarker));
  }

  setAppTheme(theme = this.currentTheme.value) {
    this.getThemeStyleSheets().forEach((styleSheet) => {
      styleSheet.disabled = !styleSheet?.href?.includes(`${this.themeMarker}${theme}.`);
    });

    this.currentTheme.value = theme;

    window.localStorage[this.storageKey] = theme;

    currentVizTheme(currentVizTheme().replace(/\.[a-z]+\.compact$/, `.${theme}.compact`));
    refreshTheme();
  }

  switchAppTheme() {
    this.setAppTheme(this.currentTheme.value === 'dark' ? 'light' : 'dark');
  }
}

export const themeService = new ThemeService();