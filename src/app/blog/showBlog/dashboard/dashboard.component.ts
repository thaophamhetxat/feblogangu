import { Component, OnInit } from '@angular/core';
import {Post} from "../../../model/Post";
import {FormControl, FormGroup} from "@angular/forms";
import {PostCategory} from "../../../model/PostCategory";
import {See} from "../../../model/See";
import {Users} from "../../../model/Users";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  posts: Post[] = [];
  postFrom!: FormGroup;

  categories: PostCategory[] = [];
  sees: See[] = [];
  users: Users[] = [];
  private _demo1!: string;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.getSee();
    this.getPost();
    this.postFrom = new FormGroup({
      idPost: new FormControl(),
      content: new FormControl(),
      created:new FormControl(),
      description: new FormControl(),
      postCategory: new FormControl(),
      see: new FormControl(),
      users: new FormControl(),
    })
  }
  submit() {
    this.http.post<Post>('http://localhost:8080/blog/posts/', this.postFrom.value).subscribe((data) => {
      alert("Tạo thành công - " + data.content)
      this.router.navigate(['blog/menuPost']);
    })
  }

  getCategory() {
    this.http.get<PostCategory[]>('http://localhost:8080/blog/categories/').subscribe((data) => {
      this.categories = data;
    })
  }

  getSee() {
    this.http.get<See[]>('http://localhost:8080/blog/sees/').subscribe((data) => {
      this.sees = data;
    })
  }

  getPost() {
    this.http.get<Post[]>('http://localhost:8080/blog/posts/').subscribe((data) => {
      this.posts = data;
    })
  }

  show(idPostCategory: number) {

  }

  myFunction(demo1: string) {
    this._demo1 = demo1;
    // @ts-ignore
    document.getElementById("myBtn").click();
    function myFunction(id: string) {
      var x = document.getElementById(id);
      // @ts-ignore
      if (x.className.indexOf("w3-show") == -1) {
        // @ts-ignore
        x.className += " w3-show";
      } else {
        // @ts-ignore
        x.className = x.className.replace(" w3-show", "");
      }
    }
  }


}
