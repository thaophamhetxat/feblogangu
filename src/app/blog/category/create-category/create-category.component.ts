import { Component, OnInit } from '@angular/core';
import {PostCategory} from "../../../model/PostCategory";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  postCategories: PostCategory[] = [];
  postCategoryForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
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

}
