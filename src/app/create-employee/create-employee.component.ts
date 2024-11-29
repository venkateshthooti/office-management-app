import { Component } from '@angular/core';
import { CreateEmployeeService } from '../create-employee.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  constructor(private _createEmployeeService:CreateEmployeeService){

  }

  public employeeForm:FormGroup=new FormGroup(
    {
      // id: new FormControl(),
      name: new FormControl(),
      company: new FormControl(),
      role: new FormControl(),
      package: new FormControl(),
      email: new FormControl(),
      dob:new FormControl(),
      gender:new FormControl(),
      address: new FormGroup({
        addressLine: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        pincode:new FormControl()
      }),

      hikes: new FormArray([]),
   
      workMode: new FormControl()

    }
  )



  get getEmployeeHikes(){
    return this.employeeForm.get('hikes') as  FormArray
  }

  employeeHike(){  
    this.getEmployeeHikes.push(
      new FormGroup({
        year:new FormControl(),
        percentage:new FormControl()
      })
    )
  }

  addEmployeeComponent(){
    console.log(this.employeeForm)
    this._createEmployeeService.addEmployeeservice(this.employeeForm.value).subscribe(
      (data:any)=>{
        alert("Employeee registered succesfully")
      },
      (err:any)=>{
        alert("Employee registration failed...?")
      }
    )
  }

  delete(num:number){
    this.getEmployeeHikes.removeAt(num)

  }

}
