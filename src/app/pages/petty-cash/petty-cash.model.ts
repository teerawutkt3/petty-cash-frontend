export interface PettyCash {

  id: string;
  code: string;
  emp_id: string;
  description: string;
  amount: string;
  status: string;
  statusDesc: string;
  craeteDatetime: string;
  updateDatetime: string;
  name:string;
}

export interface PettyCashResVo {
  countWait: number;
  countAll: number;
  countApprove: number;
  countNotApprove: number;
  countCancel: number;
  countSuccess: number;
  datas: PettyCash[];
}
