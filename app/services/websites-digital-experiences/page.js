import { createPageMetadata } from '@/lib/metadata';
import ServiceDetail from '@/app/components/services/ServiceDetail';

export const metadata = createPageMetadata({
  title: 'Website Development | AZYNAR',
  description: 'Build a responsive business or marketing website that presents your offer clearly, supports credibility, and guides visitors toward the next step.',
  path: '/services/websites-digital-experiences',
});

export default function WebsitesPage() {
  return (
    <ServiceDetail
      eyebrow="Websites & Digital Experiences"
      title="Websites designed around a clear purpose"
      introduction="I build responsive business, corporate, service-company, and marketing websites that organize information, communicate your offer clearly, and help visitors understand what to do next."
      suitableFor={[
        'Your business needs a credible place to explain its services beyond social profiles.',
        'Potential customers struggle to find useful information or the right contact route.',
        'Your team needs a clear destination for campaign or referral traffic.',
        'You need a portfolio, company website, landing page, or product catalogue.',
      ]}
      deliverables={[
        'Homepage and service pages',
        'About, contact, and supporting pages',
        'Responsive layouts and clear navigation',
        'Contact form, email, or WhatsApp enquiry path',
        'Basic on-page SEO and social metadata',
        'Accessibility and performance checks',
        'Deployment and agreed handover',
      ]}
      considerations={[
        'Final page count, copy, content entry, integrations, and revisions are confirmed in the proposal.',
        'Domain registration, paid hosting, email hosting, premium assets, and ongoing maintenance are not automatically included.',
        'If customers need accounts, transactions, or operational dashboards, a web application may be a better fit than a marketing website.',
      ]}
      faqs={[
        {
          question: 'Can you help me decide what pages my website needs?',
          answer: 'Yes. We can start with your audience, offer, and the information visitors need to make a decision. The page structure is agreed before development begins.',
        },
        {
          question: 'Can I collect enquiries through the website?',
          answer: 'A contact form, email link, or WhatsApp path can be included when agreed. The submission destination, access, notifications, and any third-party costs should be confirmed as part of scope.',
        },
        {
          question: 'Do you also build online stores?',
          answer: 'Yes. E-commerce is available, but catalogue, checkout, payment provider, fulfilment, inventory, and product-management needs are scoped separately. See the e-commerce service page for details.',
        },
      ]}
      whatsappMessage="Hi AZYNAR, I would like to discuss a business or marketing website. My business/project is: "
      relatedServices={[
        { label: 'E-commerce websites', href: '/services/ecommerce-websites' },
        { label: 'Web applications', href: '/services/web-applications' },
      ]}
    />
  );
}
