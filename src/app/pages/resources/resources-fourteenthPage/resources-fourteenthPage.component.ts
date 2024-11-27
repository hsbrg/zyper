import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-resources-fourteenthPage',
    templateUrl: './resources-fourteenthPage.component.html',
    styleUrls: ['./resources-fourteenthPage.component.scss'],
})
export class ResourcesFourteenthComponent implements OnInit {
    activeWhatsapp: boolean = false;
    showLoader: boolean = false;

    constructor(private meta: Meta) { }

    sectors = [
        {
            name: 'Home & Kitchen',
            marketingHabits: 'SEO content, email marketing, influencer partnerships',
            adPlatforms: 'Google Ads, Facebook Ads',
            adTypes: 'Search ads, display ads',
            instagramUsage: 'Medium',
            avgPrice: '$20 - $200',
            primaryChannels: 'Amazon, Google',
            salesSources: 'Amazon > Google > Instagram',
            notes: 'Amazon dominates due to variety and trust.',
        },
        {
            name: 'Beauty & Personal Care',
            marketingHabits: 'Influencer marketing, video tutorials, user content',
            adPlatforms: 'Instagram Ads, TikTok Ads',
            adTypes: 'Sponsored posts, video ads',
            instagramUsage: 'High',
            avgPrice: '$10 - $100',
            primaryChannels: 'Instagram, Amazon',
            salesSources: 'Instagram > Amazon > Google',
            notes: 'Strong Instagram sales via influencers.',
        },
        {
            name: 'Electronics',
            marketingHabits: 'Tech reviews, comparison blogs, retargeting ads',
            adPlatforms: 'Google Ads, YouTube Ads',
            adTypes: 'Search ads, video ads',
            instagramUsage: 'Low to Medium',
            avgPrice: '$50 - $1,000+',
            primaryChannels: 'Amazon, Google',
            salesSources: 'Amazon > Google > Instagram',
            notes: 'Consumers prefer Amazon for electronics.',
        },
        {
            name: 'Fashion & Apparel',
            marketingHabits: 'Social media campaigns, influencer partnerships',
            adPlatforms: 'Instagram Ads, Facebook Ads',
            adTypes: 'Carousel ads, Stories ads',
            instagramUsage: 'High',
            avgPrice: '$30 - $300',
            primaryChannels: 'Instagram, Amazon',
            salesSources: 'Instagram > Amazon > Google',
            notes: 'Visual appeal boosts Instagram sales.',
        },
        {
            name: 'Sports & Outdoors',
            marketingHabits:
                'Content marketing, email, newsletters, affiliate marketing',
            adPlatforms: 'Facebook Ads, Google Ads',
            adTypes: 'Display ads, sponsored posts',
            instagramUsage: 'Medium',
            avgPrice: '$25 - $500',
            primaryChannels: 'Amazon, Google',
            salesSources: 'Amazon > Google > Instagram',
            notes: 'Amazon preferred for equipment; Google aids research.',
        },
        {
            name: 'Health & Wellness',
            marketingHabits:
                'Educational content, webinars, influencer collaborations',
            adPlatforms: 'Instagram Ads, Facebook Ads',
            adTypes: 'Video ads, sponsored content',
            instagramUsage: 'Medium to High',
            avgPrice: '$15 - $150',
            primaryChannels: 'Amazon, Instagram',
            salesSources: 'Amazon > Instagram > Google',
            notes: 'Amazon for supplements; Instagram for lifestyle products.',
        },
        {
            name: 'Toys & Games',
            marketingHabits: 'Social media contests, video demos, family content',
            adPlatforms: 'YouTube Ads, Facebook Ads',
            adTypes: 'Video ads, interactive ads',
            instagramUsage: 'Low to Medium',
            avgPrice: '$10 - $100',
            primaryChannels: 'Amazon, Google',
            salesSources: 'Amazon > Google > Instagram',
            notes: 'Parents trust Amazon; Google for reviews.',
        },
    ];

    keyInsights = [
        "Digital Marketing Habits: Sellers utilize strategies like SEO, content marketing, and influencer partnerships tailored to their sector's audience.",
        'Ad Platforms: Choice depends on the target demographics; visual platforms like Instagram are popular for fashion and beauty, while Google Ads are favored for home goods and electronics.',
        'Types of Ads: Include search and display ads, video ads, and interactive ads, depending on product type and engagement strategies.',
        'Instagram Store Usage: High in visually-driven sectors like fashion and beauty; lower in sectors where purchases are less influenced by social media.',
        ' Average Selling Price: Varies by sector, reflecting the typical price ranges of products sold.',

    ];

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
