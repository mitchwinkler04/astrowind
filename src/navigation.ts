import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Services & Pricing', href: '/#services' },
    { text: 'Book Appointment', href: '/#booking' },
    { text: 'Chat With Us', href: '/#chat' },
    { text: 'Pay', href: '/#pay' },
  ],
  actions: [{ text: 'Book Now', href: '/#booking' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Lawn Mowing — $40', href: '/#services' },
        { text: 'Mulching', href: '/#services' },
        { text: 'Window Washing', href: '/#services' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Book Appointment', href: '/#booking' },
        { text: 'Chat With Us', href: '/#chat' },
        { text: 'Pay Your Bill', href: '/#pay' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  ],
  footNote: `
    <span class="text-sm">&copy; ${new Date().getFullYear()} WW Lawncare &amp; Services. All rights reserved.</span>
  `,
};
