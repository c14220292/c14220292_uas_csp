import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { LogoutButton } from '@/components/dashboard/logout-button'
import { Suspense } from 'react'

export const metadata = {
    title: 'Dashboard - Employee Portal',
    description: 'Employee dashboard',
}

async function AnnouncementsList() {
    const supabase = await createClient()

    const { data: announcements } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {announcements?.map((announcement) => (
                <div
                    key={announcement.id}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                >
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                        {announcement.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {announcement.content}
                    </p>
                    <time className="text-xs text-slate-500 dark:text-slate-500">
                        {new Date(announcement.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </time>
                </div>
            ))}
        </div>
    )
}

function AnnouncementsLoading() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="h-48 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700"
                />
            ))}
        </div>
    )
}

export default async function DashboardPage() {
    const supabase = await createClient()

    const {
        data: { user },
        error,
    } = await supabase.auth.getUser()

    if (error || !user) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Employee Portal
                            </h1>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                Welcome, {user.email}
                            </p>
                        </div>
                        <LogoutButton />
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                        Announcements
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        Stay updated with the latest company news
                    </p>
                </div>

                <Suspense fallback={<AnnouncementsLoading />}>
                    <AnnouncementsList />
                </Suspense>
            </main>
        </div>
    )
}
