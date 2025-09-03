export interface Country {
  id: string;
 name : string; 
}

export interface User {
 id?: string;
 name: string;
 lastName: string;
 email: string;
 password: string;
 country: Country;
}