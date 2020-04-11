import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about/about.component';



@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
})
export class ProfileModule { }
