import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/service/auth.service';
import * as MAINATION from "../../store/actions/user.action";
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.auth.getUserProfile().subscribe(res => {
      console.log('res', res)
      this.store.dispatch(new MAINATION.AddUser(res));
    })
  }

}
