import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { UserService } from './services/user.service';
import { SignupService } from './services/signup.service';

import 'rxjs/add/operator/map';
import 'rxjs/Observable';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { SamplepostComponent } from './components/samplepost/samplepost.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    NavigationComponent,
    IndexComponent,
    FooterComponent,
    SamplepostComponent,
    ContactComponent,
    SignupComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService, SignupService, PostsService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
