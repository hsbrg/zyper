import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-knowledge-center-post',
  templateUrl: './knowledge-center-post.component.html',
  styleUrls: ['./knowledge-center-post.component.scss'],
})
export class KnowledgeCenterPostComponent implements OnInit {
  activeWhatsapp: boolean = false;
  blogId: any;
  blogs: any = blogs;
  blog: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.blogId = id.split(':')[1];
      this.blogId = parseInt(this.blogId);
      this.http.post<any>('https://api.zyper.ai/crm/getblogwithid/', {'id': this.blogId}).subscribe((res) => {
            const data: any = res;
            this.blog = res.blogs
      });
      // console.log(typeof this.blogId);
      // console.log(this.blogId);

      // this.blog = this.blogs[this.blogId];
      // console.log(this.blog);
      // if (this.blog === undefined || this.blog === null) {
      //   this.router.navigate(['/knowledge-center']);
      // }
    });
  }
  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}

const blogs = [
  {
    id: 0,
    title: 'How to build a website',
    image: 'assets/images/about_1.jpg',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '2021-10-10',
    author: 'John Doe',
  },
  {
    id: 1,
    title: 'How to build a website',
    image: 'assets/images/about_1.jpg',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '2021-10-10',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'How to build a website',
    image: 'assets/images/about_1.jpg',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '2021-10-10',
    author: 'John Doe',
  },
  {
    id: 3,
    title: 'How to build a website',
    image: 'assets/images/about_1.jpg',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '2021-10-10',
    author: 'John Doe',
  },
];
