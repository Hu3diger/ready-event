import { Component, OnInit } from "@angular/core";
import { TeamService } from 'src/app/services/team.service';
import { ToastrService } from 'ngx-toastr';
import { Team } from 'src/app/model/Team';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  team: Team;

  constructor(
    private teamService: TeamService,
    private toastr: ToastrService
  ) {
    this.team = new Team();
  }

  ngOnInit() {

  }

  create() {

  }
}
