import {
  AfterContentInit,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-dishes-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class DishesCategoriesComponent implements OnInit {
  categoryList: any;

  constructor(private dataService: MenuService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.categoryList = data?.CategoryList;
    });
  }

  scrollToCategory(categoryId: string): void {
    const targetElement = document.querySelector(` #i${categoryId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
