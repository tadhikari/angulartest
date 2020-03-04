import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId = 10;
  serverStatus = 'offline';
  serverName = '';
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  getServerStatus() {
    return this.serverStatus;
  }


  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer() {
      this.serverCreationStatus = 'new server was created';
   }

   onUpdateServerName(event: Event) {
      this.serverName = (event.target as HTMLInputElement).value;
   }          // (<HTMLInputElement>event.target).value;

}
