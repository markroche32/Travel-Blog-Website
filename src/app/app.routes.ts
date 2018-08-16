import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { IndexComponent } from './components/index/index.component';
import { SamplepostComponent } from './components/samplepost/samplepost.component';
import {ContactComponent} from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
	{
		path: '',
		component: IndexComponent
	},
	{
		path: 'index',
		component: IndexComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'post',
		component: SamplepostComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'signup',
		component: SignupComponent
	},
	{
		path: 'create-post',
		component: CreatePostComponent
	}
];

export const routing = RouterModule.forRoot(routes);
