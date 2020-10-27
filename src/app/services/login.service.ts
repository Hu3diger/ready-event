import { Injectable } from "@angular/core";
import { User } from '../model/User';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Injectable()
export class LoginService {
	constructor(
		private apollo: Apollo,
	) { }

	login(username: String, passwd: String) {
		return this.apollo.mutate({
			mutation: gql`mutation($uname: String!, $passwd: String!){
				signin(username: $uname, password: $passwd){
					token
					user{
						username
					}
				}
			}
			`,
			variables: {uname: username, passwd: passwd}
			}).toPromise();
	}

	logout() {
		return new Promise(resolve => {
			localStorage.removeItem('authToken');
			resolve(true);
		});
	}

	register(user: User, psw: string) {
		return this.apollo.mutate({
			mutation: gql`mutation($email: String!, $uname: String!, $passwd: String!){
				signup(email: $email, username: $uname, password: $passwd){
					token
				}
			}
			`,
			variables: {email: user.email, uname: user.username, passwd: psw}
			}).toPromise();
	}
}
