import { Component } from '@angular/core';
import { CreateEmployeeService } from '../create-employee.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  public employeeForm:FormGroup=new FormGroup(
    {
      // id: new FormControl(),
      name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      company: new FormControl(),
      role: new FormControl(),
      package: new FormControl(),
      email: new FormControl('',[Validators.required,Validators.email]),
      dob:new FormControl(),
      gender:new FormControl(),
      address: new FormGroup({
        addressLine: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        pincode:new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)])
      }),

      hikes: new FormArray([]),
   
      workMode: new FormControl(),
      wifiBill:new FormControl(),
      travellingBill:new FormControl()

    }
  )


  constructor(private _createEmployeeService:CreateEmployeeService){
   this.employeeForm.get('workMode')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='WFH'){
        this.employeeForm.addControl('wifiBill',new FormControl())
        this.employeeForm.removeControl('travellingBill')
      }
      else{
        this.employeeForm.addControl('travellingBill',new FormControl())
        this.employeeForm.removeControl('wifiBill')
      }
    },
    ()=>{

    }
   )
  }

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

  deleteHikeCardComponent(num:number){
    this.getEmployeeHikes.removeAt(num)

  }

}
