import { Component } from '@angular/core';
import { CreateEmployeeService } from '../create-employee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

  public employeeDetails:any=[]

  constructor(private _createEmployeeService:CreateEmployeeService){

  }

  getEmployeesComponent(){
    this._createEmployeeService.getEmployeesService().subscribe(
      (data:any)=>{
        this.employeeDetails=data
      },
      (err:any)=>{
        alert("No data retrived from api")
      }
    )
  }
  delete(num:number){
    // this.employeeDetails.splice(num,1)
    this._createEmployeeService.deleteEmployeesService(num).subscribe(
      (data:any)=>{
        alert("Deleted successfully")
      },
      (err:any)=>{
        alert("Deletion failed....!")
      }
    )


  }
}
