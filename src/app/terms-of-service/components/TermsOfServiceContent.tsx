export function TermsOfServiceContent() {
    const lastUpdated = new Date().toISOString().slice(0, 10);
    return (
        <article className="prose mx-auto px-4 py-10">
            <h1>Terms of Service</h1>
            <p>
                These Terms govern use of the Real Estate Algarve website and services. By accessing
                the site, you agree to these Terms. If you do not agree, do not use the site.
            </p>

            <h2>Service</h2>
            <p>
                We operate a directory that connects users with verified real estate professionals in
                Algarve, Portugal. We do not broker transactions and are not responsible for third-party
                listings or actions.
            </p>

            <h2>User Responsibilities</h2>
            <ul>
                <li>Provide accurate information and use the site lawfully</li>
                <li>Do not attempt to disrupt or gain unauthorized access to the service</li>
                <li>Respect intellectual property rights</li>
            </ul>

            <h2>Content and IP</h2>
            <p>
                Site content is protected by intellectual property laws. You may not copy, modify, or
                distribute content without permission.
            </p>

            <h2>Liability</h2>
            <p>
                The service is provided “as is.” To the maximum extent permitted by law, our liability is
                limited to amounts you paid to us in the 12 months before any claim.
            </p>

            <h2>Termination</h2>
            <p>We may suspend or terminate access for policy violations or legal reasons.</p>

            <h2>Governing Law</h2>
            <p>Portuguese law applies. Venue is in Portugal.</p>

            <h2>Contact</h2>
            <p>support@realestate-algarve.com — Algarve, Portugal</p>

            <p>Last updated: {lastUpdated}</p>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Terms of Service - Real Estate Algarve",
                        description:
                            "Terms and conditions for using Real Estate Algarve services.",
                        url: "https://www.realestate-algarve.com/terms-of-service",
                        dateModified: lastUpdated,
                    }),
                }}
            />
        </article>
    );
}


