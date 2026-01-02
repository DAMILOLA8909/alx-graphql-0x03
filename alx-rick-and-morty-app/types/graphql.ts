export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters?: Character[];
  created?: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export interface EpisodesInfo {
  pages: number;
  next: number | null;
  prev: number | null;
  count: number;
}

export interface EpisodesResponse {
  episodes: {
    info: EpisodesInfo;
    results: Episode[];
  };
}

export interface FilterEpisode {
  name?: string;
  episode?: string;
}