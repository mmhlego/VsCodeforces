export default interface Contest {
  id: number;
  name: string;
  type: 'CF' | 'IOI' | 'ICPC';
  phase: 'BEFORE' | 'CODING' | 'PENDING_SYSTEM_TEST' | 'SYSTEM_TEST' | 'FINISHED';
  frozen: Boolean;
  durationSeconds: number;
  startTimeSeconds: number;
  relativeTimeSeconds: number;
  preparedBy: string;
  websiteUrl: string;
  description: string;
  difficulty: number;
  kind: string;
  icpcRegion: string;
  country: string;
  city: string;
  season: string;
}
