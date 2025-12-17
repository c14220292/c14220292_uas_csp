import { LoginForm } from '@/components/auth/login-form'

export const metadata = {
    title: 'Login - Employee Portal',
    description: 'Sign in to your employee account',
}

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-4 dark:from-slate-950 dark:to-slate-900">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Employee Portal
                    </h1>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        Sign in to your account
                    </p>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-800">
                    <LoginForm />
                </div>

                <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                    Don&apos;t have an account?{' '}
                    <a
                        href="/register"
                        className="font-medium text-slate-900 hover:text-slate-700 dark:text-white dark:hover:text-slate-300"
                    >
                        Create one
                    </a>
                </p>
            </div>
        </div>
    )
}
