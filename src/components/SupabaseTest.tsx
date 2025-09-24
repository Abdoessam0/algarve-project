"use client";

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SupabaseTest() {
    const [connectionStatus, setConnectionStatus] = useState<'testing' | 'connected' | 'error'>('testing')
    const [error, setError] = useState<string | null>(null)
    const [tables, setTables] = useState<string[]>([])

    useEffect(() => {
        testConnection()
    }, [])

    const testConnection = async () => {
        try {
            setConnectionStatus('testing')
            setError(null)

            // Test basic connection by fetching database info
            const { data, error } = await supabase
                .from('information_schema.tables')
                .select('table_name')
                .eq('table_schema', 'public')
                .limit(5)

            if (error) {
                // If we can't access information_schema, try a simpler test
                const { error: simpleError } = await supabase
                    .rpc('version')

                if (simpleError) {
                    throw new Error(`Connection failed: ${simpleError.message}`)
                }

                setConnectionStatus('connected')
                setTables(['Connection successful (version test)'])
            } else {
                setConnectionStatus('connected')
                setTables(data?.map(t => t.table_name) || ['No tables found'])
            }
        } catch (err) {
            setConnectionStatus('error')
            setError(err instanceof Error ? err.message : 'Unknown error')
        }
    }

    const getStatusColor = () => {
        switch (connectionStatus) {
            case 'testing': return 'text-yellow-600'
            case 'connected': return 'text-green-600'
            case 'error': return 'text-red-600'
        }
    }

    const getStatusIcon = () => {
        switch (connectionStatus) {
            case 'testing': return '⏳'
            case 'connected': return '✅'
            case 'error': return '❌'
        }
    }

    return (
        <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Supabase Connection Test</h3>

            <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{getStatusIcon()}</span>
                <span className={`font-medium ${getStatusColor()}`}>
                    {connectionStatus === 'testing' && 'Testing connection...'}
                    {connectionStatus === 'connected' && 'Connected successfully!'}
                    {connectionStatus === 'error' && 'Connection failed'}
                </span>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700">
                    <strong>Error:</strong> {error}
                </div>
            )}

            {tables.length > 0 && (
                <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Database Tables:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                        {tables.map((table, index) => (
                            <li key={index}>{table}</li>
                        ))}
                    </ul>
                </div>
            )}

            <button
                onClick={testConnection}
                disabled={connectionStatus === 'testing'}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {connectionStatus === 'testing' ? 'Testing...' : 'Test Again'}
            </button>
        </div>
    )
}
