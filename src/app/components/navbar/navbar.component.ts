import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AjaxService } from 'src/app/common/service/ajax.service';
import { AuthService } from 'src/app/common/service/auth.service';
import * as MAINATION from "../../store/actions/user.action";
import { Store } from '@ngrx/store';
import { UserProflie } from 'src/app/common/model/user.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  userProfile: UserProflie;
  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private ajax: AjaxService,
    private authService: AuthService,
    private store: Store<any>
  ) {
    this.location = location;
    this.userProfile = {
      username: '',
      name: '',
      department: '',
      role: [],
    }
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);

    this.store.select(state => state.main.user).subscribe(res => {
      console.log('Navbar res: ', res)
      this.userProfile = res;
    })
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logout() {
    this.store.dispatch(new MAINATION.RemoveUser());
    this.authService.logout();
  }


}
