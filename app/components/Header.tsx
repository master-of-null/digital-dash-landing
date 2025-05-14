import { Terminal } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Terminal className="h-6 w-6" />
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
  )
} 