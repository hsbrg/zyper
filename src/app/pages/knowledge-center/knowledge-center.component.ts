import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-knowledge-center',
  templateUrl: './knowledge-center.component.html',
  styleUrls: ['./knowledge-center.component.scss'],
})
export class KnowledgeCenterComponent implements OnInit {
  showLoader: boolean = false;
  activeWhatsapp: boolean = false;

  blogs: any;

  constructor(private http: HttpClient, private meta: Meta) {}

  ngOnInit(): void {
    this.showLoader = true;
    window.addEventListener('load', () => {
      this.showLoader = false;
    });
    this.http.get<any>('https://api.zyper.ai/crm/getblogs/').subscribe((res) => {
      const data: any = res;
      this.blogs = res.blogs
    });

    this.meta.updateTag({
      name: 'description',
      content:
        'we cover the most interesting and effective AI technologies for digital marketing',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'AI enabled online marketing articles, courses and knowledge center',
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