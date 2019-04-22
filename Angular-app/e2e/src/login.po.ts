import { browser, by, element } from 'protractor';
export class LoginPage {
    navigateTo(){
        return browser.get('/login');
    }
    getForm(){
        return element(by.css('#loginForm'));
    }
    getEmailTextbox() {
        return element(by.name('email'));
    }
    getPasswordTextbox() {
        return element(by.name('password'));
    }
    
    getSubmitButton(){
        return element(by.css('#btnSubmit'));
    }
}