import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class RouteGuard implements CanActivate {

	constructor() { }
	canActivate() {
		return localStorage.getItem('authToken') ? true : false;
	}
}
