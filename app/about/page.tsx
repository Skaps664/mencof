export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Mission: Empowering Men's Confidence</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We believe every man deserves to feel confident, empowered, and ready to conquer his day.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              MensConfidence.pk was born from a simple belief: that confidence starts with taking care of yourself.
              We saw men across Pakistan struggling to find high-quality grooming and confidence-boosting products
              that actually delivered results.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              After months of research and testing, we created our flagship product - a solution designed specifically
              for Pakistani men, taking into account our climate, lifestyle, and unique needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we're proud to serve thousands of customers across Pakistan, helping them look better, feel
              better, and live with more confidence every single day.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What We Stand For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-700">
                Every product is carefully formulated and tested to ensure the highest quality standards.
                We never compromise on ingredients or effectiveness.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Customer Obsessed</h3>
              <p className="text-gray-700">
                Your satisfaction is our success. We listen, we improve, and we're always here to help.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Made for Pakistan</h3>
              <p className="text-gray-700">
                Specifically designed for our climate and lifestyle. What works elsewhere might not work here.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Honest Pricing</h3>
              <p className="text-gray-700">
                Premium quality doesn't have to mean premium prices. We believe in fair, transparent pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section className="bg-blue-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Promise to You</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">100% authentic products - no compromises, no shortcuts</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">30-day money-back guarantee - your satisfaction is guaranteed</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">Fast delivery across Pakistan - we respect your time</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">Responsive support - we're here when you need us</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">Have questions? We'd love to hear from you.</p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>Email:</strong> support@mensconfidence.pk
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +92 XXX XXXXXXX
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
