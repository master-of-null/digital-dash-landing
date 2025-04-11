import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AeroTrackProjectPage() {
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">AeroTrack Commercial Airplane Engine MRO</h1>
                <p className="text-xl text-gray-600">Hands-On CTO & Lead Architect</p>
              </div>

              <div className="prose prose-lg prose-gray max-w-none">
                <div className="bg-gray-50 border rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-medium mb-2 mt-0">Project Overview</h3>
                  <p className="m-0">
                    Custom ERP system for a commercial airplane engine MRO (Maintenance, Repair, and Overhaul) shop that
                    tracks engine repairs, parts routing, inventory, and requisitions.
                  </p>
                </div>

                <h2>The Challenge</h2>
                <p>
                Commercial aircraft engine maintenance demands precise coordination across multiple domains. I led the implementation of a custom MRO ERP system that seamlessly integrated finance, procurement, inventory management, production planning, maintenance execution, and regulatory compliance workflows. This solution empowered technicians with shop-floor accessibility while providing management with real-time business intelligence across the entire maintenance lifecycle. The system optimized parts tracking, documentation control, and FAA/EASA compliance reporting, ultimately reducing turnaround times and enhancing operational efficiency for this critical aerospace maintenance operation.
                </p>

                <h2>My Role</h2>
                <p>As hands-on CTO and lead architect, I was responsible for:</p>
                <ul>
                  <li>Designing and implementing the entire platform from the ground up</li>
                  <li>All data modeling and system architecture decisions</li>
                  <li>Translating complex business requirements into simple, user-friendly solutions</li>
                  <li>Collaborating directly with management and technicians to ensure the system met their needs</li>
                </ul>

                <h2>Technical Approach</h2>
                <p>
                  I chose Ruby on Rails for this project due to its simplicity and excellent alignment with the business
                  domain. The system was designed to be practical and maintainable, focusing on delivering immediate
                  business value rather than unnecessary complexity.
                </p>
                <p>Key technical components included:</p>
                <ul>
                  <li>Comprehensive data model for tracking engine components through the repair process</li>
                  <li>Inventory management system with requisition workflows</li>
                  <li>Parts routing and tracking throughout the facility</li>
                  <li>Reporting tools for management oversight and compliance</li>
                </ul>

                <h2>Business Value Delivered</h2>
                <p>The system delivered significant business value by:</p>
                <ul>
                  <li>Streamlining operations and improving efficiency</li>
                  <li>Reducing turnaround times for engine repairs</li>
                  <li>Providing better operational visibility for management</li>
                  <li>Ensuring compliance with aviation regulations</li>
                  <li>Minimizing parts loss and improving inventory management</li>
                </ul>

                <h2>Development Philosophy</h2>
                <p>
                  Throughout the project, my focus was on delivering business value by building only what was needed,
                  iterating quickly based on feedback, and ensuring technology aligned with the business goals. This
                  pragmatic approach resulted in a system that was immediately useful rather than theoretically perfect.
                </p>

                <div className="bg-gray-50 border rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-medium mb-2 mt-0">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Ruby on Rails</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">PostgreSQL</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">JavaScript</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">HTML/CSS</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Heroku</span>
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
