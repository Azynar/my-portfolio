import { createPageMetadata } from '@/lib/metadata';
import ServiceDetail from '@/app/components/services/ServiceDetail';

export const metadata = createPageMetadata({
  title: 'E-commerce Website Development | AZYNAR',
  description: 'Plan an online store or product catalogue around your products, customer journey, payment needs, and fulfilment process.',
  path: '/services/ecommerce-websites',
});

export default function EcommercePage() {
  return (
    <ServiceDetail
      eyebrow="E-commerce Websites"
      title="An online store built around how you sell"
      introduction="An e-commerce project is more than a product grid. I help scope an online store or product catalogue around your products, customer journey, payment options, fulfilment process, and the people who will manage it."
      suitableFor={[
        'You want customers to browse products and place orders online.',
        'Your product catalogue needs clearer categories, product details, and buying information.',
        'You need to assess payment, delivery, and order-handling options before choosing a platform.',
        'Your team wants an agreed way to update product content after launch.',
      ]}
      deliverables={[
        'Product catalogue and category pages',
        'Product detail pages and responsive layouts',
        'Cart and checkout using a supported approach',
        'Payment-provider integration, subject to availability and fees',
        'Order notifications and agreed order workflows',
        'Product content-management approach',
        'Testing, deployment, and handover',
      ]}
      considerations={[
        'Catalogue size, product variants, checkout behavior, payment provider, inventory, and fulfilment affect scope.',
        'Provider availability, transaction fees, compliance obligations, tax, refunds, and delivery operations must be checked for your market.',
        'Payment, inventory, shipping, administration, and refund features are only included when explicitly scoped, implemented, and tested.',
      ]}
      faqs={[
        {
          question: 'Can you recommend a payment provider?',
          answer: 'We can compare suitable supported providers after confirming your country, currencies, business requirements, and availability. Provider approval, fees, and compliance checks remain subject to the provider.',
        },
        {
          question: 'Will I be able to manage products and orders?',
          answer: 'That depends on the selected platform and agreed scope. Product editing, order management, inventory, and staff access should be decided before the proposal is finalized.',
        },
        {
          question: 'What do you need to estimate an online store?',
          answer: 'A starting product count, product variants, preferred payment methods, delivery or collection process, and who will maintain the catalogue are useful. If some details are unknown, we can identify them during discovery.',
        },
      ]}
      whatsappMessage="Hi AZYNAR, I would like to discuss an e-commerce website. Products and approximate catalogue size: "
      relatedServices={[
        { label: 'Business websites', href: '/services/websites-digital-experiences' },
        { label: 'Business systems and integrations', href: '/services/business-systems-integrations' },
      ]}
    />
  );
}
