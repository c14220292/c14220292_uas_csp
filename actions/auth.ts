'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const authSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
})

export async function login(
    prevState: { error: string } | null,
    formData: FormData
) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const validation = authSchema.safeParse({ email, password })

    if (!validation.success) {
        return { error: validation.error.issues[0].message }
    }

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    redirect('/dashboard')
}

export async function register(
    prevState: { error: string } | null,
    formData: FormData
) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const validation = authSchema.safeParse({ email, password })

    if (!validation.success) {
        return { error: validation.error.issues[0].message }
    }

    const { error } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    redirect('/login')
}

export async function logout() {
    const supabase = await createClient()

    await supabase.auth.signOut()

    redirect('/login')
}
