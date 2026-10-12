import { createPageMetadata } from '@/lib/metadata';
import ServiceDetail from '@/app/components/services/ServiceDetail';

export const metadata = createPageMetadata({
  title: 'Business Systems & Integrations | AZYNAR',
  description: 'Explore internal tools, workflow improvements, and integrations that connect websites and business tools around practical operational needs.',
  path: '/services/business-systems-integrations',
});

export default function BusinessSystemsPage() {
  return (
    <ServiceDetail
      eyebrow="Business Systems & Integrations"
      title="Connect the tools and workflows your business relies on"
      introduction="Useful systems should reduce friction rather than add complexity. I help assess practical internal tools or integrations connecting websites, forms, APIs, email platforms, databases, and existing business applications where supported."
      suitableFor={[
        'Enquiries arrive through channels that are difficult to track or hand off.',
        'Staff repeatedly move the same information between tools.',
        'A team needs an internal interface or report for a defined operational task.',
        'Existing software exposes an API that could support a useful, agreed workflow.',
      ]}
      deliverables={[
        'Structured lead and enquiry handoff',
        'Form submissions routed to email or an approved workspace',
        'Internal tools for staff or teams',
        'Reporting interfaces and operational dashboards',
        'API and third-party service integrations',
        'Workflow automation for repetitive data entry',
      ]}
      considerations={[
        'API access, platform limits, permissions, data protection, reliability, and ongoing fees must be checked before confirming an integration.',
        'The source of truth, failure handling, staff access, and who owns the connected accounts should be agreed.',
        'A marketing website for an industry does not imply that production-critical tracking, fleet management, or operational software is included.',
      ]}
      faqs={[
        {
          question: 'Can you connect the tools we already use?',
          answer: 'Possibly. First we confirm the platforms, account permissions, available APIs or integration options, data involved, reliability needs, and any recurring fees.',
        },
        {
          question: 'Is automation always better than a manual process?',
          answer: 'No. Automation is useful when a process is stable and repetitive enough to justify the setup and ongoing maintenance. We should understand the workflow and failure cases before deciding.',
        },
        {
          question: 'Can I start with a simple form-to-email workflow?',
          answer: 'Yes. A website form routed to an agreed inbox or workspace may be a more practical first step than a custom system. Storage, access, notifications, and third-party fees should be clear.',
        },
      ]}
      whatsappMessage="Hi AZYNAR, I would like to discuss a business workflow or integration. The tools/process involved are: "
      relatedServices={[
        { label: 'Business websites', href: '/services/websites-digital-experiences' },
        { label: 'Web applications', href: '/services/web-applications' },
      ]}
    />
  );
}
