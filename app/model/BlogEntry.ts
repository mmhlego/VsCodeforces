export default interface BlogEntry {
  id: number;
  originalLocale: string;
  creationTimeSeconds: number;
  authorHandle: string;
  title: string;
  content: string;
  locale: string;
  modificationTimeSeconds: number;
  allowViewHistory: Boolean;
  tags: string;
  rating: number;
}
