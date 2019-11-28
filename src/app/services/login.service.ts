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
    return new Promise((resolve) => {
      this.apollo.mutate({
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
      }).subscribe(result => {
        resolve(result.data);
      })
    })
  }

  logout() {}

  register(user: User, psw: string) {
    return new Promise(resolve => {
      this.apollo.mutate({
        mutation: gql`mutation($email: String!, $uname: String!, $passwd: String!){
          signup(email: $email, username: $uname, password: $passwd){
            token
          }
        }
        `,
        variables: {email: user.email, uname: user.username, passwd: psw}
      }).subscribe(result => {
        resolve(result.data as User);
      })
    })
  }
}
