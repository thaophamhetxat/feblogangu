import { Component, OnInit } from '@angular/core';
import {PostCategory} from "../../../model/PostCategory";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {See} from "../../../model/See";

@Component({
  selector: 'app-create-see',
  templateUrl: './create-see.component.html',
  styleUrls: ['./create-see.component.css']
})
export class CreateSeeComponent implements OnInit {

  sees: See[] = [];
  seeForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.seeForm = new FormGroup({
      idSee: new FormControl(),
      name: new FormControl()
    })
  }

  submit() {
    this.http.post<See>('http://localhost:8080/blog/sees/', this.seeForm.value).subscribe((data) => {
      alert("Tạo thành công - " + data.name)
      this.router.navigate(['blog/menu']);
    })
  }


  getCategory() {
    this.http.get<See[]>('http://localhost:8080/blog/sees/').subscribe((data) => {
      this.sees = data;
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
