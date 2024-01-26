import { LitElement } from "lit";


export class AdoptedLitElement extends LitElement {
  static shadowCSSPromise: Promise<CSSStyleSheet> | null = null;

  constructor() {
      super();
      this.loadAndAdoptStyles();
  }

  async loadAndAdoptStyles() {
      if (!AdoptedLitElement.shadowCSSPromise) {
          AdoptedLitElement.shadowCSSPromise = this.loadStylesheet('/assets/css/main.css');
      }

      try {
          const stylesheet = await AdoptedLitElement.shadowCSSPromise;
          this.shadowRoot.adoptedStyleSheets = [stylesheet];
      } catch (error) {
          console.error('Error loading stylesheet:', error);
      }
  }

  async loadStylesheet(url: string): Promise<CSSStyleSheet> {
      const response = await fetch(url);
      const cssText = await response.text();
      const sheet = new CSSStyleSheet();
      await sheet.replace(cssText);
      return sheet;
  }
  
  
}