export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-600">Last updated: December 1, 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you create an account, 
              make a purchase, or communicate with us. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and email address</li>
              <li>Payment information (processed securely by Stripe/PayPal)</li>
              <li>Course progress and completion data</li>
              <li>Communications with our support team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processors (Stripe, PayPal) to process transactions</li>
              <li>Email service providers to send course-related communications</li>
              <li>Analytics providers to understand how our service is used</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our 
              service and hold certain information. You can instruct your browser to refuse 
              all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure, and we 
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>Email: nnafeesaha@gmail.com</li>
              <li>WhatsApp: +91 8294523068</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <a href="/" className="text-primary hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}