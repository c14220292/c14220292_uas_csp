import { RegisterForm } from '@/components/auth/register-form'

export const metadata = {
    title: 'Register - Employee Portal',
    description: 'Create your employee account',
}

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-4 dark:from-slate-950 dark:to-slate-900">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Employee Portal
                    </h1>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        Create your account to get started
                    </p>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-800">
                    <RegisterForm />
                </div>

                <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                    Already have an account?{' '}
                    <a
                        href="/login"
                        className="font-medium text-slate-900 hover:text-slate-700 dark:text-white dark:hover:text-slate-300"
                    >
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    )
}
