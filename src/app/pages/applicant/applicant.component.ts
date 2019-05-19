import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnInit {
  //dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
  datas: any = [
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    }, {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },

    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    }, {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },
    {
      data1: "1",
      data2: "top",
      data3: "tee",
      data4: "1",
      data5: "2",
      data6: "24"
    },

  ]

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      ordering: false,
      scrollX: true,
      data: this.datas,
      columns: [{
        data: 'data1'
      }, {
        data: 'data2'
      }, {
        data: 'data3'
      }, {
        data: 'data4'
      }, {
        data: 'data5'
      }, {
        data: 'data6'
      }]
    };
  }

}
