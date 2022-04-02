import {Component, OnInit} from '@angular/core';
import {PostCategory} from "../../../model/PostCategory";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {
  postCategories: PostCategory[] = [];
  postCategoryForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.postCategoryForm = new FormGroup({
      idPostCategory: new FormControl(),
      name: new FormControl()
    })
  }

  submit() {
    this.http.post<PostCategory>('http://localhost:8080/blog/categories/', this.postCategoryForm.value).subscribe((data) => {
      alert("Tạo thành công - " + data.name)
      this.router.navigate(['blog/menu']);
    })
  }


  getCategory() {
    this.http.get<PostCategory[]>('http://localhost:8080/blog/categories/').subscribe((data) => {
      this.postCategories = data;
    })
  }

  deleteCategory(idPostCategory: number| undefined) {
    var r = confirm("Xác nhận xóa!");
    if (r) {
      this.http.delete(`http://localhost:8080/blog/categories/${idPostCategory}`).subscribe((data) => {
        alert("xóa thành công");
        this.getCategory();
      })
    } else {
      return;
    }
  }

  edit(idPostCategory: number) {

  }
}
