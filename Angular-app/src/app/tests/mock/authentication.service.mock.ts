import { of , Observable } from "rxjs";




export class AuthenticationServiceMock {
  
   
    //LOGIN
    login(empid: string, password: string): Observable<boolean> {
        return of(true);
    }
   
    //LOGOUT
    logout() {
        return true;
    }
   

    

    

   
    
    
}