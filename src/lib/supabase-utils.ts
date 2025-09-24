import { supabase } from './supabase'

// Generic database operations
export const db = {
    // Select data from any table
    async select(table: string, columns = '*', filters?: Record<string, unknown>) {
        let query = supabase.from(table).select(columns)

        if (filters) {
            Object.entries(filters).forEach(([key, value]) => {
                query = query.eq(key, value)
            })
        }

        const { data, error } = await query
        if (error) throw error
        return data
    },

    // Insert data into any table
    async insert(table: string, data: Record<string, unknown> | Record<string, unknown>[]) {
        const { data: result, error } = await supabase
            .from(table)
            .insert(data)
            .select()

        if (error) throw error
        return result
    },

    // Update data in any table
    async update(table: string, id: string | number, data: Record<string, unknown>) {
        const { data: result, error } = await supabase
            .from(table)
            .update(data)
            .eq('id', id)
            .select()

        if (error) throw error
        return result
    },

    // Delete data from any table
    async delete(table: string, id: string | number) {
        const { error } = await supabase
            .from(table)
            .delete()
            .eq('id', id)

        if (error) throw error
        return true
    },

    // Get single record by ID
    async getById(table: string, id: string | number) {
        const { data, error } = await supabase
            .from(table)
            .select('*')
            .eq('id', id)
            .single()

        if (error) throw error
        return data
    },

    // Search with text search
    async search(table: string, column: string, searchTerm: string) {
        const { data, error } = await supabase
            .from(table)
            .select('*')
            .textSearch(column, searchTerm)

        if (error) throw error
        return data
    },

    // Paginated queries
    async paginate(table: string, page: number = 1, limit: number = 10, filters?: Record<string, unknown>) {
        const from = (page - 1) * limit
        const to = from + limit - 1

        let query = supabase
            .from(table)
            .select('*', { count: 'exact' })
            .range(from, to)

        if (filters) {
            Object.entries(filters).forEach(([key, value]) => {
                query = query.eq(key, value)
            })
        }

        const { data, error, count } = await query

        if (error) throw error

        return {
            data,
            pagination: {
                page,
                limit,
                total: count || 0,
                totalPages: Math.ceil((count || 0) / limit)
            }
        }
    }
}

// Real estate specific operations
export const realEstateDb = {
    // Get all properties
    async getProperties(filters?: {
        location?: string
        propertyType?: string
        minPrice?: number
        maxPrice?: number
        bedrooms?: number
    }) {
        let query = supabase.from('properties').select('*')

        if (filters) {
            if (filters.location) {
                query = query.ilike('location', `%${filters.location}%`)
            }
            if (filters.propertyType) {
                query = query.eq('property_type', filters.propertyType)
            }
            if (filters.minPrice) {
                query = query.gte('price', filters.minPrice)
            }
            if (filters.maxPrice) {
                query = query.lte('price', filters.maxPrice)
            }
            if (filters.bedrooms) {
                query = query.gte('bedrooms', filters.bedrooms)
            }
        }

        const { data, error } = await query
        if (error) throw error
        return data
    },

    // Get professionals/agents
    async getProfessionals(filters?: {
        location?: string
        specialization?: string
        verified?: boolean
    }) {
        let query = supabase.from('professionals').select('*')

        if (filters) {
            if (filters.location) {
                query = query.ilike('location', `%${filters.location}%`)
            }
            if (filters.specialization) {
                query = query.eq('specialization', filters.specialization)
            }
            if (filters.verified !== undefined) {
                query = query.eq('verified', filters.verified)
            }
        }

        const { data, error } = await query
        if (error) throw error
        return data
    },

    // Create contact inquiry
    async createInquiry(inquiry: {
        property_id?: number
        professional_id?: number
        name: string
        email: string
        phone?: string
        message: string
    }) {
        const { data, error } = await supabase
            .from('inquiries')
            .insert(inquiry)
            .select()

        if (error) throw error
        return data
    }
}
