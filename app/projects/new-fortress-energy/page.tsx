import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NewFortressEnergyProjectPage() {
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">New Fortress Energy</h1>
                <p className="text-xl text-gray-600">Data Engineering Consultant</p>
              </div>

              <div className="prose prose-lg prose-gray max-w-none">
                <div className="bg-gray-50 border rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-medium mb-2 mt-0">Project Overview</h3>
                  <p className="m-0">
                    Helped modernize data management approach by wrangling data from a legacy energy trading system and
                    training the team on serverless technologies and Infrastructure as Code.
                  </p>
                </div>

                <h2>The Challenge</h2>
                <p>
                  New Fortress Energy was dealing with complex datasets from a legacy energy trading system. They needed
                  to modernize their approach to data management and extract actionable insights to support executive
                  decision-making.
                </p>

                <h2>My Role</h2>
                <p>As a Data Engineering Consultant, I was responsible for:</p>
                <ul>
                  <li>Wrangling data from a legacy energy trading system</li>
                  <li>Training the team on serverless technologies</li>
                  <li>Implementing Infrastructure as Code with Terraform</li>
                  <li>Developing visual analytics dashboards for C-suite reporting</li>
                </ul>

                <h2>Technical Approach</h2>
                <p>
                  The project focused on making sense of complex datasets and enabling the team to extract actionable
                  insights. Key technical components included:
                </p>
                <ul>
                  <li>Data extraction and transformation from legacy systems</li>
                  <li>Implementation of serverless data processing pipelines</li>
                  <li>Infrastructure as Code using Terraform for consistent deployments</li>
                  <li>Visual analytics dashboards for executive reporting</li>
                </ul>

                <h2>Data Insights</h2>
                <p>
                  A critical aspect of this project was developing visual analytics dashboards that provided clear,
                  impactful reporting for the C-suite. These dashboards helped drive data-informed decision-making at
                  the highest level of the organization.
                </p>

                <h2>Knowledge Transfer</h2>
                <p>
                  Beyond the technical implementation, I focused on training the team on serverless technologies and
                  Infrastructure as Code practices. This knowledge transfer was essential for ensuring the long-term
                  success of the data modernization initiative.
                </p>

                <h2>Business Impact</h2>
                <p>
                  The data engineering work enabled New Fortress Energy to make more informed decisions based on their
                  complex energy trading data. The visual dashboards provided executives with clear insights, while the
                  modernized infrastructure improved the reliability and scalability of their data processing
                  capabilities.
                </p>

                <div className="bg-gray-50 border rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-medium mb-2 mt-0">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Terraform</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">AWS Serverless</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Data Engineering</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      Analytics Dashboards
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">ETL Pipelines</span>
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
