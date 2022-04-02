import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


import {environment} from "../../../environments/environment.prod";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  private API_CATEGORY = environment.API_LOCAL + 'categories';
  totalElements: number = 0;

  searchText: any;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    // this.productService.getAllProduct(0).subscribe((data: Product[]) => {
    //   console.log(data);
    //   this.products = data;
    //
    // });
    //
    // this.productService.getAllProductNotPagination().subscribe((data: Product[]) => {
    //
    //   this.listProductNotPagination = data;
    //
    //   if ((this.listProductNotPagination.length % 5) != 0) {
    //     this.totalPagination = (Math.round(this.listProductNotPagination.length / 5)) + 1;
    //   }
    // })
    // this.pageProduct({page: 0, size: 6});
    //
    // this.getAllCategory();
  }

  // getAllCategory() {
  //   this.http.get<Category[]>(this.API_CATEGORY).subscribe((data) => {
  //     this.categories = data;
  //   })
  // }
  //
  //
  // pageProduct(nextPage: any | undefined) {
  //   this.productService.pageProduct(nextPage).subscribe(data => {
  //     // @ts-ignore
  //     this.products = data['content']
  //     // @ts-ignore
  //     this.totalElements = data['totalElements']
  //   })
  // }
  //
  // addCart(id: number | undefined) {
  //   this.http.get<Product[]>(`http://localhost:8080/kimkhi/buyers/${id}`).subscribe((data) => {
  //     this.products = data;
  //     alert("đã thêm vào giỏ hàng");
  //     console.log(id);
  //     console.log(data);
  //     sessionStorage.setItem('key',JSON.stringify(data));
  //     this.router.navigate(['/shop/menu']);
  //   })
  //
  // }
  //
  //
  //
  //
  // getCategory() {
  //   this.http.get<Category[]>('http://localhost:8080/kimkhi/categories/').subscribe((data) => {
  //     this.categories = data;
  //   })
  // }


  // nextPage(event: PageEvent) {
  //   const request = {};
  //   // @ts-ignore
  //   request['page'] = event.pageIndex.toString();
  //   // @ts-ignore
  //   request['size'] = event.pageSize.toString();
  //   this.pageProduct(request);
  // }


  // indexPaginationChage(value: any) {
  //   this.indexPagination = value;
  // }

  // indexPaginationChage(value: number) {
  //   this.indexPagination = value;
  // }
  //
  // firtPage() {
  //   this.indexPagination = 1;
  //   this.ngOnInit();
  // }
  //
  // nextPage() {
  //   this.indexPagination = this.indexPagination + 1;
  //   if (this.indexPagination > this.totalPagination!) {
  //     this.indexPagination = this.indexPagination - 1;
  //   }
  //   this.productService.getAllProduct((this.indexPagination * 5) - 5).subscribe((data: Product[]) => {
  //     this.products = data;
  //   })
  // }
  //
  // prviousPage() {
  //   this.indexPagination = this.indexPagination - 1;
  //   if (this.indexPagination == 0) {
  //     this.indexPagination = 1;
  //     this.ngOnInit();
  //   } else {
  //     this.productService.getAllProduct((this.indexPagination * 5) - 5).subscribe((data: Product[]) => {
  //       this.products = data;
  //     })
  //   }
  // }
  //
  // lastPage() {
  //   this.indexPagination = this.listProductNotPagination.length / 5;
  //   this.productService.getAllProduct((this.indexPagination * 5) - 5).subscribe((data: Product[]) => {
  //     this.products = data;
  //   })
  // }

  // getProductPage(nextPage: any | undefined) {
  //   this.productService.pageProduct(nextPage).subscribe(data => {
  //     // @ts-ignore
  //     this.products = data['content'];
  //
  //     this.totalPagination = data['totalPagination'];
  //   })
  // }

  // nextPage() {
  //   this.indexPagination = this.indexPagination + 1;
  //   if (this.indexPagination > this.totalPagination) {
  //     this.indexPagination = this.indexPagination - 1;
  //   }
  //   this.productService.getAllProductPage((this.indexPagination * 3)+3).subscribe((data: Product[]) => {
  //     this.products = data;
  //   })
  // }

  // prviousPage() {
  //   this.indexPagination = this.indexPagination - 1;
  //   if (this.indexPagination == 0) {
  //     this.indexPagination = 1;
  //     this.ngOnInit();
  //   } else {
  //     this.productService.getAllProductPage((this.indexPagination * 3) - 3).subscribe((data: Product[]) => {
  //       this.products = data;
  //     })
  //   }
  // }
}
