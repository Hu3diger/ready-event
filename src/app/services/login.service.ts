import { Injectable } from "@angular/core";
import { User } from '../model/User';
import { GraphQlService } from './graphql.service';
import gql from 'graphql-tag';

@Injectable()
export class LoginService extends GraphQlService{
  constructor() {
    super();
  }

  login() {}

  logout() {}

  register(user: User, psw: string) {
    let returnUser;
    this.apollo.mutate({
      mutation: gql`mutation{
        signup(email: user.email, username: user.username, password: psw){
          user{
            email
            username
          }
        }
      }
      `,
      variables: {user, psw}
    }).subscribe(result => {
      returnUser = result.data as User;
    })
    return returnUser;
  }
}
