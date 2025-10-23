"use client";

export function CookiePolicyContent() {
  const lastUpdated = new Date().toISOString().slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 text-center border-b border-slate-200 pb-12">
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-slate-600 text-lg font-light">
            How we use cookies to enhance your experience
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
          </p>
        </div>

        {/* Content */}
        <article className="space-y-12">
          {/* Introduction */}
          <section>
            <p className="text-lg text-slate-700 leading-relaxed font-light">
              We use cookies to operate this website, remember preferences, and analyze usage.
              Some cookies are essential; others are optional and used with consent.
            </p>
          </section>

          {/* Types of Cookies */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
              Types of Cookies
            </h2>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900 mb-2">Essential</h3>
                    <p className="text-slate-700 font-light leading-relaxed">
                      Security, login state, and load balancing
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900 mb-2">Performance</h3>
                    <p className="text-slate-700 font-light leading-relaxed">
                      Anonymous analytics to improve the site
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900 mb-2">Functionality</h3>
                    <p className="text-slate-700 font-light leading-relaxed">
                      Save favorites and preferences
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900 mb-2">Marketing</h3>
                    <p className="text-slate-700 font-light leading-relaxed">
                      Only if enabled by you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
              Managing Cookies
            </h2>
            <p className="text-slate-700 font-light leading-relaxed">
              You can control cookies via your browser settings and withdraw consent at any time.
              Some features may not work without essential cookies.
            </p>
          </section>

          {/* Call to Action */}
          <section className="bg-slate-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-light mb-4">Questions about cookies?</h2>
            <p className="font-light leading-relaxed mb-6">
              We are here to help you understand how we protect your data
            </p>
            <a
              href="mailto:contact@5stepsrealestate.com"
              className="inline-block px-8 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              Contact Us
            </a>
          </section>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Cookie Policy - Real Estate Algarve",
              url: "https://www.realestate-algarve.com/cookie-policy",
              dateModified: lastUpdated,
            }),
          }}
        />
      </div>
    </div>
  );
}