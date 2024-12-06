import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-lawfirms',
    templateUrl: './servicesRealEstate.component.html',
    styleUrls: ['./servicesRealEstate.component.scss'],
})
export class ServicesRealEstateComponent implements OnInit {
    activeWhatsapp: boolean = false;
    constructor(private meta: Meta) { }

    @Input() faqs: { question: string; answer: string; expanded: boolean }[] = [
    ];


    ngOnInit(): void {
        this.meta.updateTag({
            name: 'description',
            content:
                'Social media marketing agency with facebook marketing, instagram marketing services. Social media posts, calendar and scheduling. Great packages & pricing',
        });
        this.meta.updateTag({
            name: 'title',
            content:
                'social media marketing smm agency - instagram marketer, facebook marketer, tiktok marketer for small businesses',
        });
    }

    toggleFaq(index: number): void {
        // Toggle the expanded state immutably
        this.faqs = this.faqs.map((faq, i) =>
            i === index ? { ...faq, expanded: !faq.expanded } : faq
        );
    }

    SwitchWhatsappState(): void {
        this.activeWhatsapp = !this.activeWhatsapp;
    }
}
