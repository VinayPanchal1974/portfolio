import { Component } from '@angular/core';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { PUBLIC_IMG_URL } from '../../constant/url';

@Component({
  selector: 'app-header',
  imports: [MainNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
public imgUrl = `${PUBLIC_IMG_URL}Vinay_portfolio_1.png`;
}
