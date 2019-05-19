import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AjaxService } from 'src/app/common/service/ajax.service';
import { ResponseData } from 'src/app/common/response-data.model';
import { MessageService } from 'src/app/common/service/message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  formGroup: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private ajax: AjaxService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      amount: [''],
      description: [''],
      code: [''],
      id: ['']
    })
  }
  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      console.log('param', param)
      if (param.id != undefined && param.id != null && param.id != '') {
        this.getForm(param.id);
      } else {

        this.getRunningNumber();
      }
    })
  }
  getRunningNumber() {
    this.ajax.doGet('running-number/').subscribe((res: ResponseData<string>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        this.formGroup.get('code').patchValue(res.data);
        console.log('coe', this.formGroup.get('code').value)
      } else {
        console.log('res.message', res.message)
      }

    });
  }

  getForm(id) {
    const URL = 'petty-cash/' + id;

    this.ajax.doGet(URL).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        console.log('getForm :', res)
        this.formGroup.patchValue({
          amount: res.data.amount,
          description: res.data.description,
          code: res.data.code,
          id: id
        })
      } else {
        console.log('save : fail')
      }
    });
    console.log('formGroup : ', this.formGroup.value)
  }

  save() {
    const URL = 'petty-cash/';

    if(this.formGroup.get('id').value){ // ===> update
      this.ajax.doPut(URL, this.formGroup.value).subscribe((res: ResponseData<any>) => {
        if (MessageService.MSG.SUCCESS == res.status) {
          console.log('save : success')
          this.router.navigate(['/petty-cash/request-withdraw'])
        } else {
          console.log('save : fail')
        }
      });
    }else{ // ===> save
      this.ajax.doPost(URL, this.formGroup.value).subscribe((res: ResponseData<any>) => {
        if (MessageService.MSG.SUCCESS == res.status) {
          console.log('save : success')
          this.router.navigate(['/petty-cash/request-withdraw'])
        } else {
          console.log('save : fail')
        }
      });
    }
    console.log('formGroup : ', this.formGroup.value)
  }

}
