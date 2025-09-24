export function TermsOfServiceContent() {
  return (
    <article className="prose mx-auto px-4 py-10">
      <h1>Terms of Service</h1>
      <p>Full terms text goes here… Last updated: {new Date().toISOString().slice(0, 10)}</p>
    </article>
  );
}


