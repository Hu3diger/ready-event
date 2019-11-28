import { Injectable } from "@angular/core";
import { GraphQlService } from './graphql.service';
import gql from 'graphql-tag';
import { Team } from '../model/Team';

@Injectable()
export class TeamService extends GraphQlService{
  constructor() {
    super();
  }

  createTeam(team: Team){
    return this.apollo.mutate({
      mutation: gql`mutation($institution: String!, $name: String!, $slug: String!, $website: String!){
        signin(institution: $institution, name: $name, slug: $slug, website: $website){
          name
          captain{
            username
          }
        }
      }
      `,
      variables: {institution: team.institution, name: team.name, slug: team.slug, website: team.website}
    }).toPromise();
  }
}
