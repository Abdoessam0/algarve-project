import { supabase } from './supabase'

// User profile management
export const userProfile = {
  // Get user profile
  async get(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (error) throw error
    return data
  },

  // Update user profile
  async update(userId: string, updates: {
    name?: string
    phone?: string
    bio?: string
    location?: string
    avatar_url?: string
  }) {
    const { data, error } = await supabase
      .from('profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId)
      .select()
    
    if (error) throw error
    return data
  },

  // Create user profile (usually called during registration)
  async create(userId: string, profileData: {
    email: string
    name?: string
    phone?: string
    bio?: string
    location?: string
  }) {
    const { data, error } = await supabase
      .from('profiles')
      .insert({
        id: userId,
        ...profileData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
    
    if (error) throw error
    return data
  },

  // Delete user profile
  async delete(userId: string) {
    const { error } = await supabase
      .from('profiles')
      .delete()
      .eq('id', userId)
    
    if (error) throw error
    return true
  }
}

// User preferences and settings
export const userSettings = {
  // Get user preferences
  async get(userId: string) {
    const { data, error } = await supabase
      .from('user_preferences')
      .select('*')
      .eq('user_id', userId)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error // PGRST116 = no rows returned
    return data
  },

  // Update user preferences
  async update(userId: string, preferences: {
    email_notifications?: boolean
    sms_notifications?: boolean
    newsletter_subscription?: boolean
    language?: string
    currency?: string
    property_types?: string[]
    price_range_min?: number
    price_range_max?: number
    locations?: string[]
  }) {
    const { data, error } = await supabase
      .from('user_preferences')
      .upsert({
        user_id: userId,
        ...preferences,
        updated_at: new Date().toISOString()
      })
      .select()
    
    if (error) throw error
    return data
  }
}

// Saved properties and favorites
export const userFavorites = {
  // Get user's saved properties
  async get(userId: string) {
    const { data, error } = await supabase
      .from('user_favorites')
      .select(`
        *,
        property:properties(*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Add property to favorites
  async add(userId: string, propertyId: string) {
    const { data, error } = await supabase
      .from('user_favorites')
      .insert({
        user_id: userId,
        property_id: propertyId,
        created_at: new Date().toISOString()
      })
      .select()
    
    if (error) throw error
    return data
  },

  // Remove property from favorites
  async remove(userId: string, propertyId: string) {
    const { error } = await supabase
      .from('user_favorites')
      .delete()
      .eq('user_id', userId)
      .eq('property_id', propertyId)
    
    if (error) throw error
    return true
  },

  // Check if property is favorited
  async isFavorited(userId: string, propertyId: string) {
    const { data, error } = await supabase
      .from('user_favorites')
      .select('id')
      .eq('user_id', userId)
      .eq('property_id', propertyId)
      .single()
    
    return !error && !!data
  }
}

// User inquiries and messages
export const userInquiries = {
  // Get user's inquiries
  async get(userId: string) {
    const { data, error } = await supabase
      .from('inquiries')
      .select(`
        *,
        property:properties(*),
        professional:professionals(*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Create new inquiry
  async create(inquiryData: {
    user_id: string
    property_id?: string
    professional_id?: string
    name: string
    email: string
    phone?: string
    message: string
    inquiry_type?: string
  }) {
    const { data, error } = await supabase
      .from('inquiries')
      .insert({
        ...inquiryData,
        status: 'new',
        created_at: new Date().toISOString()
      })
      .select()
    
    if (error) throw error
    return data
  },

  // Update inquiry status
  async updateStatus(inquiryId: string, status: string) {
    const { data, error } = await supabase
      .from('inquiries')
      .update({
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', inquiryId)
      .select()
    
    if (error) throw error
    return data
  }
}

// Search history
export const searchHistory = {
  // Get user's search history
  async get(userId: string, limit: number = 10) {
    const { data, error } = await supabase
      .from('search_history')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit)
    
    if (error) throw error
    return data
  },

  // Save search query
  async save(userId: string, searchData: {
    query: string
    filters?: Record<string, unknown>
    results_count?: number
  }) {
    const { data, error } = await supabase
      .from('search_history')
      .insert({
        user_id: userId,
        ...searchData,
        created_at: new Date().toISOString()
      })
      .select()
    
    if (error) throw error
    return data
  },

  // Clear search history
  async clear(userId: string) {
    const { error } = await supabase
      .from('search_history')
      .delete()
      .eq('user_id', userId)
    
    if (error) throw error
    return true
  }
}
