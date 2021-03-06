import { Component, OnInit, Input, ElementRef, AfterContentInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import Glide from '@glidejs/glide';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-glide',
  templateUrl: './glide.component.html'
})
export class GlideComponent implements AfterContentInit, AfterViewInit, OnDestroy {
  @Input() settings;
  @ViewChild('glideRef', { static: true }) glideRef: ElementRef;
  @ViewChild('glideSlides', { static: true }) glideSlides: ElementRef;
  glideCarousel;
  glideCount = [];
  direction = 'ltr';
  sidebarSubscription: Subscription;
  sidebar;

  constructor(private sidebarService: SidebarService,private translate: TranslateService,) {
    this.direction = this.translate.instant('settings.direction');
    this.sidebarSubscription = this.sidebarService.getSidebar().subscribe(
      res => {
        if (this.sidebar) {
          if (this.sidebar.containerClassnames !== res.containerClassnames) {
            this.update();
          }
        }
        this.sidebar = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngAfterContentInit() {
    this.glideCount = Array(this.glideSlides.nativeElement.childNodes.length - 1).fill(1).map((x, i) => i);
    this.glideCarousel = new Glide(this.glideRef.nativeElement, { ...this.settings, direction: this.translate.instant('settings.direction') });
    this.glideCarousel.mount();
  }

  ngAfterViewInit() {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', false, false);
    window.dispatchEvent(event);
  }

  update() {
    setTimeout(() => {
      this.glideCarousel.update();
    }, 500);
  }

  onBulletClick(bulletIndex) {
    this.glideCarousel.go('=' + bulletIndex);
  }

  ngOnDestroy() {
    this.glideCarousel.destroy();
    this.sidebarSubscription.unsubscribe();
  }
}
