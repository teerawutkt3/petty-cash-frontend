import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

@Injectable()
export class MessageService {
  readonly url = "preferences/message";
  private headers = new Headers({ "Content-Type": "application/json" });

  public static MSG_CONFIRM = {
    SAVE: "ยืนยันการบันทึก",
    CONTINUE: "ยืนยันการทำรายการ",
    DELETE: "ยืนยันการลบ"
  }

  public static MSG = {
    SUCCESS: "SUCCESS",
    FAILED: "FAILED",
    FAILED_CALLBACK: "กรุณาติดต่อผู้ดูแลระบบ",
    REQUIRE_FIELD: "กรุณากรอกข้อมูลให้ครบ"
  }
  constructor(private http: Http) { }
}
