import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function VOILogisticsProjectPage() {
  return (
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">VOI Logistics</h1>
              <p className="text-xl text-gray-600">Staff Engineer</p>
            </div>

            <div className="prose prose-lg prose-gray max-w-none">
              <div className="bg-gray-50 border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-medium mb-2 mt-0">Project Overview</h3>
                <p className="m-0">
                  Led the development and management of software and product functions for a team of four engineers, 
                  establishing technical excellence and driving innovation in logistics automation through serverless architecture 
                  and event-driven design.
                </p>
              </div>

              <h2>The Challenge</h2>
              <p>
                VOI Logistics needed a robust, scalable platform to manage complex logistics operations while maintaining 
                high performance and reliability. The challenge was to build a system that could handle real-time tracking, 
                automated routing, and seamless integration with various external services while ensuring the platform could 
                scale efficiently with growing business needs.
              </p>

              <h2>My Role</h2>
              <p>As Staff Engineer, I was responsible for:</p>
              <ul>
                <li>Leading and mentoring a team of four engineers, setting technical direction and best practices</li>
                <li>Architecting and implementing a serverless infrastructure on AWS using Infrastructure as Code</li>
                <li>Designing and building an event-driven architecture for real-time logistics operations</li>
                <li>Managing a network of bots and external agents for automated logistics coordination</li>
                <li>Establishing engineering standards and processes for code quality and system reliability</li>
                <li>Driving the product roadmap and strategy using agile/scrum methodologies</li>
              </ul>

              <h2>Technical Architecture</h2>
              <p>
                I architected a modern, scalable solution using serverless technologies and event-driven architecture. 
                Key technical components included:
              </p>
              <ul>
                <li>Serverless Framework on AWS for scalable, cost-effective infrastructure</li>
                <li>Event-driven architecture using AWS EventBridge and SQS for reliable message processing</li>
                <li>DynamoDB for high-performance, scalable data storage</li>
                <li>React and Next.js for the frontend, ensuring optimal user experience</li>
                <li>PostgreSQL for complex data relationships and reporting</li>
                <li>Docker for consistent development and deployment environments</li>
              </ul>

              <h2>Engineering Excellence</h2>
              <p>
                I established a culture of technical excellence by implementing:
              </p>
              <ul>
                <li>Comprehensive CI/CD pipelines using GitHub Actions</li>
                <li>Automated testing and quality assurance processes</li>
                <li>Code review standards and pair programming practices</li>
                <li>Infrastructure as Code using AWS CloudFormation</li>
                <li>Monitoring and observability best practices</li>
              </ul>

              <h2>Team Leadership</h2>
              <p>
                As a technical leader, I focused on:
              </p>
              <ul>
                <li>Mentoring team members and fostering professional growth</li>
                <li>Establishing clear technical standards and best practices</li>
                <li>Implementing agile methodologies for efficient project delivery</li>
                <li>Creating a collaborative environment that encouraged innovation</li>
                <li>Leading technical discussions and architecture reviews</li>
              </ul>

              <h2>Business Impact</h2>
              <p>
                The platform delivered significant business value through:
              </p>
              <ul>
                <li>Improved operational efficiency through automation</li>
                <li>Enhanced scalability to handle growing business needs</li>
                <li>Reduced infrastructure costs through serverless architecture</li>
                <li>Increased system reliability and performance</li>
                <li>Better team productivity through improved development processes</li>
              </ul>

              <div className="bg-gray-50 border rounded-lg p-6 mt-8">
                <h3 className="text-lg font-medium mb-2 mt-0">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">AWS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Serverless</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">DynamoDB</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Docker</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">CI/CD</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Event-Driven</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Team Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
} 