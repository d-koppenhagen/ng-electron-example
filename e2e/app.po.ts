import { browser, element, by } from 'protractor';

export class NgElectronExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('elex-root h1')).getText();
  }
}
