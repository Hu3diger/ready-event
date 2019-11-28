import { Injectable } from "@angular/core";
import { User } from '../model/User';
import { GraphQlService } from './graphql.service';
import gql from 'graphql-tag';

@Injectable()
export class LoginService extends GraphQlService{
  constructor() {
    super();
  }

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
