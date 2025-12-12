import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to deploy an automation?',
    answer: 'Most automations are deployed within 1-2 weeks, depending on complexity. Simple workflows can be live in just a few days, while custom AI agents may take 3-4 weeks for full implementation and testing.',
  },
  {
    question: 'What tools and platforms do you integrate with?',
    answer: 'We work with all major platforms including n8n, Make (Integromat), Zapier, and custom APIs. We integrate with CRMs (HubSpot, Salesforce), communication tools (Slack, WhatsApp, Email), and virtually any system with an API.',
  },
  {
    question: 'Do I need technical knowledge to use the automations?',
    answer: 'No technical knowledge required. We handle all the technical setup and provide training. Our automations run in the background, and we provide simple dashboards for monitoring and basic adjustments.',
  },
  {
    question: 'What happens if something breaks?',
    answer: 'All our packages include support periods. We monitor critical automations and receive alerts for any issues. Our team responds quickly to fix problems, and we build redundancy into mission-critical workflows.',
  },
  {
    question: 'Can automations be modified after deployment?',
    answer: 'Absolutely. Business needs evolve, and so should your automations. We offer optimization services and can modify existing workflows. Growth and Custom packages include ongoing adjustments.',
  },
  {
    question: 'How do you measure ROI on automations?',
    answer: 'We track key metrics like time saved, error reduction, and throughput increases. Before deployment, we establish baselines and provide regular reports showing the tangible impact of each automation.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-graphite mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-soft-indigo">
            Everything you need to know about our automation services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl border border-light-slate overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-light-slate/30 transition-colors"
              >
                <span className="font-semibold text-graphite pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  size={20} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-soft-indigo">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
