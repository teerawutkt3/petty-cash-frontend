import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/common/service/ajax.service';
import { ActivatedRoute, ResolveData, Router } from '@angular/router';
import { PettyCash } from '../../petty-cash.model';
import { ResponseData } from 'src/app/common/response-data.model';
import { MessageService } from 'src/app/common/service/message.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  pettyCash: PettyCash;

  id: string;
  status: string;

  dataStroe: any;
  tdShowButton: boolean = true;
  tdShowCheckbox: boolean = false;

  // show button
  showBtnManager: boolean = false;
  showBtnNormal: boolean = false;
  showBtnFinance: boolean = false;

  showBtnAdd: boolean = false;
  constructor(
    private ajax: AjaxService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.pettyCash = {
      code: '',
      name: '',
      amount: '',
      description: '',
      emp_id: '',
      employeeStatus: '',
      id: '',
      status: '',
      statusDesc: '',
      craeteDatetime: '',
      updateDatetime: ''
    }
  }

  ngOnInit() {
    let id;
    this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      id = params['id'];
    });
    if (id == '' || id == undefined || id == null) {
      this.router.navigate(['/petty-cash/request-withdraw'])
    } else {

      this.getDetail(id);
    }

    this.dataStroe = this.store.select(state => state.main.user).subscribe(res => {
      console.log('store => ', res)
      console.log('res.role', res.role)
      this.tdShowButton = res.role.includes("ROLE_MANAMENT") || res.role.includes("ROLE_NORMAL");
      this.tdShowCheckbox = res.role.includes('ROLE_PETTY_CASH');
      this.showBtnManager = res.role.includes('ROLE_MANAMENT');
      this.showBtnNormal = res.role.includes('ROLE_NORMAL');
      this.showBtnFinance = res.role.includes('ROLE_PETTY_CASH');
      this.showBtnAdd = res.userStatus == '2'; // 2 = ลาออก
    })
  }

  getDetail(id) {
    this.ajax.doGet(`petty-cash/detail/${id}`).subscribe((res: ResponseData<PettyCash>) => {
      console.log('res.data', res.data);
      if (MessageService.MSG.SUCCESS == res.status) {
        this.pettyCash = res.data;
      } else {
        console.log('Eror getDetail !!! ');
      }
    })
  }

  //================================================
  edit(id) {
    console.log('edit id', id)

    this.router.navigate(['/petty-cash/request-withdraw/add'], { queryParams: { id: id } });
  }
  //==> Approve
  approve(id, status) {
    this.id = id;
    this.status = status;
    this.confirm();
  }
  //==> Not Approve
  notapprove(id, status) {
    this.id = id;
    this.status = status;
  }
  //==> Cancel
  cancel(id, status) {
    console.log('id', id)
    this.id = id;
    this.status = status;
  }
  confirm() {
    console.log('confirm', this.id);
    this.ajax.doPost(`petty-cash/${this.id}/${this.status}`, {}).subscribe((res: ResponseData<any>) => {
      this.status = '';
      this.getDetail(this.id);
    });
  }
}


class AppState {
  main: {
    user: {
      username: string;
      role: string[];
      name: string;
      department: string;
      userStatus: string;
    }
  }

}
