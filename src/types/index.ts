// src/types/index.ts
export type Municipality = {
    id: string;
    name: string;
    slug: string;
    mainCities: string[];
    heroImage?: string;
    coords?: { lat: number; lng: number };
    short?: string;
};

export type Landmark = {
    id: string;
    name: string;
    type:
    | "beach"
    | "cave"
    | "natural_park"
    | "trail"
    | "mountain"
    | "cape"
    | "cliff_formations";
    municipality?: string;
    municipalities?: string[];
    highlights?: string[];
    links?: string[];
    coords?: { lat: number; lng: number };
};

export type InstitutionGroup = {
    airports: { id: string; name: string; iata?: string; city: string; coords?: { lat: number; lng: number } }[];
    universities: { id: string; name: string; campuses: { name: string; city: string }[] }[];
    hospitals: { id: string; name: string; city: string }[];
    councils: { id: string; name: string }[];
};

export type AlgarveData = {
    region: {
        id: "algarve";
        name: string;
        country: "Portugal";
        capital: "Faro";
        zones: string[];
        summary: string;
        links?: Record<string, string>;
    };
    municipalities: Municipality[];
    landmarks: Landmark[];
    institutions: InstitutionGroup;
    economy: { sector: string; summary: string }[];
};


