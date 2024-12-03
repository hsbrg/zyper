import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-etsy',
    templateUrl: './etsy.component.html',
    styleUrls: ['./etsy.component.scss'],
})
export class ServicesETSYComponent implements OnInit {
    activeWhatsapp: boolean = false;

    @Input() faqs: { question: string; answer: string; expanded: boolean }[] = [
        {
            question: "How does your digital marketing company help improve my Etsy SEO?",
            answer: "Our digital marketing services focus on thorough Etsy SEO audits. We optimize your listings with the best keywords, descriptions, and tags to boost your rankings in Etsy search results.",
            expanded: false
        },
        {
            question: "How can I reduce my ad spend on Etsy?",
            answer: "By automating your ad campaigns and targeting the right audience, our digital marketing platform helps you spend your budget wisely. We ensure your ad dollars are maximized for better visibility and higher sales.",
            expanded: false
        },
        {
            question: "Can I improve my organic sales without spending more on ads?",
            answer: "Yes, you can! Our digital marketing company specializes in Etsy SEO optimization to boost organic traffic, driving more sales without relying on paid ads.",
            expanded: false
        },
        {
            question: "Why do I need digital marketing services if I already sell on Etsy?",
            answer: "While Etsy is a great platform, using professional digital marketing services ensures you get the most out of your shop by optimizing your listings and ads to increase visibility, traffic, and sales.",
            expanded: false
        },
        {
            question: "Can I scale my Etsy business using digital marketing services without hiring a large team?",
            answer: "Absolutely! Our digital marketing platform automates key marketing tasks, enabling you to scale your Etsy shop without needing a large team. Let AI do the heavy lifting while you focus on your products.",
            expanded: false
        }
    ];

    constructor(private meta: Meta) { }

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
