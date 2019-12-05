import { Component, OnInit } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamService } from 'src/app/services/team.service';
import { ToastrService } from 'ngx-toastr';
import { Team } from 'src/app/model/Team';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  selectedTeam: Team;
  team: Team;

  id: any;

  name: String;

  teams: Array<Team>;

  constructor(
    private modalService: NgbModal,
    private teamService: TeamService,
    private toastr: ToastrService
  ) {
    this.team = new Team();
  }

  ngOnInit() {
    this.findAll()
  }

  findAll() {
    this.teamService.findAll().then((result: any) => {
      this.teams = result.data.teams;
      console.log(this.teams)
      console.log(result)
    })
  }

  findById() {
    if (this.id) {
      this.teamService.findById(this.id).then((result: any) => {
        this.teams = result.data.teams;
      })
    }
  }

  findByNameMatch() {
    if (this.name) {
      this.teamService.findByNameMatch(this.name).then((result: any) => {
        this.teams = result.data.teams;
      })
    }
  }

  findByNameEquals() {
    if (this.name) {
      this.teamService.findByNameEquals(this.name).then((result: any) => {
        this.teams = result.data.teams;
      })
    }
  }

  save() {
    if (this.team.name) {
      this.teamService.createTeam(this.team)

      setTimeout(() => {
        this.findAll()
      }, 2000)
    }

    this.team = new Team()
  }

  deleteSelected() {
    this.teamService.delete(this.selectedTeam)

    setTimeout(() => {
      this.selectedTeam = undefined
      this.findAll()
    }, 2000)
  }

  teamSelected(e: Team) {
    this.selectedTeam = e
  }

  openVerticallyCentered(content) {
    this.team = new Team()
    this.modalService.open(content, { size: 'lg', centered: true });
  }
}
