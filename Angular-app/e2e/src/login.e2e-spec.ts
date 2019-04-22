import { LoginPage } from './login.po';
describe('Login tests', () => {
    let page: LoginPage;
    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo();        
    });
    it('Login form should be valid', () => {
        page.getEmailTextbox().sendKeys('admin@admin.com');
        page.getPasswordTextbox().sendKeys('123456');

        let form = page.getForm().getAttribute('class');

        expect(form).toContain('ng-valid');
    });

    it('Login form should be invalid', () => {
        page.getEmailTextbox().sendKeys('');
        page.getPasswordTextbox().sendKeys('');

        let form = page.getForm().getAttribute('class');

        expect(form).toContain('ng-invalid');
    });
});