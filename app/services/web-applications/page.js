import { createPageMetadata } from '@/lib/metadata';
import ServiceDetail from '@/app/components/services/ServiceDetail';

export const metadata = createPageMetadata({
  title: 'Custom Web Application Development | AZYNAR',
  description: 'Discuss a scoped web application, customer portal, dashboard, booking tool, or MVP built around actual user and business requirements.',
  path: '/services/web-applications',
});

export default function WebApplicationsPage() {
  return (
    <ServiceDetail
      eyebrow="Web Applications & Custom Software"
      title="Web applications built around real requirements"
      introduction="When a public website is not enough, a web application can support more involved interactions for customers or staff. The right approach starts with user roles, data, permissions, integrations, and the operational risk of getting things wrong."
      suitableFor={[
        'Customers, partners, or staff need to sign in and complete tasks.',
        'A team needs a dashboard to manage information or a defined workflow.',
        'A booking or reservation process has rules that a simple contact form cannot handle.',
        'A founder wants to validate a scoped product idea with a prototype or MVP.',
      ]}
      deliverables={[
        'Customer or partner portals',
        'Admin dashboards and internal interfaces',
        'Booking or reservation workflows',
        'Inventory, order, or shipment-management tools',
        'MVPs and proof-of-concept products',
        'Data models, integrations, and user permissions',
      ]}
      considerations={[
        'A prototype or demo is not automatically production-ready; its status and limitations should be explicit.',
        'Accounts, sensitive data, payments, permissions, audit trails, backups, uptime, and monitoring can materially change the architecture and delivery scope.',
        'Complex or high-risk requirements may need specialist review, a larger team, or phased delivery before implementation.',
      ]}
      faqs={[
        {
          question: 'How do I know if I need an app instead of a website?',
          answer: 'A website is usually for explaining your offer and helping visitors take a public next step. An application is more appropriate when users need accounts, saved data, role-specific access, or repeated operational workflows.',
        },
        {
          question: 'Can you build a prototype first?',
          answer: 'A prototype or MVP can be scoped to test a focused user problem. The deliverable should be clearly identified as a prototype unless production-level reliability, security, and operations are also included.',
        },
        {
          question: 'Can you take on a complex production system?',
          answer: 'That depends on risk, requirements, and delivery capacity. Systems handling sensitive data, payments, or critical operations need appropriate security, testing, monitoring, and maintenance planning; some projects may require a larger team.',
        },
      ]}
      whatsappMessage="Hi AZYNAR, I would like to discuss a web application or custom software project. Users and main task: "
      relatedServices={[
        { label: 'Business websites', href: '/services/websites-digital-experiences' },
        { label: 'Business systems and integrations', href: '/services/business-systems-integrations' },
      ]}
    />
  );
}
