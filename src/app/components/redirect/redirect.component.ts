import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/DataSharing.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataSharingService
  ){}

  ngOnInit(): void {
    setTimeout(()=>{
      this.dataService.sendData(true)
      this.router.navigateByUrl("")
    }, 3000)
  }

}
