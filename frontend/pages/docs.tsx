import PageTemplate from '../components/PageTemplate'
import Link from 'next/link'

export default function Docs() {
  return (
    <PageTemplate title="Documentation">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <ul className="space-y-2">
              <li><Link href="/docs/quickstart" className="text-primary-600 hover:text-primary-800">Quickstart Guide</Link></li>
              <li><Link href="/docs/installation" className="text-primary-600 hover:text-primary-800">Installation</Link></li>
              <li><Link href="/docs/authentication" className="text-primary-600 hover:text-primary-800">Authentication</Link></li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
            <ul className="space-y-2">
              <li><Link href="/docs/api/endpoints" className="text-primary-600 hover:text-primary-800">API Endpoints</Link></li>
              <li><Link href="/docs/api/models" className="text-primary-600 hover:text-primary-800">Available Models</Link></li>
              <li><Link href="/docs/api/errors" className="text-primary-600 hover:text-primary-800">Error Handling</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}