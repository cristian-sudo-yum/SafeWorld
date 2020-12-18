import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestStorage {

  user:string;
  status=false;

  constructor(public httpClient: HttpClient) {}

  setUser(user:string)
  {
    this.user=user;
    this.status=true;
  }

  getStatus()
  {
    return this.status;
  }

  deleteUser()
  {
    this.user="";
  }
}
