import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/common/service/ajax.service';
import { ResponseData } from 'src/app/common/response-data.model';
import { MessageService } from 'src/app/common/service/message.service';
import { PettyCash, PettyCashResVo } from '../petty-cash.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
declare var $: any;

@Component({
  selector: 'app-request-withdraw',
  templateUrl: './request-withdraw.component.html',
  styleUrls: ['./request-withdraw.component.scss']
})
export class RequestWithdrawComponent implements OnInit {

  pettyCashList: PettyCash[];
  id: string;
  status: string;
  countWait: number;
  countAll: number;
  countApprove: number;
  countNotApprove: number;
  countCancel: number;
  countSuccess: number;
  idCheck: string[] = [];

  description: string = ''
  amountSum: number = 0;

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
    private router: Router,
    private store: Store<AppState>
  ) {
    this.pettyCashList = [];
  }

  ngOnInit() {
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
    this.getPettyCashList();
  }

  cardClick(status) {
    console.log('status', status)
    this.status = status;
    this.getPettyCashList()
  }

  checkAll(e) {
    console.log('checkAll');
    var ids = [];
    if (e.target.checked) {
      $('.checkbox').each(function () {
        this.checked = true;
        ids.push($(this).attr('id'));
      });

      ids.forEach(element => {
        if (!this.idCheck.includes(element)) {
          this.idCheck.push(element);
        }
      });
    } else {
      $('.checkbox').each(function () { this.checked = false; });
      this.idCheck = [];
    }

    console.log('this.idCheck :', this.idCheck)
  }
  check(id) {
    console.log('id', this.idCheck.includes(id))

    if (this.idCheck.includes(id)) {
      this.idCheck = this.idCheck.filter(e => e != id)
    } else {
      this.idCheck.push(id);
    }

    console.log('this.idCheck :', this.idCheck)
  }

  getPettyCashList() {
    this.ajax.doPost('petty-cash/findPettey', { status: this.status }).subscribe((res: ResponseData<PettyCashResVo>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        console.log('res', res)
        this.countWait = res.data.countWait;
        this.countAll = res.data.countAll;
        this.countApprove = res.data.countApprove;
        this.countNotApprove = res.data.countNotApprove;
        this.countCancel = res.data.countCancel;
        this.countSuccess = res.data.countSuccess;
        this.pettyCashList = res.data.datas;
      }
    });
  }

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
      this.getPettyCashList();
    });
  }


  summary() {
    let sum = 0;
    this.idCheck.forEach(id => {
      let petty = this.pettyCashList.filter(pettyCash => pettyCash.id == id);
      if (petty.length != 0) {
        let amount = petty[0].amount;
        sum += Number(amount);
      }
    });
    this.amountSum = sum;
    console.log('sum', sum)
  }

  withdraw() {
    console.log('withdraw idCheck=>', this.idCheck)
    this.ajax.doPost('petty-cash/withdraw', { ids: this.idCheck }).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        console.log('withdraw res', res.message)
        this.idCheck = [];
        this.getPettyCashList();
      } else {
        console.log('Error withdraw!!!', res.message)
      }
    });
  }

  detail(id) {
    let pettyCash = this.pettyCashList.filter(e => e.id == id)
    if (pettyCash.length != 0) {
      this.description = pettyCash[0].description;
    }
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
