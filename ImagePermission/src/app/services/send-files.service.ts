import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SendFilesService {
  baseApi:string;
  constructor() {
    this.baseApi = environment.baseBackendApiUrl;
  }

  async sendFiles(files:any){

    var response: any = await axios({
      method: 'post',
      data: files,
      url: `${this.baseApi}/files`,

    });

    return response.data;
  }
}
