import BlogEntry from './BlogEntry';

export default interface RecentAction {
  timeSeconds: number;
  blogEntry: BlogEntry;
  comment: Comment;
}
