import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BussinessComponent } from './pages/services-page/bussiness/bussiness.component';
import { EmailComponent } from './pages/services-page/email/email.component';
import { PerformanceComponent } from './pages/services-page/performance/performance.component';
import { SeoComponent } from './pages/services-page/seo/seo.component';
import { SocialMediaComponent } from './pages/services-page/social-media/social-media.component';
import { WebsiteComponent } from './pages/services-page/website/website.component';
import { WhatsappComponent } from './pages/services-page/whatsapp/whatsapp.component';
import { AboutComponent } from './pages/about/about.component';
import { AiTechnologyComponent } from './pages/ai-technology/ai-technology.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GetzyperComponent } from './pages/getzyper/getzyper.component';
import { KnowledgeCenterComponent } from './pages/knowledge-center/knowledge-center.component';
import { KnowledgeCenterPostComponent } from './pages/knowledge-center-post/knowledge-center-post.component';
import { LegalComponent } from './pages/legal/legal.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentpolicyComponent } from './pages/paymentpolicy/paymentpolicy.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { RegisterComponent } from './pages/register/register.component';
import { CookieconsentComponent } from './components/cookieconsent/cookieconsent.component';
import { FloatingArrowComponent } from './components/floating-arrow/floating-arrow.component';
import { NavbarTwoComponent } from './components/navbar-two/navbar-two.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { FreelanceComponent } from './pages/freelance/freelance.component';
import { SmbComponent } from './pages/smb/smb.component';
import { AgencyComponent } from './pages/agency/agency.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourcesFirstComponent } from './pages/resources/resources-firstPage/resources-firstPage.component';
import { ResourcesSecondComponent } from './pages/resources/resources-secondPage/resources-secondPage.component';
import { ResourcesThirdComponent } from './pages/resources/resources-thirdPage/resources-thirdPage.component';
import { ResourcesFourthComponent } from './pages/resources/resources-fourthPage/resources-fourthPage.component';
import { ResourcesFifthComponent } from './pages/resources/resources-fifthPage/resources-fifthPage.component';
import { ResourcesSixthComponent } from './pages/resources/resources-sixthPage/resources-sixthPage.component';
import { ResourcesSeventhComponent } from './pages/resources/resources-seventhPage/resources-seventhPage.component';
import { ResourcesEighthComponent } from './pages/resources/resources-eighthPage/resources-eighthPage.component';
import { ResourcesNinthComponent } from './pages/resources/resources-ninthPage/resources-ninthPage.component';
import { ResourcesTenthComponent } from './pages/resources/resources-tenthPage/resources-tenthPage.component';
import { FeatureCardsComponent } from './components/feature-cards/feature-cards.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TopBarComponent } from './components/hero-section/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BussinessComponent,
    EmailComponent,
    PerformanceComponent,
    SeoComponent,
    SocialMediaComponent,
    WebsiteComponent,
    WhatsappComponent,
    AboutComponent,
    AiTechnologyComponent,
    ComingsoonComponent,
    ContactComponent,
    GetzyperComponent,
    KnowledgeCenterComponent,
    KnowledgeCenterPostComponent,
    ResourcesComponent,
    ResourcesFirstComponent,
    ResourcesSecondComponent,
    ResourcesThirdComponent,
    ResourcesFourthComponent,
    ResourcesFifthComponent,
    ResourcesSixthComponent,
    ResourcesSeventhComponent,
    ResourcesEighthComponent,
    ResourcesNinthComponent,
    ResourcesTenthComponent,
    FeatureCardsComponent,
    HeroSectionComponent,
    TopBarComponent,
    LegalComponent,
    LoginComponent,
    PaymentpolicyComponent,
    PricingComponent,
    PrivacyComponent,
    RegisterComponent,
    CookieconsentComponent,
    FloatingArrowComponent,
    NavbarTwoComponent,
    FooterComponent,
    FreelanceComponent,
    SmbComponent,
    AgencyComponent,
    PricingTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DropdownModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
