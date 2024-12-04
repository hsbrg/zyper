import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
    selector: 'app-walmart',
    templateUrl: './servicesWalmart.component.html',
    styleUrls: ['./servicesWalmart.component.scss'],
})
export class ServicesWalmartComponent implements OnInit {
    activeWhatsapp: boolean = false;
    constructor(private meta: Meta, private router: Router) { }


    @Input() faqs: { question: string; answer: string; expanded: boolean }[] = [
        {
            question: "How can Zyper help improve my Walmart visibility?",
            answer: "Our digital marketing platform specializes in Walmart marketing services, including sponsored product campaigns and social media marketing services. We ensure your products get seen by the right customers, driving more traffic to your Walmart listings.",
            expanded: false,
        },
        {
            question: "How will I get more visibility for my Walmart products across platforms?",
            answer: "Our online advertising services span multiple platforms, including Instagram, Facebook, LinkedIn, and Google. This comprehensive approach ensures that your Walmart products reach a broader audience, both on Walmart and across the web.",
            expanded: false,
        },
        {
            question: "Can I scale my Walmart business without a large marketing team?",
            answer: "Absolutely! Our digital marketing advertising platform uses AI-powered platforms to automate campaign management and product listing optimization, helping you scale your Walmart business effectively without the need for a large team.",
            expanded: false,
        },
    ];


    toggleFaq(index: number): void {
        this.faqs[index].expanded = !this.faqs[index].expanded;
    }


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


    navigateToContact() {
        this.router.navigate(['/contact']);
    }

    SwitchWhatsappState() {
        this.activeWhatsapp = !this.activeWhatsapp;
    }

}
