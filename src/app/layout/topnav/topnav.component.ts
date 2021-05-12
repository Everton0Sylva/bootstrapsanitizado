import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService, ISidebar } from '../sidebar/sidebar.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Colors } from 'src/app/constants/colors.service';
import { HttpRequestService } from 'src/app/auth/http-request.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html'
})
export class TopnavComponent implements OnInit, OnDestroy {
  sidebar: ISidebar;
  subscription: Subscription;
  displayName = 'Sistema Nf-e Teste';
  currentLanguage: string;
  isSingleLang;
  isFullScreen = false;
  isDarkModeActive = false;
  searchKey = '';

  public themeColor: any;

  constructor(private oauth2request: HttpRequestService, private sidebarService: SidebarService, private router: Router, private translate: TranslateService) {
    // this.languages = this.langService.supportedLanguages;
    this.currentLanguage = this.translate.instant('settings.shorthand');
    //  this.isSingleLang = this.langService.isSingleLang;
    this.isSingleLang = true;
    this.isDarkModeActive = this.getColor().indexOf('dark') > -1 ? true : false;
  }

  onDarkModeChange(event) {
    let color = this.getColor();
    if (color.indexOf('dark') > -1) {
      color = color.replace('dark', 'light');
    } else if (color.indexOf('light') > -1) {
      color = color.replace('light', 'dark');
    }
    localStorage.setItem(environment.themeColorStorageKey, color);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  getColor() {
    return localStorage.getItem(environment.themeColorStorageKey)
      ? localStorage.getItem(environment.themeColorStorageKey)
      : environment.defaultColor;
  }

  fullScreenClick() {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  ngOnInit() {
    // this.displayName = localStorage.getItem('nome')

    this.themeColor = Colors.getColors().themeColor1;

    this.subscription = this.sidebarService.getSidebar().subscribe(
      res => {
        this.sidebar = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  menuButtonClick = (e: { stopPropagation: () => void; }, menuClickCount: number, containerClassnames: string) => {
    if (e) { e.stopPropagation(); }
    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);

    this.sidebarService.setContainerClassnames(
      ++menuClickCount,
      containerClassnames,
      this.sidebar.selectedMenuHasSubItems
    );
  }

  mobileMenuButtonClick = (event: { stopPropagation: () => void; }, containerClassnames: string) => {
    if (event) { event.stopPropagation(); }
    this.sidebarService.clickOnMobileMenu(containerClassnames);
  }

  onSignOut() {
    /*  this.authService.signOut().subscribe(() => {
        this.router.navigate(['/']);
      });
      */
   this.oauth2request.logout();
  }

  searchKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
    } else if (event.key === 'Escape') {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) { input.classList.remove('mobile-view'); }
      this.searchKey = '';
    }
  }

  searchAreaClick(event) {
    event.stopPropagation();
  }
  searchClick(event) {
    if (window.innerWidth < environment.menuHiddenBreakpoint) {
      let elem = event.target;
      if (!event.target.classList.contains('search')) {
        if (event.target.parentElement.classList.contains('search')) {
          elem = event.target.parentElement;
        } else if (
          event.target.parentElement.parentElement.classList.contains('search')
        ) {
          elem = event.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains('mobile-view')) {
        this.search();
        elem.classList.remove('mobile-view');
      } else {
        elem.classList.add('mobile-view');
      }
    } else {
      this.search();
    }
    event.stopPropagation();
  }

  search() {
    if (this.searchKey && this.searchKey.length > 1) {
      this.router.navigate(['/app/pages/miscellaneous/search'], { queryParams: { key: this.searchKey.toLowerCase().trim() } });
      this.searchKey = '';
    }
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event) {
    const input = document.querySelector('.mobile-view');
    if (input && input.classList) { input.classList.remove('mobile-view'); }
    this.searchKey = '';
  }
}
