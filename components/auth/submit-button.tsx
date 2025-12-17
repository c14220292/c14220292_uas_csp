'use client'

import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
    text: string
    loadingText: string
}

export function SubmitButton({ text, loadingText }: SubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
        >
            {pending ? loadingText : text}
        </button>
    )
}
