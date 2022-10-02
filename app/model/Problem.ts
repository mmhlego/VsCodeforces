export default interface Problem {
  contestId: number;
  problemsetName: string;
  index: string;
  name: string;
  type: 'PROGRAMMING' | 'QUESTION';
  points: number;
  rating: number;
  tags: string;
}
