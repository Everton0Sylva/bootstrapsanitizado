import { Component, OnInit } from '@angular/core';
import { ToasterConfig } from "angular2-toaster";
import { Subscription } from 'rxjs';
import { IMenuItem } from 'src/app/constants/_nav';
import { menuMain } from 'src/app/navigation/navigation';
import { ISidebar, SidebarService } from '../layout/sidebar/sidebar.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})

export class ViewComponent implements OnInit {

  public toasterconfig: ToasterConfig =
    new ToasterConfig({
      //showCloseButton: true, 
      positionClass: 'toast-top-center',
      tapToDismiss: true,
      timeout: 5000
    });

    public menuItems: IMenuItem[];


    sidebar: ISidebar;
    subscription: Subscription;
    constructor(private sidebarService: SidebarService) {

    }
    
    ngOnInit() {
      this.subscription = this.sidebarService.getSidebar().subscribe(
        res => {
          this.sidebar = res;
        },
        err => {
          console.error(`An error occurred: ${err.message}`);
        }
      );
  
      this.menuItems = menuMain;
    }
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  

}
