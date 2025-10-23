"use client";

export function TermsOfServiceContent() {
    const lastUpdated = new Date().toISOString().slice(0, 10);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                {/* Header */}
                <div className="mb-16 text-center border-b border-slate-200 pb-12">
                    <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
                        Terms of Service
                    </h1>
                    <p className="text-slate-600 text-lg font-light">
                        Understanding our service agreement
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
                            These Terms govern use of the Real Estate Algarve website and services.
                            By accessing the site, you agree to these Terms. If you do not agree,
                            do not use the site.
                        </p>
                    </section>

                    {/* Service */}
                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            Service
                        </h2>
                        <p className="text-slate-700 font-light leading-relaxed">
                            We operate a directory that connects users with verified real estate professionals
                            in Algarve, Portugal. We do not broker transactions and are not responsible for
                            third-party listings or actions.
                        </p>
                    </section>

                    {/* User Responsibilities */}
                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            User Responsibilities
                        </h2>
                        <div className="space-y-3 text-slate-700">
                            <p className="flex items-start gap-3 font-light leading-relaxed">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>Provide accurate information and use the site lawfully</span>
                            </p>
                            <p className="flex items-start gap-3 font-light leading-relaxed">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>Do not attempt to disrupt or gain unauthorized access to the service</span>
                            </p>
                            <p className="flex items-start gap-3 font-light leading-relaxed">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>Respect intellectual property rights</span>
                            </p>
                        </div>
                    </section>

                    {/* Content and IP */}
                    <section>
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            Content and Intellectual Property
                        </h2>
                        <p className="text-slate-700 font-light leading-relaxed">
                            Site content is protected by intellectual property laws. You may not copy,
                            modify, or distribute content without permission.
                        </p>
                    </section>

                    {/* Liability */}
                    <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            Liability
                        </h2>
                        <p className="text-slate-700 font-light leading-relaxed">
                            The service is provided as is. To the maximum extent permitted by law,
                            our liability is limited to amounts you paid to us in the 12 months before
                            any claim.
                        </p>
                    </section>

                    {/* Termination */}
                    <section>
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            Termination
                        </h2>
                        <p className="text-slate-700 font-light leading-relaxed">
                            We may suspend or terminate access for policy violations or legal reasons.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-1 h-8 bg-slate-800 rounded-full"></span>
                            Governing Law
                        </h2>
                        <p className="text-slate-700 font-light leading-relaxed">
                            Portuguese law applies. Venue is in Portugal.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="bg-slate-900 text-white rounded-2xl p-8">
                        <h2 className="text-2xl font-light mb-4">Contact</h2>
                        <p className="font-light leading-relaxed">
                            <a href="mailto:support@5stepsrealestate.com" className="underline decoration-slate-600 hover:decoration-white transition-colors">
                                support@5stepsrealestate.com
                            </a>
                            {" "}— Algarve, Portugal
                        </p>
                    </section>
                </article>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "Terms of Service - Real Estate Algarve",
                            url: "https://www.realestate-algarve.com/terms-of-service",
                            dateModified: lastUpdated,
                        }),
                    }}
                />
            </div>
        </div>
    );
}