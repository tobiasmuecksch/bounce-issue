import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController
	) {}

	public openOnlyInputsPage() {
		this.navCtrl.push('OnlyInputsPage');
	}

	public login() {
		alert('LOGIN FORM SUBMITTED');
	}

}
