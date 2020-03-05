import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId = 10;
  serverStatus = 'offline';
  serverName = 'TestServer';
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverCreated = false;
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
      this.serverCreated = true;
      this.serverCreationStatus = 'new server was create with name: ' + this.serverName;
   }

   onUpdateServerName(event: Event) {
      this.serverName = (event.target as HTMLInputElement).value;
   }          // (<HTMLInputElement>event.target).value;


}
