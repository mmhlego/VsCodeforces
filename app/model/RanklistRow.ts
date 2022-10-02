import Party from './Party';
import ProblemResult from './ProblemResult';

export default interface RanklistRow {
  party: Party;
  rank: number;
  points: number;
  penalty: number;
  successfulHackCount: number;
  unsuccessfulHackCount: number;
  problemResults: ProblemResult[];
  lastSubmissionTimeSeconds: number;
}
