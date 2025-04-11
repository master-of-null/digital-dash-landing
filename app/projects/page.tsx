import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ProjectsPage() {
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
        <section className="py-12 md:py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to home
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h1>
              <p className="text-xl text-gray-600 mb-12">
                A selection of significant projects I've led through Digital Dash over the past 9 years.
              </p>

              <div className="space-y-12">
                {/* AeroTrack Project */}
                <div className="group">
                  <Link
                    href="/projects/aerotrack"
                    className="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold group-hover:text-gray-700">
                          AeroTrack Commercial Airplane Engine MRO
                        </h2>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                      </div>
                      <p className="text-gray-500 mb-2">Hands-On CTO & Lead Architect</p>
                      <p className="text-gray-600 mb-4">
                        Custom ERP system for a commercial airplane engine MRO shop that tracks engine repairs, parts
                        routing, inventory, and requisitions.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Ruby on Rails</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">ERP</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          System Architecture
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Atmos Financial Project */}
                <div className="group">
                  <Link
                    href="/projects/atmos-financial"
                    className="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold group-hover:text-gray-700">Atmos Financial</h2>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                      </div>
                      <p className="text-gray-500 mb-2">Technical Lead</p>
                      <p className="text-gray-600 mb-4">
                        Led the rollout of commercial deposits product and managed integrations with third-party
                        providers to streamline data workflows.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Node.js</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">React</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Elasticsearch</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Fintech</span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* New Fortress Energy Project */}
                <div className="group">
                  <Link
                    href="/projects/new-fortress-energy"
                    className="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold group-hover:text-gray-700">New Fortress Energy</h2>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                      </div>
                      <p className="text-gray-500 mb-2">Data Engineering Consultant</p>
                      <p className="text-gray-600 mb-4">
                        Modernized data management approach by wrangling data from a legacy energy trading system and
                        training the team on serverless technologies.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          Data Engineering
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Terraform</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Serverless</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Analytics</span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* BCG Project */}
                <div className="group">
                  <Link
                    href="/projects/bcg-secrets-management"
                    className="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold group-hover:text-gray-700">
                          BCG Secrets Management Platform
                        </h2>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                      </div>
                      <p className="text-gray-500 mb-2">DevOps Consultant</p>
                      <p className="text-gray-600 mb-4">
                        Developed and implemented a solution for migrating BCG's secrets management to HashiCorp
                        Vault using Terraform for infrastructure management.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          HashiCorp Vault
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Terraform</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">IaC</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">DevOps</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
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
