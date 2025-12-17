'use client'

import { logout } from '@/actions/auth'
import { useTransition } from 'react'

export function LogoutButton() {
    const [isPending, startTransition] = useTransition()

    const handleLogout = () => {
        startTransition(async () => {
            await logout()
        })
    }

    return (
        <button
            onClick={handleLogout}
            disabled={isPending}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
        >
            {isPending ? 'Logging out...' : 'Logout'}
        </button>
    )
}
