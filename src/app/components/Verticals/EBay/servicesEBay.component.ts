import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
    selector: 'app-EBay',
    templateUrl: './serviceEBay.component.html',
    styleUrls: ['./serviceEBay.component.scss'],
})
export class ServicesEBayComponent implements OnInit {
    activeWhatsapp: boolean = false;

    // constructor() { }

    navigateToContact(): void {
        this.router.navigate(['/contact']);
    }

    faqs = [
        {
            question: "How can Zyper help improve my eBay visibility?",
            answer: "Our advertising tools specialize in running eBay promoted listings and using cross-platform advertising to boost visibility. We refine your campaigns to target the right customers and drive more traffic to your products.",
            expanded: false,
        },
        {
            question: "How will I get more visibility for my eBay products across platforms?",
            answer: "We optimize your ad campaigns across multiple platforms, including Instagram ads, Facebook ads, and LinkedIn ads. This ensures that your eBay products reach a larger audience, both on eBay and beyond.",
            expanded: false,
        },
        {
            question: "Can I scale my eBay business without a large marketing team?",
            answer: "Yes! Our AI-powered platform automates advertising campaigns, product listing optimization, and multi-platform ads, enabling you to scale your eBay business without needing a large team.",
            expanded: false,
        },
    ];

    constructor(private meta: Meta, private router: Router) { }

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

    SwitchWhatsappState(): void {
        this.activeWhatsapp = !this.activeWhatsapp;
    }

    toggleFaq(index: number): void {
        this.faqs[index].expanded = !this.faqs[index].expanded;
    }
}
