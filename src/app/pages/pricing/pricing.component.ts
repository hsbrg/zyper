import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, Inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  monthlyServices: any = monthly;
  annuallyServices: any = annually;

  activeWhatsapp: boolean = false;

  monthly_freePriceMonthly: any =
    this.cookieService.get('monthly_freePriceMonthly') || 0;
  monthly_basicPriceMonthly: any =
    this.cookieService.get('monthly_basicPriceMonthly') || 0;
  monthly_growthPriceMonthly: any =
    this.cookieService.get('monthly_growthPriceMonthly') || 0;
  monthly_fastPriceMonthly: any =
    this.cookieService.get('monthly_fastPriceMonthly') || 0;

  // fixed price in monthly section
  fixed_freePriceMonthly: any =
    this.cookieService.get('fixed_freePriceMonthly') || 0;
  fixed_basicPriceMonthly: any =
    this.cookieService.get('fixed_basicPriceMonthly') || 0;
  fixed_growthPriceMonthly: any =
    this.cookieService.get('fixed_growthPriceMonthly') || 0;
  fixed_fastPriceMonthly: any =
    this.cookieService.get('fixed_fastPriceMonthly') || 0;

  // monthly services price in annually section
  monthly_freePriceAnnually: any =
    this.cookieService.get('monthly_freePriceAnnually') || 0;
  monthly_basicPriceAnnually: any =
    this.cookieService.get('monthly_basicPriceAnnually') || 0;
  monthly_growthPriceAnnually: any =
    this.cookieService.get('monthly_growthPriceAnnually') || 0;
  monthly_fastPriceAnnually: any =
    this.cookieService.get('monthly_fastPriceAnnually') || 0;

  // fixed price in annually section
  fixed_freePriceAnnually: any =
    this.cookieService.get('fixed_freePriceAnnually') || 0;
  fixed_basicPriceAnnually: any =
    this.cookieService.get('fixed_basicPriceAnnually') || 0;
  fixed_growthPriceAnnually: any =
    this.cookieService.get('fixed_growthPriceAnnually') || 0;
  fixed_fastPriceAnnually: any =
    this.cookieService.get('fixed_fastPriceAnnually') || 0;

  constructor(
    private meta: Meta,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private cookieService: CookieService
  ) {
    // monthly services price in monthly section
  }
  annually: boolean = false;

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Zyper.ai has great pricing packgaes and effective costs for all digital marketing services - paid marketing packages, cheap ppc costs, Seo packages and pricing, business listings pricing and packages.',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'Online Digital marketing costs - Effective prices and Packages, free Online Digital marketing tools ',
    });
    // this.annually = cookieService.get('annuallySelected') === 'true';

    this.calculatePriceOnLoad();
    // console.log(this.monthlyServices);
  }
  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
  calculatePrice(index: any, service: any, isMonthly: boolean) {
    // console.log(this.monthlyServices);
    let totalFixedPrice = 0;
    let totalMonthlyPrice = 0;

    if (service[index].variable !== undefined) {
      service[index].variable = !service[index].variable;
    }

    for (let key in service) {
      if (service[key].checked) {
        // Check if the property exists and if it's a string before replacing
        if (typeof service[key].weight === 'string') {
          if (service[key].fixed) {
            totalFixedPrice += parseFloat(service[key].weight.replace('$', ''));
          } else if (service[key].monthly) {
            totalMonthlyPrice += parseFloat(
              service[key].weight.replace('$', '')
            );
          }
        } else {
          if (service[key].fixed) {
            totalFixedPrice += parseFloat(service[key].weight);
          } else if (service[key].monthly) {
            totalMonthlyPrice += parseFloat(service[key].weight);
          }
        }
      }
    }

    // Update the total price variable based on the service type
    if (isMonthly) {
      if (service === this.monthlyServices[0].freeServices) {
        this.monthly_freePriceMonthly = totalMonthlyPrice;
        this.fixed_freePriceMonthly = totalFixedPrice;
        this.cookieService.set(
          'monthly_freePriceMonthly',
          this.monthly_freePriceMonthly
        );
        this.cookieService.set(
          'fixed_freePriceMonthly',
          this.fixed_freePriceMonthly
        );
      } else if (service === this.monthlyServices[1].basicServices) {
        this.monthly_basicPriceMonthly = totalMonthlyPrice;
        this.fixed_basicPriceMonthly = totalFixedPrice;
        this.cookieService.set(
          'monthly_basicPriceMonthly',
          this.monthly_basicPriceMonthly
        );
        this.cookieService.set(
          'fixed_basicPriceMonthly',
          this.fixed_basicPriceMonthly
        );
      } else if (service === this.monthlyServices[2].growthServices) {
        this.monthly_growthPriceMonthly = totalMonthlyPrice;
        this.fixed_growthPriceMonthly = totalFixedPrice;
        this.cookieService.set(
          'monthly_growthPriceMonthly',
          this.monthly_growthPriceMonthly
        );
        this.cookieService.set(
          'fixed_growthPriceMonthly',
          this.fixed_growthPriceMonthly
        );
      } else if (service === this.monthlyServices[3].fastServices) {
        this.monthly_fastPriceMonthly = totalMonthlyPrice;
        this.fixed_fastPriceMonthly = totalFixedPrice;
        this.cookieService.set(
          'monthly_fastPriceMonthly',
          this.monthly_fastPriceMonthly
        );
        this.cookieService.set(
          'fixed_fastPriceMonthly',
          this.fixed_fastPriceMonthly
        );
      }
    } else {
      if (service === this.annuallyServices[0].freeServices) {
        this.monthly_freePriceAnnually = totalMonthlyPrice;
        this.fixed_freePriceAnnually = totalFixedPrice;
        this.cookieService.set(
          'monthly_freePriceAnnually',
          this.monthly_freePriceAnnually
        );
        this.cookieService.set(
          'fixed_freePriceAnnually',
          this.fixed_freePriceAnnually
        );
      } else if (service === this.annuallyServices[1].basicServices) {
        this.monthly_basicPriceAnnually = totalMonthlyPrice;
        this.fixed_basicPriceAnnually = totalFixedPrice;
        this.cookieService.set(
          'fixed_basicPriceAnnually',
          this.fixed_basicPriceAnnually
        );
      } else if (service === this.annuallyServices[2].growthServices) {
        this.monthly_growthPriceAnnually = totalMonthlyPrice;
        this.fixed_growthPriceAnnually = totalFixedPrice;
        this.cookieService.set(
          'monthly_growthPriceAnnually',
          this.monthly_growthPriceAnnually
        );
        this.cookieService.set(
          'fixed_growthPriceAnnually',
          this.fixed_growthPriceAnnually
        );
      } else if (service === this.annuallyServices[3].fastServices) {
        this.monthly_fastPriceAnnually = totalMonthlyPrice;
        this.fixed_fastPriceAnnually = totalFixedPrice;
        this.cookieService.set(
          'monthly_fastPriceAnnually',
          this.monthly_fastPriceAnnually
        );
        this.cookieService.set(
          'fixed_fastPriceAnnually',
          this.fixed_fastPriceAnnually
        );
      }
    }

    this.roundOffPrices();

    // Save the status of the selected services in local storage
    if (isMonthly) {
      this.cookieService.set(
        'monthlyServices',
        JSON.stringify(this.monthlyServices)
      );
    } else {
      this.cookieService.set(
        'annuallyServices',
        JSON.stringify(this.annuallyServices)
      );
    }
  }
  calculatePriceOnLoad() {
    // for monthly services in monthly section
    this.monthly_freePriceMonthly = 0;
    this.monthly_basicPriceMonthly = 0;
    this.monthly_growthPriceMonthly = 0;
    this.monthly_fastPriceMonthly = 0;

    // for fixed services in monthly section
    this.fixed_freePriceMonthly = 0;
    this.fixed_basicPriceMonthly = 0;
    this.fixed_growthPriceMonthly = 0;
    this.fixed_fastPriceMonthly = 0;

    // this.freePriceMonthly = 0;
    // this.basicPriceMonthly = 0;
    // this.growthPriceMonthly = 0;
    // this.fastPriceMonthly = 0;

    this.monthlyServices[0].freeServices.forEach((service: any) => {
      this.monthly_freePriceMonthly = parseFloat(this.monthly_freePriceMonthly);
      this.fixed_freePriceMonthly = parseFloat(this.fixed_freePriceMonthly);

      if (service.checked) {
        if (service.fixed) {
          if (typeof service.weight === 'string') {
            this.fixed_freePriceMonthly += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.fixed_freePriceMonthly += parseFloat(service.weight);
          }
        } else if (service.monthly) {
          if (typeof service.weight === 'string') {
            this.monthly_freePriceMonthly += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.monthly_freePriceMonthly += parseFloat(service.weight);
          }
        }
      }
    });

    this.monthlyServices[1].basicServices.forEach((service: any) => {
      this.monthly_basicPriceMonthly = parseFloat(
        this.monthly_basicPriceMonthly
      );
      this.fixed_basicPriceMonthly = parseFloat(this.fixed_basicPriceMonthly);

      if (service.checked) {
        if (service.fixed) {
          if (typeof service.weight === 'string') {
            this.fixed_basicPriceMonthly += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.fixed_basicPriceMonthly += parseFloat(service.weight);
          }
        } else if (service.monthly) {
          if (typeof service.weight === 'string') {
            this.monthly_basicPriceMonthly += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.monthly_basicPriceMonthly += parseFloat(service.weight);
          }
        }
      }
    });

    this.monthlyServices[2].growthServices.forEach((service: any) => {
      this.monthly_growthPriceMonthly = parseFloat(
        this.monthly_growthPriceMonthly
      );
      this.fixed_growthPriceMonthly = parseFloat(this.fixed_growthPriceMonthly);

      if (service.checked) {
        if (service.fixed) {
          if (typeof service.weight === 'string') {
            this.fixed_growthPriceMonthly += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.fixed_growthPriceMonthly += parseFloat(service.weight);
          }
        } else if (service.monthly) {
          if (typeof service.weight === 'string') {
            this.monthly_growthPriceMonthly += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.monthly_growthPriceMonthly += parseFloat(service.weight);
          }
        }
      }
    });

    this.monthlyServices[3].fastServices.forEach((service: any) => {
      this.monthly_fastPriceMonthly = parseFloat(this.monthly_fastPriceMonthly);
      this.fixed_fastPriceMonthly = parseFloat(this.fixed_fastPriceMonthly);

      if (service.checked) {
        if (service.fixed) {
          if (typeof service.weight === 'string') {
            this.fixed_fastPriceMonthly += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.fixed_fastPriceMonthly += parseFloat(service.weight);
          }
        } else if (service.monthly) {
          if (typeof service.weight === 'string') {
            this.monthly_fastPriceMonthly += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.monthly_fastPriceMonthly += parseFloat(service.weight);
          }
        }
      }
    });

    // for annually services in monthly section
    this.monthly_freePriceAnnually = 0;
    this.monthly_basicPriceAnnually = 0;
    this.monthly_growthPriceAnnually = 0;
    this.monthly_fastPriceAnnually = 0;

    // for fixed services in monthly section
    this.fixed_freePriceAnnually = 0;
    this.fixed_basicPriceAnnually = 0;
    this.fixed_growthPriceAnnually = 0;
    this.fixed_fastPriceAnnually = 0;

    this.annuallyServices[0].freeServices.forEach((service: any) => {
      this.monthly_freePriceAnnually = parseFloat(
        this.monthly_freePriceAnnually
      );
      this.fixed_freePriceAnnually = parseFloat(this.fixed_freePriceAnnually);

      if (service.checked) {
        if (service.fixed) {
          if (typeof service.weight === 'string') {
            this.fixed_freePriceAnnually += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.fixed_freePriceAnnually += parseFloat(service.weight);
          }
        } else if (service.monthly) {
          if (typeof service.weight === 'string') {
            this.monthly_freePriceAnnually += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.monthly_freePriceAnnually += parseFloat(service.weight);
          }
        }
      }
    });

    this.annuallyServices[1].basicServices.forEach((service: any) => {
      this.monthly_basicPriceAnnually = parseFloat(
        this.monthly_basicPriceAnnually
      );
      this.fixed_basicPriceAnnually = parseFloat(this.fixed_basicPriceAnnually);

      if (service.checked) {
        if (service.fixed) {
          if (typeof service.weight === 'string') {
            this.fixed_basicPriceAnnually += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.fixed_basicPriceAnnually += parseFloat(service.weight);
          }
        } else if (service.monthly) {
          if (typeof service.weight === 'string') {
            this.monthly_basicPriceAnnually += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.monthly_basicPriceAnnually += parseFloat(service.weight);
          }
        }
      }
    });

    this.annuallyServices[2].growthServices.forEach((service: any) => {
      this.monthly_growthPriceAnnually = parseFloat(
        this.monthly_growthPriceAnnually
      );
      this.fixed_growthPriceAnnually = parseFloat(
        this.fixed_growthPriceAnnually
      );

      if (service.checked) {
        if (service.fixed) {
          if (typeof service.weight === 'string') {
            this.fixed_growthPriceAnnually += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.fixed_growthPriceAnnually += parseFloat(service.weight);
          }
        } else if (service.monthly) {
          if (typeof service.weight === 'string') {
            this.monthly_growthPriceAnnually += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.monthly_growthPriceAnnually += parseFloat(service.weight);
          }
        }
      }
    });

    this.annuallyServices[3].fastServices.forEach((service: any) => {
      this.monthly_fastPriceAnnually = parseFloat(
        this.monthly_fastPriceAnnually
      );
      this.fixed_fastPriceAnnually = parseFloat(this.fixed_fastPriceAnnually);

      if (service.checked) {
        if (service.fixed) {
          if (typeof service.weight === 'string') {
            this.fixed_fastPriceAnnually += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.fixed_fastPriceAnnually += parseFloat(service.weight);
          }
        } else if (service.monthly) {
          if (typeof service.weight === 'string') {
            this.monthly_fastPriceAnnually += parseFloat(
              service.weight.replace('$', '')
            );
          } else {
            this.monthly_fastPriceAnnually += parseFloat(service.weight);
          }
        }
      }
    });

    this.roundOffPrices();
  }
  togglePricingOption(event: any) {
    this.annually = !this.annually;
    this.cookieService.set('annuallySelected', this.annually.toString());
  }
  roundOffPrices() {
    // Round off all prices to the nearest integer
    this.monthly_freePriceMonthly = Math.round(this.monthly_freePriceMonthly);
    this.monthly_basicPriceMonthly = Math.round(this.monthly_basicPriceMonthly);
    this.monthly_growthPriceMonthly = Math.round(
      this.monthly_growthPriceMonthly
    );
    this.monthly_fastPriceMonthly = Math.round(this.monthly_fastPriceMonthly);

    this.fixed_freePriceMonthly = Math.round(this.fixed_freePriceMonthly);
    this.fixed_basicPriceMonthly = Math.round(this.fixed_basicPriceMonthly);
    this.fixed_growthPriceMonthly = Math.round(this.fixed_growthPriceMonthly);
    this.fixed_fastPriceMonthly = Math.round(this.fixed_fastPriceMonthly);

    this.monthly_freePriceAnnually = Math.round(this.monthly_freePriceAnnually);
    this.monthly_basicPriceAnnually = Math.round(
      this.monthly_basicPriceAnnually
    );
    this.monthly_growthPriceAnnually = Math.round(
      this.monthly_growthPriceAnnually
    );
    this.monthly_fastPriceAnnually = Math.round(this.monthly_fastPriceAnnually);

    this.fixed_freePriceAnnually = Math.round(this.fixed_freePriceAnnually);
    this.fixed_basicPriceAnnually = Math.round(this.fixed_basicPriceAnnually);
    this.fixed_growthPriceAnnually = Math.round(this.fixed_growthPriceAnnually);
    this.fixed_fastPriceAnnually = Math.round(this.fixed_fastPriceAnnually);

    // Save rounded prices in local storage
    this.cookieService.set(
      'monthly_freePriceMonthly',
      this.monthly_freePriceMonthly.toString()
    );
    this.cookieService.set(
      'monthly_basicPriceMonthly',
      this.monthly_basicPriceMonthly.toString()
    );
    this.cookieService.set(
      'monthly_growthPriceMonthly',
      this.monthly_growthPriceMonthly.toString()
    );
    this.cookieService.set(
      'monthly_fastPriceMonthly',
      this.monthly_fastPriceMonthly.toString()
    );

    this.cookieService.set(
      'fixed_freePriceMonthly',
      this.fixed_freePriceMonthly.toString()
    );
    this.cookieService.set(
      'fixed_basicPriceMonthly',
      this.fixed_basicPriceMonthly.toString()
    );
    this.cookieService.set(
      'fixed_growthPriceMonthly',
      this.fixed_growthPriceMonthly.toString()
    );
    this.cookieService.set(
      'fixed_fastPriceMonthly',
      this.fixed_fastPriceMonthly.toString()
    );

    this.cookieService.set(
      'monthly_freePriceAnnually',
      this.monthly_freePriceAnnually.toString()
    );
    this.cookieService.set(
      'monthly_basicPriceAnnually',
      this.monthly_basicPriceAnnually.toString()
    );
    this.cookieService.set(
      'monthly_growthPriceAnnually',
      this.monthly_growthPriceAnnually.toString()
    );
    this.cookieService.set(
      'monthly_fastPriceAnnually',
      this.monthly_fastPriceAnnually.toString()
    );

    this.cookieService.set(
      'fixed_freePriceAnnually',
      this.fixed_freePriceAnnually.toString()
    );
    this.cookieService.set(
      'fixed_basicPriceAnnually',
      this.fixed_basicPriceAnnually.toString()
    );
    this.cookieService.set(
      'fixed_growthPriceAnnually',
      this.fixed_growthPriceAnnually.toString()
    );
    this.cookieService.set(
      'fixed_fastPriceAnnually',
      this.fixed_fastPriceAnnually.toString()
    );
  }
}

let monthly = [
  {
    freeServices: [
      {
        name: 'Website Development',
        description: '4 page basic website *',
        checked: true,
        weight: 0,
        fixed: true,
      },
      {
        name: 'Business Listings',
        description: 'Google Business Listing (GMB)',
        checked: true,
        weight: 0,
        monthly: true,
      },
      {
        name: 'Social Media (Posts)',
        description: '2 posts per month on Instagram, All Inclusive',
        checked: true,
        weight: 0,
        monthly: true,
      },
      {
        name: 'PPC Paid marketing',
        description: 'None',
        checked: false,
        uncheckable: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Social Media (Ads)',
        description: 'None',
        checked: false,
        uncheckable: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Email Marketing',
        description: '2 email campaigns per month',
        checked: true,
        weight: 0,
        monthly: true,
      },
      {
        name: 'SEO Services',
        description: 'None',
        checked: false,
        uncheckable: true,
        weight: 0,
        monthly: true,
      },
      {
        name: 'Whastapp Marketing',
        description: '2 whatsapp campaigns per month',
        checked: false,
        uncheckable: true,
        weight: 0,
        monthly: true,
      },
    ],
  },
  {
    basicServices: [
      {
        name: 'Website Development',
        price: '$899',
        description: 'for a 10 page website',
        checked: true,
        weight: 899,
        fixed: true,
      },
      {
        name: 'Business Listings',
        price: '$19.99',
        description: ' /month - Google Business Listing, Apple Maps, Bing Maps',
        checked: true,
        weight: 19.99,
        monthly: true,
      },
      {
        name: 'Social Media (Posts)',
        price: '$68',
        description: ' /month for 10 posts - Instagram, Facebook and Linkedin',
        checked: true,
        weight: 68,
        monthly: true,
      },
      {
        name: 'PPC Paid marketing',
        description: '20% of monthly  spend of upto $5000',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Social Media (Ads)',
        description: '20% of monthly  spend of upto $5000',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Email Marketing',
        price: '$29.99',
        description: ' / month for 5 email campaigns',
        checked: true,
        weight: 29.99,
        monthly: true,
      },
      { name: 'SEO Services', description: 'None', checked: true, weight: 0 },
      {
        name: 'Whastapp Marketing',
        price: '$39.99',
        description: '/month  for 5 whatsapp marketing campaigns',
        checked: true,
        weight: 39.99,
        monthly: true,
      },
    ],
  },
  {
    growthServices: [
      {
        name: 'Website Development',
        price: '$1999',
        description:
          'for basic ecommerce website or static website with 15 pages',
        checked: true,
        weight: 1999,
        fixed: true,
      },
      {
        name: 'Business Listings',
        price: '$29.99',
        description: '/ month - 2 locations - 10 listings',
        checked: true,
        weight: 29.99,
        monthly: true,
      },
      {
        name: 'Social Media (Posts)',
        price: '$99',
        description: '/month for 20 posts - Instagram, Facebook and Linkedin',
        checked: true,
        weight: 99,
        monthly: true,
      },
      {
        name: 'PPC Paid marketing',
        description: '16% of monthly spend between  [$5000-$10000]',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Social Media (Ads)',
        description: '16% of monthly spend between  [$5000-$10000]',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Email Marketing',
        price: '$49.99',
        description: '/month for 15 email campaigns',
        checked: true,
        weight: 49.99,
        monthly: true,
      },
      {
        name: 'SEO Services',
        price: '$499',
        description:
          '/month - Monthly perfomance and keyword Audit, 2 fresh landing pages / mo. with keyword research linked content ',
        checked: true,
        weight: 499,
        monthly: true,
      },
      {
        name: 'Whastapp Marketing',
        price: '$55.99',
        description: '/month for 10 whatsapp campaigns',
        checked: true,
        weight: 55.99,
        monthly: true,
      },
    ],
  },
  {
    fastServices: [
      {
        name: 'Website Development',
        description: 'Custom - Lets Chat',
        checked: true,
        weight: 0,
      },
      {
        name: 'Business Listings',
        price: '$49.99',
        description: '/month - upto 10 locations, 10 listings',
        checked: true,
        weight: 49.99,
        monthly: true,
      },
      {
        name: 'Social Media (Posts)',
        price: '$199',
        description:
          '/month for 40 posts - Instagram, Facebook, Linkedin, Tiktok',
        checked: true,
        weight: 199,
        monthly: true,
      },
      {
        name: 'PPC Paid marketing',
        description: '12% of monthly spend greater than $10,000 per month',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Social Media (Ads)',
        description: '12% of monthly spend greater than $10,000 per month',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Email Marketing',
        price: '$129.99',
        description: '/month For 30 email campaigns',
        checked: true,
        weight: 129.99,
        monthly: true,
      },
      {
        name: 'SEO Services',
        price: '$899',
        description:
          '/month - Monthly Audit + performance + keyword research + crawl infrastructure + 5 fresh landing pages per month based on keyword research + competitor keywords',
        checked: true,
        weight: 899,
        monthly: true,
      },
      {
        name: 'Whastapp Marketing',
        price: '$129.99',
        description: '/month for 30 whastapp campaigns',
        checked: true,
        weight: 129.99,
        monthly: true,
      },
    ],
  },
];

const annually = [
  {
    freeServices: [
      {
        name: 'Website Development',
        description: '4 page basic website *',
        checked: true,

        weight: 0,
        fixed: true,
      },
      {
        name: 'Business Listings',
        description: 'Google Business Listing (GMB)',
        checked: true,
        weight: 0,
        monthly: true,
      },
      {
        name: 'Social Media (Posts)',
        description: '2 posts per month on Instagram, All Inclusive',
        checked: true,
        weight: 0,
        monthly: true,
      },
      {
        name: 'PPC Paid marketing',
        description: 'None',
        checked: false,
        checkable: false,
        weight: 0,
        variable: true,
      },
      {
        name: 'Social Media (Ads)',
        description: 'None',
        checked: false,
        checkable: false,
        weight: 0,
        variable: true,
      },
      {
        name: 'Email Marketing',
        description: '2 email campaigns per month',
        checked: true,
        weight: 0,
        monthly: true,
      },
      {
        name: 'SEO Services',
        description: 'None',
        checked: false,
        checkable: false,
        weight: 0,
        monthly: true,
      },
      {
        name: 'Whastapp Marketing',
        description: '2 whatsapp campaigns per month',
        checked: false,
        checkable: false,
        weight: 0,
        monthly: true,
      },
    ],
  },
  {
    basicServices: [
      {
        name: 'Website Development',
        price: '$699',
        description: 'for a 10 page static website',
        checked: true,
        weight: 699,
        fixed: true,
      },
      {
        name: 'Business Listings',
        price: '$15.99',
        description: '/month - Google Business Listing, Apple Maps, Bing Maps',
        checked: true,
        weight: 15.99,
        monthly: true,
      },
      {
        name: 'Social Media (Posts)',
        price: '$49',
        description: '/month for 10 posts - Instagram, Facebook and Linkedin',
        checked: true,
        weight: 49,
        monthly: true,
      },
      {
        name: 'PPC Paid marketing',
        description: '18% of monthly  spend of upto $5000',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Social Media (Ads)',
        description: '18% of monthly  spend of upto $5000',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Email Marketing',
        price: '$25.99',
        description:
          '/month 2000 emails per month + 5 custom email designs + content',
        checked: true,
        weight: 25.99,
        monthly: true,
      },
      { name: 'SEO Services', description: 'None', checked: true, weight: 0 },
      {
        name: 'Whastapp Marketing',
        price: '$26.99',
        description: '/month for 5 whatsapp marketing campaigns',
        checked: true,
        weight: 26.99,
        monthly: true,
      },
    ],
  },
  {
    growthServices: [
      {
        name: 'Website Development',
        price: '$1999',
        description:
          'for basic ecommerce website or static website with 15 pages',
        checked: true,
        weight: 1999,
        fixed: true,
      },
      {
        name: 'Business Listings',
        price: '$25.99',
        description: '/month - 2 locations - 10 listings',
        checked: true,
        weight: 25.99,
        monthly: true,
      },
      {
        name: 'Social Media (Posts)',
        price: '$79',
        description: '/month for design content and post 20 posts per month ',
        checked: true,
        weight: 79,
        monthly: true,
      },
      {
        name: 'PPC Paid marketing',
        description: '14% of monthly spend between  $5000-$10000',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Social Media (Ads)',
        description: '14% of monthly spend between  $5000-$10000',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Email Marketing',
        price: '$45.99',
        description: '/month for 15 email campaigns',
        checked: true,
        weight: 45.99,
        monthly: true,
      },
      {
        name: 'SEO Services',
        price: '$399',
        description:
          '/month - Monthly perfomance and keyword Audit, 2 fresh landing pages / mo. with keyword research linked content',
        checked: true,
        weight: 399,
        monthly: true,
      },
      {
        name: 'Whastapp Marketing',
        price: '$45.99',
        description: 'month for 10 whatsapp campaigns',
        checked: true,
        weight: 45.99,
        monthly: true,
      },
    ],
  },
  {
    fastServices: [
      {
        name: 'Website Development',
        description: 'Custom - Lets Chat',
        checked: true,
        weight: 0,
      },
      {
        name: 'Business Listings',
        price: '$49.99',
        description: '/month - upto 10 locations, 10 listings ',
        checked: true,
        weight: 49.99,
        monthly: true,
      },
      {
        name: 'Social Media (Posts)',
        price: '$199',
        description:
          '/month for 40 posts - Instagram, Facebook, Linkedin, Tiktok',
        checked: true,
        weight: 199,
        monthly: true,
      },
      {
        name: 'PPC Paid marketing',
        description: '12% of monthly spend greater than $10,000 per month',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Social Media (Ads)',
        description: '12% of monthly spend greater than $10,000 per month',
        checked: true,
        weight: 0,
        variable: true,
      },
      {
        name: 'Email Marketing',
        price: '$129.99',
        description: '/month For 30 email campaigns',
        checked: true,
        weight: 129.99,
        monthly: true,
      },
      {
        name: 'SEO Services',
        price: '$899',
        description:
          '/month - Monthly Audit + performance + keyword research + crawl infrastructure + 5 fresh landing pages per month based on keyword research + competitor keywords',
        checked: true,
        weight: 899,
        monthly: true,
      },
      {
        name: 'Whastapp Marketing',
        price: '$129.99',
        description: '/month for 30 whastapp campaigns',
        checked: true,
        weight: 79.99,
        monthly: true,
      },
    ],
  },
];
