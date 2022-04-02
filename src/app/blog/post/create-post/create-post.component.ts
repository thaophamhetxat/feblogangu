import {Component, OnInit} from '@angular/core';
import {Post} from "../../../model/Post";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PostCategory} from "../../../model/PostCategory";
import {See} from "../../../model/See";
import {Users} from "../../../model/Users";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  posts: Post[] = [];
  postFrom!: FormGroup;

  categories: PostCategory[] = [];
  sees: See[] = [];
  users: Users[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.getSee();
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
}
