import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DollarSign, Server, BarChart, Monitor, CheckCircle } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <DollarSign className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">Acounter</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#api">
            API
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Streamline Your Financial Accounting
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Acounter provides powerful API and intuitive web app solutions for managing your financial accounting. Simplify your processes and gain valuable insights.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">View Demo</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Server className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Robust API</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Integrate our powerful API into your existing systems for seamless financial management.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Monitor className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Intuitive Web App</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Manage your finances with our user-friendly web application, designed for efficiency.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <BarChart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Gain valuable insights with our comprehensive financial reporting and analytics tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="api" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful API Integration</h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                  Our robust API allows seamless integration with your existing systems, enabling automated financial processes and real-time data synchronization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>RESTful API with comprehensive documentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Secure authentication and data encryption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Scalable architecture to handle high-volume requests</span>
                  </li>
                </ul>
                <Button>Explore API Docs</Button>
              </div>
              <div className="lg:order-first">
                <Image
                  src="https://placehold.co/600x400"
                  alt="API Integration Diagram"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Intuitive Web Application</h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                  Our user-friendly web app provides a comprehensive suite of tools for managing your financial accounting, accessible from anywhere.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Easy-to-use dashboard with customizable widgets</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Real-time financial reporting and analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Collaborative tools for team accounting</span>
                  </li>
                </ul>
                <Button>Try Web App Demo</Button>
              </div>
              <div>
                <Image
                  src="https://placehold.co/600x400"
                  alt="Web App Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Flexible Pricing Plans</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Starter</h3>
                <p className="text-4xl font-bold text-center mb-4">$49<span className="text-sm font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Basic API access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Web app for up to 3 users</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Standard reports</span>
                  </li>
                </ul>
                <Button className="mt-auto">Choose Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-2 border-primary">
                <h3 className="text-2xl font-bold text-center mb-4">Professional</h3>
                <p className="text-4xl font-bold text-center mb-4">$99<span className="text-sm font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Advanced API access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Web app for up to 10 users</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Custom reports</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="mt-auto">Choose Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Enterprise</h3>
                <p className="text-4xl font-bold text-center mb-4">Custom</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Full API access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Unlimited web app users</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Button className="mt-auto">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of businesses that have revolutionized their accounting processes with Acounter.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Acounter Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            API Documentation
          </Link>
        </nav>
      </footer>
    </div>
  )
}

