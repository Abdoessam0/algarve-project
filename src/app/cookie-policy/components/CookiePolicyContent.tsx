export function CookiePolicyContent() {
  const lastUpdated = new Date().toISOString().slice(0, 10);
  return (
    <article className="prose mx-auto px-4 py-10">
      <h1>Cookie Policy</h1>
      <p>
        We use cookies to operate this website, remember preferences, and analyze usage. Some
        cookies are essential; others are optional and used with consent.
      </p>

      <h2>Types of Cookies</h2>
      <ul>
        <li>Essential: security, login state, and load balancing</li>
        <li>Performance: anonymous analytics to improve the site</li>
        <li>Functionality: save favorites and preferences</li>
        <li>Marketing: only if enabled by you</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>
        You can control cookies via your browser settings and withdraw consent at any time. Some
        features may not work without essential cookies.
      </p>

      <p>Last updated: {lastUpdated}</p>

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
    </article>
  );
}


