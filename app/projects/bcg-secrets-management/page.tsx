import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BCGSecretsManagementProjectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
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
              className="h-6 w-6"
            >
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
            <span className="font-bold text-xl">Digital Dash</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/#expertise" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Expertise
            </Link>
            <Link href="/projects" className="text-sm font-medium text-gray-900 transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">BCG Secrets Management Platform</h1>
                <p className="text-xl text-gray-600">DevOps Consultant</p>
              </div>

              <div className="prose prose-lg prose-gray max-w-none">
                <div className="bg-gray-50 border rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-medium mb-2 mt-0">Project Overview</h3>
                  <p className="m-0">
                    Developed and implemented a solution for migrating BCG's secrets management to HashiCorp
                    Vault using Terraform for infrastructure management.
                  </p>
                </div>

                <h2>The Challenge</h2>
                <p>
                  Boston Consulting Group (BCG) needed to modernize their approach to secrets management across their
                  organization. They required a secure, scalable solution that could be easily adopted by teams with
                  varying levels of technical expertise.
                </p>

                <h2>My Role</h2>
                <p>As a DevOps Consultant, I collaborated with BCG on a 6-month project to:</p>
                <ul>
                  <li>Develop a reproducible solution for migrating to HashiCorp Vault</li>
                  <li>Implement infrastructure management using Terraform</li>
                  <li>Create an adoption strategy focused on ease of use</li>
                  <li>Design a solution that could be replicated across teams</li>
                </ul>

                <h2>Technical Approach</h2>
                <p>
                  The project leveraged HashiCorp Vault for secrets management and Terraform for infrastructure as code.
                  Key technical components included:
                </p>
                <ul>
                  <li>HashiCorp Vault configuration and deployment</li>
                  <li>Terraform modules for infrastructure management</li>
                  <li>Integration with existing authentication systems</li>
                  <li>Automated secret rotation and management</li>
                </ul>

                <h2>Adoption Strategy</h2>
                <p>
                  A primary focus of my work was making it as easy as possible for teams to adopt the new secrets
                  management solution. This involved:
                </p>
                <ul>
                  <li>Creating clear documentation and examples</li>
                  <li>Developing reusable Terraform modules</li>
                  <li>Building self-service tooling for teams</li>
                  <li>Designing with a focus on minimal disruption</li>
                </ul>

                <h2>Infrastructure as Code</h2>
                <p>
                  By adopting an Infrastructure as Code approach with Terraform, I ensured that the PoC could be
                  seamlessly replicated across teams, aligning with best practices and enabling efficient adoption. This
                  approach provided consistency, version control, and auditability for the infrastructure.
                </p>

                <h2>Business Impact</h2>
                <p>The secrets management solution provided BCG with:</p>
                <ul>
                  <li>Enhanced security for sensitive credentials and secrets</li>
                  <li>Improved compliance with regulatory requirements</li>
                  <li>Reduced operational overhead through automation</li>
                  <li>A scalable platform that could grow with their needs</li>
                </ul>

                <div className="bg-gray-50 border rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-medium mb-2 mt-0">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">HashiCorp Vault</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Terraform</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      Infrastructure as Code
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">DevOps</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Security</span>
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
