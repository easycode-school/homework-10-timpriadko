import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthGlobalService } from 'src/app/services/auth-global.service';

@Component({
  selector: 'app-user-profile-images',
  templateUrl: './user-profile-images.component.html',
  styleUrls: ['./user-profile-images.component.css']
})
export class UserProfileImagesComponent implements OnInit {
  public userImgs: [];
  public activeUser: string;
  public activeTab = 'selfies';
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private auth: AuthGlobalService
  ) {
    this.activeUser = this.auth.getUserId;
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.userService.getUserImages(id).subscribe((data) => {
      this.userImgs = data.images;
      console.log(data.images);
    });
  }
}
