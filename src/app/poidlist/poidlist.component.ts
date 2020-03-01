import { Component, OnInit } from '@angular/core';
import { LiffappService } from '../shared';

declare var liff: any;

@Component({
  selector: 'app-poidlist',
  templateUrl: './poidlist.component.html',
  styleUrls: ['./poidlist.component.scss']
})
export class PoidlistComponent implements OnInit {

  userProfile: any;
  messages: string;
  email: string;

  constructor(
    private liffService: LiffappService,
  ) {
    this.messages = '';
    this.email = '';
    this.userProfile = '';
  }

  async ngOnInit() {
    this.messages = '';

    await this.initLineLiff();

  }

  async initLineLiff() {
    try {
      const data: any = await this.liffService.initLineLiff('1653830448-rewdwLe6');
    } catch (err) {
      console.log(err);
    }
  }

  async sendMessages() {
      // this.userProfile = await liff.getProfile();
      const accessToken = liff.getAccessToken();
      liff.getProfile().then(profile => {
        const userProfile = profile.userId;
        const displayName = profile.displayName;
        const statusMessage = profile.statusMessage;
        const pictureUrl = profile.pictureUrl;
        const email = liff.getDecodedIDToken().email;
      }).catch(
        err => console.error(err)
      );

      this.messages = liff.getOS() + ', ' + accessToken;
      try {
        const successMsgs = await liff.sendMessages([{
          type: 'text',
          text: this.messages
        }
      ]);

        liff.closeWindow();

    } catch (e) {
      // alert(e);
    }
  }


}
