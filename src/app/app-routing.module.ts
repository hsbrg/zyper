import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AiTechnologyComponent } from './pages/ai-technology/ai-technology.component';
import { NavbarTwoComponent } from './components/navbar-two/navbar-two.component';
import { KnowledgeCenterPostComponent } from './pages/knowledge-center-post/knowledge-center-post.component';
import { KnowledgeCenterComponent } from './pages/knowledge-center/knowledge-center.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourcesFirstComponent } from './pages/resources/resources-firstPage/resources-firstPage.component';
import { ResourcesSecondComponent } from './pages/resources/resources-secondPage/resources-secondPage.component';
import { ResourcesThirdComponent } from './pages/resources/resources-thirdPage/resources-thirdPage.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';
import { LegalComponent } from './pages/legal/legal.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { PaymentpolicyComponent } from './pages/paymentpolicy/paymentpolicy.component';
import { LandingComponent } from './pages/landing/landing.component';
import { WebsiteComponent } from './pages/services-page/website/website.component';
import { BussinessComponent } from './pages/services-page/bussiness/bussiness.component';
import { PerformanceComponent } from './pages/services-page/performance/performance.component';
import { SeoComponent } from './pages/services-page/seo/seo.component';
import { WhatsappComponent } from './pages/services-page/whatsapp/whatsapp.component';
import { EmailComponent } from './pages/services-page/email/email.component';
import { SocialMediaComponent } from './pages/services-page/social-media/social-media.component';
import { AgencyComponent } from './pages/agency/agency.component';
import { SmbComponent } from './pages/smb/smb.component';
import { FreelanceComponent } from './pages/freelance/freelance.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { ResourcesFourthComponent } from './pages/resources/resources-fourthPage/resources-fourthPage.component';
import { ResourcesFifthComponent } from './pages/resources/resources-fifthPage/resources-fifthPage.component';
import { ResourcesSixthComponent } from './pages/resources/resources-sixthPage/resources-sixthPage.component';
import { ResourcesSeventhComponent } from './pages/resources/resources-seventhPage/resources-seventhPage.component';
import { ResourcesEighthComponent } from './pages/resources/resources-eighthPage/resources-eighthPage.component';
import { ResourcesNinthComponent } from './pages/resources/resources-ninthPage/resources-ninthPage.component';
import { ResourcesTenthComponent } from './pages/resources/resources-tenthPage/resources-tenthPage.component';
import { ResourcesEleventhComponent } from './pages/resources/resources-eleventhPage/resources-eleventhPage.component';
import { ResourcesTwelfthPageComponent } from './pages/resources/resources-twelfthPage/resources-twelfthPage.component';

const routes: Routes = [
  { path: 'navbar-two', component: NavbarTwoComponent },
  {
    path: 'landing',
    component: SmbComponent,
  },
  {
    path: 'agency',
    component: AgencyComponent,
  },
  {
    path: 'smb',
    component: SmbComponent,
  },
  {
    path: 'freelancer',
    component: FreelanceComponent,
  },
  {
    path: '',
    component: SmbComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'services/website-build',
    component: WebsiteComponent,
  },
  {
    path: 'services/bussiness',
    component: BussinessComponent,
  },
  {
    path: 'services/performance',
    component: PerformanceComponent,
  },
  {
    path: 'services/seo',
    component: SeoComponent,
  },
  {
    path: 'services/whatsapp-marketing',
    component: WhatsappComponent,
  },
  {
    path: 'services/email-marketing',
    component: EmailComponent,
  },
  {
    path: 'services/social-media',
    component: SocialMediaComponent,
  },
  {
    path: 'legal',
    component: LegalComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'cancellation and refund policy',
    component: PaymentpolicyComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'pricing/gmb',
    component: PricingTableComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'ai-marketing-resources',
    children: [
      { path: '', component: ResourcesComponent },
      {
        path: 'revolutionize-your-google-tag-management-with-ai',
        component: ResourcesFirstComponent,
      },
      {
        path: 'how-to-integrate-google-tag-manager-with-your-shopify-store',
        component: ResourcesSecondComponent,
      },
      {
        path: 'simplify-your-web-tracking-with-google-tag-manager',
        component: ResourcesThirdComponent,
      },
      {
        path: 'boost-your-business-with-our-ai-driven-google-my-business-management-platform',
        component: ResourcesFourthComponent,
      },
      {
        path: 'unlock-the-power-of-accurate-google-ads-conversion-event-setup',
        component: ResourcesFifthComponent,
      },
      {
        path: 'unlock-the-full-potential-of-amazon-advertising-with-our-advanced-ai-platform',
        component: ResourcesSixthComponent,
      },
      {
        path: 'mastering-keyword-selection-for-your-ad-campaigns-a-comprehensive-guide',
        component: ResourcesSeventhComponent,
      },
      {
        path: 'how-to-calculate-your-break-even-customer-acquisition-cost-cac',
        component: ResourcesEighthComponent,
      },
      {
        path: 'zyper-ai-case-study-for-pet-store-small-business-owner',
        component: ResourcesNinthComponent,
      },
      {
        path: 'structuring-your-facebook-ads-funnel-to-maximize-output-zypers-funnel-ai-engine-recommendations',
        component: ResourcesTenthComponent,
      },
      {
        path: 'small-business-marketing-budget-guide',
        component: ResourcesEleventhComponent,
      },
      {
        path: 'ultimate-guide-to-user-generated-content-ugc-for-business-growth',
        component: ResourcesTwelfthPageComponent,
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'reg',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'ai-technology',
    component: AiTechnologyComponent,
  },
  {
    path: 'knowledge-center',
    component: KnowledgeCenterComponent,
  },
  {
    path: 'knowledge-center/:id',
    component: KnowledgeCenterPostComponent,
  },
  {
    path: 'demo',
    component: ComingsoonComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
