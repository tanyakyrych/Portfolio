import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../shared/services/category.service';
import { ICategory } from './../../shared/interfaces/category.interface';
import { NewCategory } from './../../shared/classes/new-category.class';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css'],
  providers: [CategoryService]
})
export class AdminCategoryComponent implements OnInit {
  adminCategory: Array<ICategory> = [];
  categoryName: string;
  editStatus: boolean = false;
  editID: number;
  constructor(private categoryService: CategoryService) {
    this.getCategory();
  }

  ngOnInit() {
  }
  private getCategory(): void {
    this.categoryService.getCategory().subscribe(
      data => {
        this.adminCategory = data;
      },
      err => {
        console.log(err)
      }
    )
  };

  public isAddCategory(): void {
    const newCategory: ICategory = new NewCategory(
      0,
      this.categoryName
    );
    newCategory.id = this.adminCategory.slice(-1)[0].id + 1;
    this.categoryName = '';
    this.categoryService.addCategory(newCategory).subscribe(
      () => {
        this.getCategory();
      })
  };

  public isDeleteCategory(category: ICategory): void {
    const id = category.id;
    this.categoryService.delCategory(id).subscribe(
      () => {
        this.getCategory();
      })
  };
  
  public isEditCategory(category: ICategory): void {
    this.editStatus = true;
    this.categoryName = category.name;
    this.editID = category.id;
  };

  public isSaveEditCategory(): void {
    const newCategory: ICategory = new NewCategory(
      this.editID,
      this.categoryName

    );
    this.categoryName = '';
    this.categoryService.editCategory(newCategory).subscribe(
      () => {
        this.getCategory();
      })
    this.editStatus = false;
  }




}
