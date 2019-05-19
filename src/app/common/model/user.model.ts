export class User {
  userId?: number;
  username: string = null;
  password: string = null;
  exciseBaseControl: string = null;
  enabled?: string = null;

}

export interface UserProflie {
  username: string;
  name: string;
  department: string;
  role: any[];
}

export interface UserModel {
  authorityList: string[];
  officeCode: string;
  title: string;
  userThaiName: string;
  userThaiSurname: string;
  username: string;
  departmentName: string;
  subdeptCode: string;
  subdeptLevel: string;
  isCentral: boolean;
}
