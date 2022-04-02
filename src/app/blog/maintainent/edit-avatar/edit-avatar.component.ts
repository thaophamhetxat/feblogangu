import { Component, OnInit } from '@angular/core';
import {ChangeAvatar} from "../../../model/ChangeAvatar";
import {AuthService} from "../../../service/auth.service";
import {TokenService} from "../../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-avatar',
  templateUrl: './edit-avatar.component.html',
  styleUrls: ['./edit-avatar.component.css']
})
export class EditAvatarComponent implements OnInit {
  form: any = {};
  changeAvatar?: ChangeAvatar;

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.changeAvatar = new ChangeAvatar(
      this.form.avatar
    );

    this.authService.changeAvatar(this.changeAvatar).subscribe(data =>{
      this.tokenService.setAvatar(this.form.avatar);
      window.location.reload();
    }, error =>{
      alert('Change avatar Failed!')
    })
  }

  onUploadAvatar($event: any|undefined) {
    this.form.avatar = $event;
  }

}
