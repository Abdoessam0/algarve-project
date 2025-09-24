export function PrivacyPolicyContent() {
    return (
        <article className="prose mx-auto px-4 py-10">
            <h1>Privacy Policy</h1>
            <p>Full policy text goes here… Last updated: {new Date().toISOString().slice(0, 10)}</p>
        </article>
    );
}


