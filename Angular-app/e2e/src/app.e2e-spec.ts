import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Outreach Fundraiser');
  });

  it('should display Login Button', () => {
    page.navigateTo();
    expect(page.getLoginButton()).toEqual('Login');
  });

  it('should display click Login Button', () => {
    page.navigateTo();
    console.log(page.getLoginButton());
    element(by.buttonText('Login')).click();
   // expect(page.getLoginButton()).click();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
