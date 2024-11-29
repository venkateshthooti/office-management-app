import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeService {

  constructor(private _httpClient:HttpClient) { }

  addEmployeeservice(data:any):Observable<any>{

   return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",data)
  }

  
  getEmployeesService():Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees")
  }
  
  deleteEmployeesService(num:string):Observable<any>{
    return this._httpClient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+num)
  }

  filterService(word:string):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?filter="+word);
  }





}
