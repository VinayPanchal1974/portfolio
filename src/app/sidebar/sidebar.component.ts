import { Component } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { PUBLIC_IMG_URL } from '../../constant/url';


@Component({
  selector: 'app-sidebar',
  imports: [UserInfoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public imgUrl = `${PUBLIC_IMG_URL}user-2.jpg`;
}
