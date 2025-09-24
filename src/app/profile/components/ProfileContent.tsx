"use client";

import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { userProfile, userSettings } from '@/lib/auth-utils'
import { useRouter } from 'next/navigation'

interface ProfileData {
  id: string
  email: string
  name: string
  phone: string
  bio: string
  location: string
  avatar_url: string
  created_at: string
  updated_at: string
}

interface SettingsData {
  email_notifications: boolean
  sms_notifications: boolean
  newsletter_subscription: boolean
  language: string
  currency: string
}

export default function ProfileContent() {
  const { user } = useAuth()
  const router = useRouter()
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [settings, setSettings] = useState<SettingsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [activeTab, setActiveTab] = useState<'profile' | 'settings'>('profile')

  const loadUserData = useCallback(async () => {
    if (!user) return

    try {
      setLoading(true)
      
      // Load profile data
      try {
        const profileData = await userProfile.get(user.id)
        setProfile(profileData)
      } catch {
        console.log('No profile found, will create one')
      }

      // Load settings
      try {
        const settingsData = await userSettings.get(user.id)
        setSettings(settingsData)
      } catch {
        console.log('No settings found')
      }
    } catch {
      setError('Failed to load profile data')
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }

    loadUserData()
  }, [user, router, loadUserData])

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!user) return

    setSaving(true)
    setError('')
    setSuccess('')

    try {
      const formData = new FormData(e.currentTarget)
      const updates = {
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        bio: formData.get('bio') as string,
        location: formData.get('location') as string,
      }

      if (profile) {
        await userProfile.update(user.id, updates)
      } else {
        await userProfile.create(user.id, {
          email: user.email || '',
          ...updates
        })
      }

      setSuccess('Profile updated successfully!')
      loadUserData()
    } catch {
      setError('Failed to update profile')
    } finally {
      setSaving(false)
    }
  }

  const handleSettingsUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!user) return

    setSaving(true)
    setError('')
    setSuccess('')

    try {
      const formData = new FormData(e.currentTarget)
      const updates = {
        email_notifications: formData.get('email_notifications') === 'on',
        sms_notifications: formData.get('sms_notifications') === 'on',
        newsletter_subscription: formData.get('newsletter_subscription') === 'on',
        language: formData.get('language') as string,
        currency: formData.get('currency') as string,
      }

      await userSettings.update(user.id, updates)
      setSuccess('Settings updated successfully!')
      loadUserData()
    } catch {
      setError('Failed to update settings')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  if (!user) {
    return <div className="text-center py-8">Please log in to view your profile.</div>
  }

  return (
    <div>
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'profile'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Profile Information
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'settings'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Settings & Preferences
          </button>
        </nav>
      </div>

      {/* Messages */}
      {error && (
        <div className="mb-4 rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}
      {success && (
        <div className="mb-4 rounded-md bg-green-50 p-4">
          <div className="text-sm text-green-700">{success}</div>
        </div>
      )}

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={profile?.name || ''}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email || ''}
              disabled
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 sm:text-sm"
            />
            <p className="mt-1 text-sm text-gray-500">Email cannot be changed</p>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              defaultValue={profile?.phone || ''}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              defaultValue={profile?.location || ''}
              placeholder="e.g., Lagos, Algarve"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              name="bio"
              id="bio"
              rows={3}
              defaultValue={profile?.bio || ''}
              placeholder="Tell us about yourself..."
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Profile'}
            </button>
          </div>
        </form>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <form onSubmit={handleSettingsUpdate} className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  id="email_notifications"
                  name="email_notifications"
                  type="checkbox"
                  defaultChecked={settings?.email_notifications || true}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="email_notifications" className="ml-2 block text-sm text-gray-900">
                  Email notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="sms_notifications"
                  name="sms_notifications"
                  type="checkbox"
                  defaultChecked={settings?.sms_notifications || false}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="sms_notifications" className="ml-2 block text-sm text-gray-900">
                  SMS notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="newsletter_subscription"
                  name="newsletter_subscription"
                  type="checkbox"
                  defaultChecked={settings?.newsletter_subscription || true}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="newsletter_subscription" className="ml-2 block text-sm text-gray-900">
                  Newsletter subscription
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Preferences</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                  Language
                </label>
                <select
                  id="language"
                  name="language"
                  defaultValue={settings?.language || 'en'}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="en">English</option>
                  <option value="pt">Português</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>

              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  defaultValue={settings?.currency || 'EUR'}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="EUR">EUR (€)</option>
                  <option value="USD">USD ($)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
