import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
@Injectable()
export class LeaderService {

  constructor() { }

  // getLeaders(): Leader[] {
  //   return LEADERS;
  // }
  //
  // getLeader(id: number): Leader {
  //   return LEADERS.filter((leader) => (leader.id === id))[0];
  //   //=> add all function, the [0] is returning subarray
  // }
  //
  // getFeaturedLeader(): Leader {
  //   return LEADERS.filter((leader) => leader.featured)[0];
  // }

    getLeaders(): Promise<Leader[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getLeader(id: number): Promise<Leader> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    });
  }
}
