// src/app/professionals/data.ts
import { supabase } from "@/lib/supabase";

export type Pro = {
  id: string | number;
  name?: string | null;
  specialization?: string | null;
  location?: string | null;
  verified?: boolean | null;
  company?: string | null;
  avatar_url?: string | null;
};

function normalize(row: Record<string, unknown>): Pro {
  const r = row as Partial<Pro>;
  return {
    id: (r.id as string | number) ?? String(Math.random()),
    name: r.name ?? null,
    specialization: r.specialization ?? null,
    location: r.location ?? null,
    verified: r.verified ?? null,
    company: r.company ?? null,
    avatar_url: (r.avatar_url as string) ?? null,
  };
}

async function getBySpecialization(specialization: string) {
  try {
    const { data, error } = await supabase
      .from("professionals")
      .select("*")
      .eq("specialization", specialization);
    if (error) throw error;
    return (data as Record<string, unknown>[]).map(normalize);
  } catch {
    return [] as Pro[];
  }
}

export const getAllAgents = () => getBySpecialization("Agent");
export const getAllLawyers = () => getBySpecialization("Lawyer");
export const getAllAccountants = () => getBySpecialization("Accountant");
export const getAllArchitects = () => getBySpecialization("Architect");
export const getAllConstructors = () => getBySpecialization("Constructor");
export const getAllNotaries = () => getBySpecialization("Notary");
export const getAllCivilEngineers = () => getBySpecialization("Civil Engineer");
export const getAllElectricians = () => getBySpecialization("Electrician");

export async function getAllLocations() {
  try {
    const { data, error } = await supabase
      .from("professionals")
      .select("location");
    if (error) throw error;
    const set = new Set<string>();
    (data as { location: string | null }[]).forEach((r) => {
      if (r.location) set.add(r.location);
    });
    return Array.from(set);
  } catch {
    return ["Faro", "Lagos", "Albufeira", "Portimão"]; // useful defaults
  }
}

