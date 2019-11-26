import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
import { TeamService } from "./team.service";
import { GraphQlService } from './graphql.service';
import gql from 'graphql-tag';
import { UserProfile } from '../model/UserProfile';

@Injectable()
export class UserService extends GraphQlService{
  public userProfile: UserProfile;

  constructor(
    public loginService: LoginService,
    public teamService: TeamService
  ) {
    super();
  }

  public getUserProfile = () => {
    this.apollo.query({
      query: gql`query me{
        profile{
          name
          cpf
          dateOfBirth
        }
      }
      `
    }).subscribe(result => {
      this.userProfile = result.data as UserProfile;
      console.log(this.userProfile);
    })
  }
}
