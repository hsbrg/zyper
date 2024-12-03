import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
    selector: 'app-shopify',
    templateUrl: './servicesShopify.component.html',
    styleUrls: ['./servicesShopify.component.scss'],
})
export class ServicesShopifyComponent implements OnInit {
    activeWhatsapp: boolean = false;
    constructor(private meta: Meta) { }

    @Input() faqs: { question: string; answer: string; expanded: boolean }[] = [
        {
            question: "How does your platform help improve my Shopify SEO?",
            answer: "Our AI-driven platform optimizes your Shopify product listings, refining titles, descriptions, keywords, and tags to enhance your rankings on Shopify search results and increase organic traffic.",
            expanded: false,
        },
        {
            question: "How can I reduce my Shopify ad spend while increasing sales?",
            answer: "We optimize your Shopify Ads and targeting using AI, ensuring that every dollar spent is used efficiently. By refining your bidding strategies and targeting the right audience, we help you reduce waste and boost your ROI.",
            expanded: false,
        },
        {
            question: "Can I improve my Shopify store’s sales without increasing my ad budget?",
            answer: "Yes! By improving your Shopify SEO and optimizing your product listings, you can boost organic traffic and sales without relying heavily on paid ads.",
            expanded: false,
        },
        {
            question: "Why should I invest in digital marketing services for Shopify?",
            answer: "While Shopify provides a great platform, digital marketing tools ensure that your store stands out. Our AI-driven solutions optimize your listings, enhance your ads, and increase visibility, helping you capture more customers and drive higher sales.",
            expanded: false,
        }
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


    SwitchWhatsappState() {
        this.activeWhatsapp = !this.activeWhatsapp;
    }

}
