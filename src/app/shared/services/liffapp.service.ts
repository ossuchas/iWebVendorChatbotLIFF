import { Injectable } from '@angular/core';
import { ResolveEnd } from '@angular/router';

declare var liff: any;

@Injectable({
  providedIn: 'root'
})
export class LiffappService {

  constructor() { }

  // initLineLiff() {
  //   return new Promise((resolve, reject) => {
  //     liff.init(
  //       data => {
  //         resolve(liff.getProfile());
  //       },
  //       err => {
  //         reject(err);
  //       }
  //     );
  //   });
  // }

  initLineLiff(p_liffId: string) {
    return new Promise((resolve, reject) => {
      liff.init({
        liffId: p_liffId  // use own liffId
      })
      .then(() => {
        // Start to use liff's api
      })
      .catch((err) => {
        // Error happens during initialization
        console.log(err.code, err.message);
      });
    });
  }

  getLineProfile() {
    return new Promise((resolve, reject) => {
      liff.getProfile(
        data => {
          resolve(data);
        },
        err => {
          reject(err);
        }
      );
    });
  }
}
