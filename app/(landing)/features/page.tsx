import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, BarChart, Code, Monitor, Shield, Clock, Users, Globe } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-full flex flex-col items-center">
        <section id="api" className="w-full flex flex-col items-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">API Features</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Server className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Robust RESTful API</CardTitle>
                </CardHeader>
                <CardContent>
                  Integrate our comprehensive API seamlessly into your existing systems for efficient financial management.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Extensive Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  Access detailed API documentation with examples and SDKs for popular programming languages.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Real-time Data Sync</CardTitle>
                </CardHeader>
                <CardContent>
                  Keep your financial data up-to-date with real-time synchronization between your systems and Acounter.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="webapp" className="w-full flex flex-col items-center py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Web App Features</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Monitor className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Intuitive Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  Get a comprehensive overview of your financial status with our user-friendly and customizable dashboard.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Advanced Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  Generate detailed financial reports with just a few clicks, including balance sheets, income statements, and cash flow statements.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Multi-user Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  Work together seamlessly with your team using role-based access control and real-time collaboration features.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="security" className="w-full flex flex-col items-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Security Features</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Bank-level Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  Protect your financial data with state-of-the-art encryption both in transit and at rest.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Two-factor Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  Add an extra layer of security to your account with our robust two-factor authentication system.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Compliance Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  Stay compliant with GDPR, CCPA, and other financial regulations with our built-in compliance tools.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Financial Management?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of businesses that have revolutionized their accounting processes with Acounter.
              </p>
              <Button size="lg" asChild>
                <Link href="/">Get Started Now</Link>
              </Button>
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

