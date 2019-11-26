import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
import { TeamService } from "./team.service";

@Injectable()
export class UserService {
  constructor(
    public loginService: LoginService,
    public teamService: TeamService
  ) {}
}
