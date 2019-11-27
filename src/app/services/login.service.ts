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
    this.apollo.mutate({
      mutation: gql`mutation($uname: String!, $passwd: String!){
        signin(username: $uname, password: $passwd){
          token
        }
      }
      `,
      variables: {uname: username, passwd: passwd}
    }).subscribe(result => {
      let token = result.data;
      console.log(token);
      return true;
    })
  }

  logout() {}

  register(user: User, psw: string) {
    let returnUser;
    this.apollo.mutate({
      mutation: gql`mutation($email: String!, $uname: String!, $passwd: String!){
        signup(email: $email, username: $uname, password: $passwd){
          token
        }
      }
      `,
      variables: {email: user.email, uname: user.username, passwd: psw}
    }).subscribe(result => {
      returnUser = result.data as User;
    })
    return returnUser;
  }
}
