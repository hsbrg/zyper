import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-amazon',
    templateUrl: './serviceAmazon.component.html',
    styleUrls: ['./serviceAmazon.component.scss'],
})
export class ServicesAmazonComponent implements OnInit {
    @Input() faqs: { question: string; answer: string; expanded: boolean }[] = [];

    activeWhatsapp: boolean = false;

    constructor(private meta: Meta) { }

    ngOnInit(): void {
        // Set meta tags for SEO
        this.meta.updateTag({
            name: 'description',
            content:
                'Social media marketing agency with Facebook marketing, Instagram marketing services. Social media posts, calendar, and scheduling. Great packages & pricing.',
        });

        this.meta.updateTag({
            name: 'title',
            content:
                'Social media marketing SMM agency - Instagram marketer, Facebook marketer, TikTok marketer for small businesses.',
        });

        // Set default FAQs if none provided
        if (!this.faqs || this.faqs.length === 0) {
            this.faqs = this.defaultFaqs();
        }
    }

    toggleFaq(index: number): void {
        // Toggle the expanded state of the clicked FAQ
        this.faqs[index].expanded = !this.faqs[index].expanded;
    }

    SwitchWhatsappState(): void {
        // Toggle WhatsApp state
        this.activeWhatsapp = !this.activeWhatsapp;
    }

    private defaultFaqs(): { question: string; answer: string; expanded: boolean }[] {
        return [
            {
                question: 'How does your platform help improve my Amazon SEO?',
                answer:
                    'Our AI-driven platform audits your Amazon listings, optimizing titles, descriptions, keywords, and tags to improve your ranking on Amazon search results and increase organic traffic.',
                expanded: false,
            },
            {
                question: 'How can I reduce my Amazon ad spend while increasing sales?',
                answer:
                    'By optimizing your Amazon Sponsored Ads and adjusting targeting with AI, we help you reduce wasted ad spend and ensure your marketing dollars are used more efficiently.',
                expanded: false,
            },
            {
                question: 'Can I improve my organic Amazon sales without increasing my ad budget?',
                answer:
                    'Yes! Our Amazon SEO optimization strategies will increase organic traffic and sales without relying heavily on paid ads. We optimize your product listings to help you rank higher in Amazon search results.',
                expanded: false,
            },
            {
                question: 'Why do I need digital marketing services for Amazon if I already have a shop?',
                answer:
                    'While Amazon offers a great platform, AI-powered digital marketing tools help you refine your listings, optimize ads, and improve visibility, ensuring you capture more customers and increase sales.',
                expanded: false,
            },
            {
                question: 'Can I scale my Amazon business without hiring a large team?',
                answer:
                    'Yes. Our platform automates key marketing tasks such as ad management and SEO optimization, allowing you to scale your Amazon business efficiently without having to hire a large team.',
                expanded: false,
            },
        ];
    }
}
