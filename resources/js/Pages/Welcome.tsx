import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({
    auth,
}: PageProps) {

    return (
        <>
            <Head title="Welcome" />
            <div>
                <header className="w-full py-5 px-10 flex justify-end">
                    <nav className="flex space-x-8">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <main className="mt-6">
                    hello
                </main>

                
            </div>
        </>
    );
}
