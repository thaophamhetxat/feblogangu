import {PostCategory} from "./PostCategory";
import {See} from "./See";
import {Users} from "./Users";

export class Post {
  idPost:number|undefined;
  content!: string;
  created!: Date;
  description!: string;
  postCategory?: PostCategory;
  see?: See;
  users?: Users;
}
