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
}
