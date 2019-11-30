import { Injectable } from "@angular/core";
import gql from 'graphql-tag';
import { Team } from '../model/Team';
import { Apollo } from 'apollo-angular';
import { variable } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class TeamService {
  constructor(
    private apollo: Apollo,
  ) { }

  createTeam(team: Team){
    return this.apollo.mutate({
      mutation: gql`mutation($institution: String, $name: String, $slug: String, $website: String){
        createTeam(institution: $institution, name: $name, slug: $slug, website: $website){
          name
        }
      }
      `,
      variables: {institution: team.institution, name: team.name, slug: team.slug, website: team.website}
    }).toPromise();
  }

  findAll(){
    return this.apollo.query({
      query: gql`query{
        teams{
          id
          name
   	      website
		      captain{
            username
          }
          institution
        }
      }
      `
    }).toPromise();
  }

  findById(teamId: Number){
    return this.apollo.query({
      query: gql`query($id: ID!){
        team(id: $id){
          name
          institution
          slug
          website
          captain{
            username
          }
        }
      }
      `,
      variables: {id: teamId}
    }).toPromise();
  }

  findByNameMatch(name: String){
    return this.apollo.query({
      query: gql`query($matching: String!){
        teams(filter: {name: {matching: $matching}}){
          id
          name
          slug
          captain{
            username
          }
        }
      }

      `,variables: {matching: name}
    }).toPromise();
  }

  findByNameEquals(name: String){
    return this.apollo.query({
      query: gql`query($equals: String!){
        teams(filter: {name: {eql: $equals}}){
          id
          name
          slug
          captain{
            username
          }
        }
      }

      `,variables: {equals: name}
    }).toPromise();
  }
}
