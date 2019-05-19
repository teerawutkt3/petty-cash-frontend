import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from 'moment';
import { Observable, Subject } from "rxjs";
import { catchError, map } from 'rxjs/operators';
// model
import { AjaxService } from "./ajax.service";
import { MessageService } from './message.service';
import _ from 'lodash';
import { User, UserModel, UserProflie } from "../model/user.model";
import { ResponseData } from "../response-data.model";

declare var $: any;

@Injectable()
export class AuthService {
  readonly LOGIN_URL = "/backend/login";
  private userSubject = new Subject<User>();
  private user: User = new User();
  private userProflie: UserProflie;
  private userDetailsSub: Observable<UserModel>;
  private isLoggedIn: boolean = false;
  private role: string[] = [];
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  private authenPages: String[];
  constructor(
    private ajaxService: AjaxService,
    private router: Router,
  ) {
    // this.userDetailsSub = this.store.select(state => state.user);
    // this.userDetailsSub.subscribe((user: UserModel) => {
    //   this.userDetails = user;
    // });
  }

  login(userBean: User): Promise<any> {
    let body = `username=${userBean.username}&password=${userBean.password}`;
    let _promise = new Promise((resolve, reject) => {
      this.ajaxService.post(
        this.LOGIN_URL,
        body,
        res => {
          //this.isLoggedIn = true;
          console.log('login res => ', res)
          //this.router.navigate(["/home"]);
          //this.router.navigate['/petty-cash/request-withdraw'];
          this.getUserProfile().subscribe(res=>{
            this.router.navigate(['/petty-cash/request-withdraw'])
          });
          resolve("OK");
        },
        (resp: Response) => {
         // this.isLoggedIn = false;
          console.log('login resp', resp)
          reject("FAIL");
        },
        AjaxService.FORM_HEADER
      );
    });
    return _promise;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.user = new User();
    //this.router.navigate(["/login"]); // comment
    this.ajaxService.get(AjaxService.CONTEXT_PATH_LOGOUT, (res: Response) => {
      this.router.navigate(["/login"]);
    });
  }

  getUserProfile():Observable<any>{
    return new Observable(obs=>{
      this.ajaxService.doGet('user/profile').subscribe((res:ResponseData<UserProflie>)=>{
        console.log('getUserProfile : ', res)
        this.userProflie = res.data
        obs.next(this.userProflie);
      })
    })

  }
}

