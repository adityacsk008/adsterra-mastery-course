export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-600">Last updated: December 1, 2025</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7-Day Money-Back Guarantee</h2>
            <p>
              We stand behind the quality of our course. If you're not completely satisfied 
              with Adsterra Mastery, you can request a full refund within 7 days of your 
              purchase date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
            <p>To be eligible for a refund, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request the refund within 7 days of purchase</li>
              <li>Provide your order number and registered email</li>
              <li>Have made a genuine attempt to engage with the course material</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Request a Refund</h2>
            <p>To request a refund:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact us via email at nnafeesaha@gmail.com or WhatsApp at +91 8294523068</li>
              <li>Include your order number and reason for refund (optional)</li>
              <li>We'll process your request within 2-3 business days</li>
              <li>Refund will be issued to your original payment method within 5-10 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Non-Refundable Situations</h2>
            <p>Refunds will not be issued if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>More than 7 days have passed since purchase</li>
              <li>You've downloaded all course materials and completed the course</li>
              <li>You've violated our Terms & Conditions</li>
              <li>You've shared course materials or account access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
            <p>
              Once your refund is approved, it will be processed within 2-3 business days. 
              The time it takes for the refund to appear in your account depends on your 
              payment provider:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credit/Debit Cards: 5-10 business days</li>
              <li>PayPal: 3-5 business days</li>
              <li>Cryptocurrency: 1-3 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Access After Refund</h2>
            <p>
              Once a refund is processed, your access to the course will be immediately 
              revoked. You will no longer be able to access course materials, videos, or 
              the private support group.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
            <p>
              If you have any questions about our refund policy, please don't hesitate to 
              contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>Email: nnafeesaha@gmail.com</li>
              <li>WhatsApp: +91 8294523068</li>
            </ul>
            <p className="mt-4">
              We're here to help and want to ensure you have the best experience possible 
              with Adsterra Mastery.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <a href="/" className="text-primary hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}