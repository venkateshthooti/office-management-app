import { Component } from '@angular/core';
import { CreateEmployeeService } from '../create-employee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

   employeeDetails:any=[]

  searchWord:string='';

  constructor(private _createEmployeeService:CreateEmployeeService){

    this._createEmployeeService.getEmployeesService().subscribe(
      (data:any)=>{
        this.employeeDetails=data
      },
      (err:any)=>{
        alert("No data retrived from api")
      }
    )

  }

  // getEmployeesComponent(){
 
  // }


  delete(id:string){
    console.log(id)
    // this.employeeDetails.splice(num,1)
    this._createEmployeeService.deleteEmployeesService(id).subscribe(
      (data:any)=>{
        alert("Deleted successfully")
        location.reload()
      },
      (err:any)=>{
        alert("Deletion failed....!")
      }
    )
  }

  filterComponent(){

    console.log(this.searchWord)
    this._createEmployeeService.filterService(this.searchWord).subscribe(
      (data:any)=>{
        this.employeeDetails=data;
      },
      (err:any)=>{
        alert("filter functionality not working...!")
      }
    )
  }






}
