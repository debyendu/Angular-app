import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationServiceMock } from '../tests/mock/authentication.service.mock';
import { AuthenticationService } from '../services/authentication.service';

import { LoginComponent } from './login.component';


import { ReactiveFormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        LoginComponent
      ],
      providers: [
        {provide: AuthenticationService, useClass: AuthenticationServiceMock}
    ]
    }).compileComponents();
  }));

 

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Signup', () => {
    component.signUp();
  });

  it('submitting a form', () => {
    let errors = {};
    expect(component.loginForm.valid).toBeFalsy();
    let email = component.loginForm.controls['email'];
    email.setValue("test@test.com");

    let password = component.loginForm.controls['password'];
    password.setValue("123456789");

    expect(component.loginForm.valid).toBeTruthy();

    
    component.onSubmit();

    // Now we can check to make sure the emitted value is correct
    expect(email.value).toBe("test@test.com");
    expect(password.value).toBe("123456789");
  });
});
