import { Injectable } from "@angular/core";
import gql from 'graphql-tag';
import { Team } from '../model/Team';
import { Apollo } from 'apollo-angular';

@Injectable()
export class TeamService {
  constructor(
    private apollo: Apollo,
  ) { }

  createTeam(team: Team){
    return this.apollo.mutate({
      mutation: gql`mutation($institution: String!, $name: String!, $slug: String!, $website: String!){
        createTeam(institution: $institution, name: $name, slug: $slug, website: $website){
          name
        }
      }
      `,
      variables: {institution: team.institution, name: team.name, slug: team.slug, website: team.website}
    }).toPromise();
  }
}
