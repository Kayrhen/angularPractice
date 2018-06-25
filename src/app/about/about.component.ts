import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private leaderService: LeaderService) { }

  getLeaders(): void{
    this.leaders = this.leaderService.getLeaders();
  }
  ngOnInit(){
    //automatically exectued when this comp is created
    this.getLeaders();
    //set into local variable
  }

  onSelect(leader: Leader) {
    this.selectedLeader = leader;
  }
}
