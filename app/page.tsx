import { ArrowRight, Code, Database, Github, Linkedin, Mail, Server, Terminal } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6" />
            <span className="font-bold text-xl">Digital Dash</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="#expertise" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Expertise
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Product-minded software engineering solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Digital Dash is a software consultancy led by Gabriel Martinez, specializing in architecting and
                implementing scalable, secure enterprise applications with 9+ years of experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800"
                >
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50"
                >
                  View projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">About</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  I'm Gabriel Martinez, a product-minded software engineer with over 9 years of experience architecting
                  and implementing scalable, secure enterprise applications. Through Digital Dash, my consultancy
                  established in 2015, I've led technical initiatives across diverse domains including fintech,
                  logistics, and data engineering.
                </p>
                <p>
                  I have a strong record of technical leadership, mentoring engineering teams, and driving adoption of
                  best practices. I'm proficient in designing cloud-native architectures with emphasis on security,
                  performance, and reliability.
                </p>
                <p>
                  Currently pursuing an M.S. in Computer Science focused on Machine Learning at Georgia Institute of
                  Technology to enhance my data-driven solution capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-16 md:py-24 border-b bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Expertise</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="h-5 w-5 text-gray-700" />
                    <h3 className="font-semibold text-lg">System Architecture</h3>
                  </div>
                  <p className="text-gray-600">
                    Microservices, Event-Driven, Serverless, Cloud-Native architectures with focus on scalability and
                    maintainability.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="h-5 w-5 text-gray-700" />
                    <h3 className="font-semibold text-lg">Programming</h3>
                  </div>
                  <p className="text-gray-600">
                    Node.js, Python, Java, Ruby, JavaScript/TypeScript, React with emphasis on clean, maintainable code.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-5 w-5 text-gray-700" />
                    <h3 className="font-semibold text-lg">Data Engineering</h3>
                  </div>
                  <p className="text-gray-600">
                    ETL pipelines, data modeling, analytics dashboards, and data-driven decision making systems.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center gap-3 mb-4">
                    <svg
                      className="h-5 w-5 text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                    <h3 className="font-semibold text-lg">Security Implementation</h3>
                  </div>
                  <p className="text-gray-600">
                    Secret management, secure API design, compliance frameworks, and security best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <Link
                  href="/projects"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center"
                >
                  View all projects
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-8">
                <div className="group">
                  <Link
                    href="/projects/aerotrack"
                    className="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold group-hover:text-gray-700">
                          AeroTrack Commercial Airplane Engine MRO
                        </h3>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                      </div>
                      <p className="text-gray-500 mb-2">Hands-On CTO & Lead Architect</p>
                      <p className="text-gray-600">
                        Custom ERP system for a commercial airplane engine MRO shop that tracks engine repairs, parts
                        routing, inventory, and requisitions.
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="group">
                  <Link
                    href="/projects/atmos-financial"
                    className="block border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold group-hover:text-gray-700">Atmos Financial</h3>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                      </div>
                      <p className="text-gray-500 mb-2">Technical Lead</p>
                      <p className="text-gray-600">
                        Led the rollout of commercial deposits product and managed integrations with third-party
                        providers to streamline data workflows.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Interested in working together? I'm currently available for new consulting opportunities.
              </p>
              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:gabriel@digital-dash.co"
                  className="inline-flex items-center text-gray-700 hover:text-gray-900"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  gabriel@digital-dash.co
                </a>
                <a
                  href="https://linkedin.com/in/gabmart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 hover:text-gray-900"
                >
                  <Linkedin className="h-5 w-5 mr-3" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/master-of-null"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 hover:text-gray-900"
                >
                  <Github className="h-5 w-5 mr-3" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5" />
              <span className="font-medium">Digital Dash</span>
            </div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Digital Dash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
