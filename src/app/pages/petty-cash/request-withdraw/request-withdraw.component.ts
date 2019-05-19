import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/common/service/ajax.service';
import { ResponseData } from 'src/app/common/response-data.model';
import { MessageService } from 'src/app/common/service/message.service';
import { PettyCash, PettyCashResVo } from '../petty-cash.model';
import { Router } from '@angular/router';
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

  constructor(
    private ajax: AjaxService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPettyCashList();
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
    this.ajax.doGet('petty-cash/').subscribe((res: ResponseData<PettyCashResVo>) => {
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
      this.getPettyCashList();
    });
  }


  withdraw() {
    console.log('withdraw')
    this.ajax.doPost('petty-cash/withdraw', { ids: this.idCheck }).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        console.log('withdraw res', res.message)
        this.getPettyCashList();
      } else {
        console.log('Error withdraw!!!', res.message)
      }
    });
  }
}
