"use client";

export function PrivacyPolicyContent() {
    const lastUpdated = new Date().toISOString().slice(0, 10);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                {/* Header */}
                <div className="mb-16 text-center border-b border-slate-200 pb-12">
                    <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-600 text-lg font-light">
                        Your privacy is paramount to us
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
                            This policy explains how Real Estate Algarve collects, uses, and protects your
                            information when you use our directory services in Algarve, Portugal.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            Information We Collect
                        </h2>
                        <div className="space-y-4 text-slate-700">
                            <div className="pl-6 border-l-2 border-slate-200">
                                <h3 className="font-medium text-slate-900 mb-2">Contact Details and Messages</h3>
                                <p className="font-light leading-relaxed">
                                    Information you send to professionals through our platform
                                </p>
                            </div>
                            <div className="pl-6 border-l-2 border-slate-200">
                                <h3 className="font-medium text-slate-900 mb-2">Preferences and Saved Searches</h3>
                                <p className="font-light leading-relaxed">
                                    Your saved searches and favorite property listings
                                </p>
                            </div>
                            <div className="pl-6 border-l-2 border-slate-200">
                                <h3 className="font-medium text-slate-900 mb-2">Technical Data</h3>
                                <p className="font-light leading-relaxed">
                                    Device information, browser type, and IP address
                                </p>
                            </div>
                            <div className="pl-6 border-l-2 border-slate-200">
                                <h3 className="font-medium text-slate-900 mb-2">Cookies and Similar Technologies</h3>
                                <p className="font-light leading-relaxed">
                                    Used for core functionality and site improvement
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            How We Use Your Information
                        </h2>
                        <div className="space-y-3 text-slate-700">
                            <p className="flex items-start gap-3 font-light leading-relaxed">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>To connect you with verified professionals you choose to contact</span>
                            </p>
                            <p className="flex items-start gap-3 font-light leading-relaxed">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>To operate, secure, and improve the website</span>
                            </p>
                            <p className="flex items-start gap-3 font-light leading-relaxed">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>To send updates where you have given consent</span>
                            </p>
                            <p className="flex items-start gap-3 font-light leading-relaxed">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>To comply with legal obligations</span>
                            </p>
                        </div>
                    </section>

                    {/* Sharing */}
                    <section>
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            Sharing
                        </h2>
                        <p className="text-slate-700 font-light leading-relaxed">
                            We may share data with service providers under contract and with professionals
                            when you request contact. We do not sell your personal data.
                        </p>
                    </section>

                    {/* Your Rights (GDPR) */}
                    <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            Your Rights (GDPR)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-slate-700">
                            <div className="space-y-2">
                                <h3 className="font-medium text-slate-900">Access and Correction</h3>
                                <p className="text-sm font-light leading-relaxed">
                                    Request access to and correction of your data
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-slate-900">Deletion and Portability</h3>
                                <p className="text-sm font-light leading-relaxed">
                                    Request deletion or transfer of your data
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-slate-900">Objection and Restriction</h3>
                                <p className="text-sm font-light leading-relaxed">
                                    Object to or restrict certain processing
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-slate-900">Withdraw Consent</h3>
                                <p className="text-sm font-light leading-relaxed">
                                    Withdraw consent at any time
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 mt-6 font-light">
                            To exercise rights, email{" "}
                            <a href="mailto:privacy@realestate-algarve.com" className="text-slate-900 underline decoration-slate-300 hover:decoration-slate-900 transition-colors">
                                privacy@realestate-algarve.com
                            </a>
                            {" "}or use our contact page.
                        </p>
                    </section>

                    {/* International Transfers */}
                    <section>
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            International Transfers
                        </h2>
                        <p className="text-slate-700 font-light leading-relaxed">
                            When data is processed outside the EEA, we use GDPR safeguards such as
                            Standard Contractual Clauses.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section>
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            Children&quot;&apos;s Privacy
                        </h2>
                        <p className="text-slate-700 font-light leading-relaxed">
                            Our services are not directed to individuals under 16 years of age.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="bg-slate-900 text-white rounded-2xl p-8">
                        <h2 className="text-2xl font-light mb-4">Contact</h2>
                        <p className="font-light leading-relaxed mb-4">
                            Real Estate Algarve — Algarve, Portugal
                        </p>
                        <p className="font-light">
                            Email:{" "}
                            <a href="mailto:privacy@realestate-algarve.com" className="underline decoration-slate-600 hover:decoration-white transition-colors">
                                privacy@realestate-algarve.com
                            </a>
                        </p>
                    </section>
                </article>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "Privacy Policy - Real Estate Algarve",
                            url: "https://www.realestate-algarve.com/privacy-policy",
                            dateModified: lastUpdated,
                        }),
                    }}
                />
            </div>
        </div>
    );
}