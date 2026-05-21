import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

export interface Profile {
  id: string;
  role: 'vecino' | 'voluntario';
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
}

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private client: SupabaseClient;

  constructor() {
    this.client = createClient(
      environment.supabase.url,
      environment.supabase.anonKey
    );
  }

  async getProfile(uid: string): Promise<Profile | null> {
    const { data, error } = await this.client
      .from('profiles')
      .select('*')
      .eq('id', uid)
      .single();

    if (error || !data) return null;
    return data as Profile;
  }

  async upsertProfile(profile: Profile): Promise<void> {
    const { error } = await this.client
      .from('profiles')
      .upsert(profile, { onConflict: 'id' });

    if (error) throw error;
  }
}
