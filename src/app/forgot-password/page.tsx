import { redirect } from 'next/navigation';

export default function Page() {
    // Keep a small server-side redirect to the new auth route.
    redirect('/auth/forgot-password');
}
