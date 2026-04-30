import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Services & Pricing', href: getPermalink('/services') },
    { text: 'About Us', href: getPermalink('/about') },
    { text: 'Gallery', href: getPermalink('/gallery') },
    { text: 'Contact', href: getPermalink('/contact') },
    { text: 'Pay', href: '/#pay' },
  ],
  actions: [{ text: 'Book Now', href: '/#booking' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Lawn Mowing — $40', href: getPermalink('/services') },
        { text: 'Mulching', href: getPermalink('/services') },
        { text: 'Window Washing', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Gallery', href: getPermalink('/gallery') },
        { text: 'Contact Us', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Book & Pay',
      links: [
        { text: 'Book Appointment', href: '/#booking' },
        { text: 'Chat With Us', href: '/#chat' },
        { text: 'Pay via Venmo', href: '/#pay' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms of Service', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="text-sm">&copy; ${new Date().getFullYear()} WW Lawncare &amp; Services. All rights reserved. &nbsp;·&nbsp; Precision Meets Nature.</span>
  `,
};
