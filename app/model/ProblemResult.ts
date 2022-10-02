export default interface ProblemResult {
  points: number;
  penalty: number;
  rejectedAttemptCount: number;
  type: 'PRELIMINARY' | 'FINAL';
  bestSubmissionTimeSeconds: number;
}
