import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-login h2')).getText() as Promise<string>;
  }
  getLoginButton() {
    return element(by.css('app-login button')).getText() as Promise<string>;
  }
}
