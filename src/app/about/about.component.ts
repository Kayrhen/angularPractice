import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private leaderservice: LeaderService) { }

  getLeaders(): void{

  }
  ngOnInit(){
    //automatically exectued when this comp is created
        this.leaderservice.getLeaders().subscribe(leaders => this.leaders = leaders);
    //set into local variable
  }

  // onSelect(leader: Leader) {
  //   this.selectedLeader = leader;
  // }
}
