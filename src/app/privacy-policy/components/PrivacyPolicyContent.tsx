export function PrivacyPolicyContent() {
    const lastUpdated = new Date().toISOString().slice(0, 10);
    return (
        <article className="prose mx-auto px-4 py-10">
            <h1>Privacy Policy</h1>
            <p>
                This policy explains how Real Estate Algarve collects, uses, and protects your
                information when you use our directory services in Algarve, Portugal.
            </p>

            <h2>Information We Collect</h2>
            <ul>
                <li>Contact details and messages you send to professionals</li>
                <li>Preferences, saved searches, and favorite listings</li>
                <li>Technical data such as device, browser, and IP address</li>
                <li>Cookies and similar technologies for core functionality</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
                <li>To connect you with verified professionals you choose to contact</li>
                <li>To operate, secure, and improve the website</li>
                <li>To send updates where you have given consent</li>
                <li>To comply with legal obligations</li>
            </ul>

            <h2>Sharing</h2>
            <p>
                We may share data with service providers under contract and with professionals when you
                request contact. We do not sell your personal data.
            </p>

            <h2>Your Rights (GDPR)</h2>
            <ul>
                <li>Access, correction, deletion, and portability</li>
                <li>Objection and restriction of processing</li>
                <li>Withdraw consent at any time</li>
            </ul>
            <p>
                To exercise rights, email privacy@realestate-algarve.com or use our contact page.
            </p>

            <h2>International Transfers</h2>
            <p>
                When data is processed outside the EEA, we use GDPR safeguards such as Standard
                Contractual Clauses.
            </p>

            <h2>Children's Privacy</h2>
            <p>Our services are not directed to individuals under 16 years of age.</p>

            <h2>Contact</h2>
            <p>
                Real Estate Algarve — Algarve, Portugal. Email: privacy@realestate-algarve.com
            </p>

            <p>Last updated: {lastUpdated}</p>

            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Privacy Policy - Real Estate Algarve",
                        description:
                            "How Real Estate Algarve collects, uses, and protects personal data.",
                        url: "https://www.realestate-algarve.com/privacy-policy",
                        isPartOf: {
                            "@type": "WebSite",
                            name: "Real Estate Algarve",
                            url: "https://www.realestate-algarve.com",
                        },
                        dateModified: lastUpdated,
                    }),
                }}
            />
        </article>
    );
}


