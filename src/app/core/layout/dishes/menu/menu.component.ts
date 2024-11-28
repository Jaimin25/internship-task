import {
  AfterViewChecked,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MenuService } from '../../../services/menu.service';

declare var bootstrap: any;

@Component({
  selector: 'app-dishes-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class DishesMenuComponent implements OnInit {
  categoryList: any;

  constructor(private dataService: MenuService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.categoryList = data?.CategoryList;
      console.log(this.categoryList);
    });
  }

  @HostListener('window:scroll', [''])
  onWindowScroll(event: Event) {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    const sections: any = document.querySelectorAll('.menus');

    sections.forEach((section: HTMLElement) => {
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        let navLink: any = document.querySelectorAll('.list-group li');

        navLink.forEach((link: HTMLUListElement) => {
          if (link.id.includes(section.id)) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
}
