import { Component } from "@angular/core";
import { TeamService } from 'src/app/services/team.service';
import { ToastrService } from 'ngx-toastr';
import { Team } from 'src/app/model/Team';

@Component({
    selector: 'app-main-page',
    templateUrl: './main.component.html'
})

export class MainComponent {
  team: Team;
  result: any;
  id: any;
  name: String;

  constructor(
    private teamService: TeamService,
    private toastr: ToastrService
  ){
    this.team = new Team();
  }

  create(){
    this.team.name = "Teste via angular";
    this.team.slug = "teste via angular jamais sera via react";
    this.team.website = "www.comercioslug.com";
    this.team.institution = "bacana";
    this.teamService.createTeam(this.team).then(result => {
      console.log(result.data)
    });
  }

  findAll(){
    this.teamService.findAll().then(result => {
      this.result = result.data;
      console.log(this.result);
    })
  }

  findById(){
    if(this.id){
      this.teamService.findById(this.id).then(result => {
        console.log(result.data);
        this.result = result.data;
      })
    }
  }

  findByNameMatch(){
    if(this.name){
      this.teamService.findByNameMatch(this.name).then(result => {
        console.log(result.data);
        this.result = result.data;
      })
    }
  }

  findByNameEquals(){
    if(this.name){
      this.teamService.findByNameEquals(this.name).then(result => {
        console.log(result.data);
        this.result = result.data;
      })
    }
  }
}
