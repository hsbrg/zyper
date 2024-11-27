import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-resources-thirteenthPage',
    templateUrl: './resources-fifteenthPage.component.html',
    styleUrls: ['./resources-fifteenthPage.component.scss'],
})
export class ResourcesFifteenthComponent implements OnInit {
    activeWhatsapp: boolean = false;
    showLoader: boolean = false;

    constructor(private meta: Meta) { }

    ngOnInit(): void {
        this.showLoader = true;

        if (typeof window !== 'undefined') {
            window.addEventListener('load', () => {
                this.showLoader = false;
            });
        }

        this.meta.updateTag({
            name: 'description',
            content:
                'Zyper.ai provides AI enabled digital marketing for small businesses - PPC, paid marketing, social media, SEO, website building, google listings services',
        });
        this.meta.updateTag({
            name: 'title',
            content:
                'Zyper.ai is a fully automated full stack AI-enabled marketing platform for small businesses',
        });
    }

    switchWhatsappState() {
        this.activeWhatsapp = !this.activeWhatsapp;
    }
}
