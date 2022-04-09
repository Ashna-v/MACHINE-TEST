import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-usermodule',
  templateUrl: './usermodule.component.html',
  styleUrls: ['./usermodule.component.css']
})
export class UsermoduleComponent implements OnInit {
  data: any
  result: any 

  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.getRegisterData();
  }

getRegisterData(){
  this.dataservice.getData().subscribe(res=>{
    this.data = res;
    console.log(this.data)
  })
}

// deleteuser(userid: any){
//   this.dataservice.deleteData(userid).subscribe(res=>{
//     this.result = res;
//     alert(res);
//     this.getRegisterData()
//   })

// }

deleteuser(i : any){
  //  console.log(i)
  this.dataservice.deleteData(i).subscribe(res=>{
    
    this.result=res
    this.result = res;
    alert(res)
    this.getRegisterData()

  })


}
updateuser(data: any){

}




}
