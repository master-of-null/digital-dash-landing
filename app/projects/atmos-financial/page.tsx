import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AtmosFinancialProjectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <Link href="/projects" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to projects
                </Link>
              </div>

              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Atmos Financial</h1>
                <p className="text-xl text-gray-600">Technical Lead</p>
              </div>

              <div className="prose prose-lg prose-gray max-w-none">
                <div className="bg-gray-50 border rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-medium mb-2 mt-0">Project Overview</h3>
                  <p className="m-0">
                    Led the rollout of Atmos Financial's commercial deposits product and managed integrations with
                    third-party providers to streamline data workflows.
                  </p>
                </div>

                <h2>The Challenge</h2>
                <p>
                  Atmos Financial faced significant challenges in expanding from consumer-focused services to commercial banking. The project required building a robust platform that could handle complex commercial account structures, ensure compliance with strict financial regulations, maintain data integrity across multiple systems, and scale to support growing transaction volumes - all while maintaining the seamless user experience that differentiated Atmos in the market.
                </p>

                <p>
                  A significant technical challenge was the existing approach to critical financial operations like interest payments. These were being executed as manual, local batch processes by individual engineers - introducing significant risk of human error, payment discrepancies, and compliance issues. The system lacked proper monitoring, error recovery, and auditability needed for a regulated financial institution.
                </p>

                <h2>My Role</h2>
                <p>As Technical Lead, I was responsible for:</p>
                <ul>
                  <li>Leading the rollout of the commercial deposits product</li>
                  <li>Managing integrations with third-party providers</li>
                  <li>Designing, building, and maintaining a robust Elasticsearch cluster</li>
                  <li>Implementing Know Your Business (KYB) compliance processes</li>
                  <li>Contributing to the development of their commercial lending product</li>
                  <li>Restructuring the jobs and worker architecture</li>
                </ul>

                <h2>Technical Approach</h2>
                <p>
                  The project was built on a Node.js with React stack, where I collaborated with a small team of 3-4
                  engineers. Key technical components included:
                </p>
                <ul>
                  <li>Elasticsearch cluster for handling daily-balance and transaction data</li>
                  <li>Integration with Equifax for KYB compliance</li>
                  <li>Application process implementation for commercial banking</li>
                  <li>Scalable jobs and worker architecture</li>
                </ul>

                <h2>Job Architecture Transformation</h2>
                <p>
                  A major challenge I tackled was transforming Atmos Financial's critical financial processing jobs from error-prone manual processes to automated, reliable systems. When I joined, engineers were running long-running batch jobs locally on their machines - a practice that created significant operational risk.
                </p>

                <p>
                  Monthly interest payments were particularly problematic - executed as one massive job where failures required manual CSV tracking and complex reprocessing, leading to potential duplicate payments and accounting errors. I architected and implemented a complete overhaul of this system:
                </p>

                <ul>
                  <li>Designed and built a distributed job architecture that decomposed monolithic processes into individual, atomic operations</li>
                  <li>Implemented a scheduler that automatically initiated individual jobs for each account's interest payment</li>
                  <li>Created a rate-limited job queue system that prevented API throttling while maintaining processing efficiency</li>
                  <li>Engineered idempotency into every job, ensuring operations could be safely retried without duplicate payments</li>
                  <li>Built comprehensive monitoring, logging, and error handling to provide visibility into processing status</li>
                </ul>

                <p>
                  This transformation eliminated manual intervention, reduced payment processing errors to near-zero, and created a pattern that the engineering team adopted across multiple critical financial processes. The new architecture improved both reliability and auditability, crucial factors for a financial institution, while reducing operational risk.
                </p>

                <h2>Data Management</h2>
                <p>
                  A critical challenge was managing the exponential growth of financial transaction data while maintaining sub-second query performance. 
                  I designed and implemented a custom Elasticsearch solution with time-based indices and optimized mappings that efficiently scaled to 
                  handle over 1 million daily-balance and transaction records. This architecture reduced average query times from 3-5 seconds to under 200ms, 
                  enabling real-time financial analytics and reporting capabilities essential for reatil and commercial banking operations.
                </p>

                <h2>Compliance and Security</h2>
                <p>
                  Financial applications require strict adherence to regulatory requirements, with zero tolerance for compliance failures. 
                  I architected a robust solution that integrated with Equifax's commercial verification systems and implemented a comprehensive, 
                  automated Know Your Business (KYB) workflow. This system incorporated multi-layered verification checks, audit logging, and exception 
                  handling that achieved 100% compliance with federal banking regulations while reducing application processing time from days to hours.
                </p>

                <h2>Team Collaboration</h2>
                <p>
                  As Technical Lead, I established a collaborative engineering culture focused on quality and knowledge sharing. I implemented code review standards, 
                  pair programming sessions, and bi-weekly architecture discussions that accelerated the professional growth of team members. As Technical Lead, 
                  I established a collaborative engineering culture focused on quality and knowledge sharing. 
                  I implemented code review standards, pair programming sessions, and bi-weekly architecture discussions that accelerated 
                  the professional growth of team members. Under my leadership, we delivered all project milestones on schedule while maintaining code quality metrics 
                  above company standards. This collaborative approach ensured we built a robust, compliant product that exceeded Atmos Financial's business objectives 
                  and positioned them for successful expansion into the commercial banking sector.This collaborative approach ensured we built a robust, 
                  compliant product that exceeded Atmos Financial's business objectives and positioned them for successful expansion into the commercial banking sector.
                </p>

                <div className="bg-gray-50 border rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-medium mb-2 mt-0">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Elasticsearch</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">AWS</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">RESTful APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
              <span className="font-medium">Digital Dash</span>
            </div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Digital Dash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
