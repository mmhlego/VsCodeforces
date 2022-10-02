import Party from './Party';
import Problem from './Problem';

export default interface Submission {
  id: number;
  contestId: number;
  creationTimeSeconds: number;
  relativeTimeSeconds: number;
  problem: Problem;
  author: Party;
  programmingLanguage: string;
  verdict:
    | 'FAILED'
    | 'OK'
    | 'PARTIAL'
    | 'COMPILATION_ERROR'
    | 'RUNTIME_ERROR'
    | 'WRONG_ANSWER'
    | 'PRESENTATION_ERROR'
    | 'TIME_LIMIT_EXCEEDED'
    | 'MEMORY_LIMIT_EXCEEDED'
    | 'IDLENESS_LIMIT_EXCEEDED'
    | 'SECURITY_VIOLATED'
    | 'CRASHED'
    | 'INPUT_PREPARATION_CRASHED'
    | 'CHALLENGED'
    | 'SKIPPED'
    | 'TESTING'
    | 'REJECTED';
  testset:
    | 'SAMPLES'
    | 'PRETESTS'
    | 'TESTS'
    | 'CHALLENGES'
    | 'TESTS1'
    | 'TESTS2'
    | 'TESTS3'
    | 'TESTS4'
    | 'TESTS5'
    | 'TESTS6'
    | 'TESTS7'
    | 'TESTS8'
    | 'TESTS9'
    | 'TESTS10';
  passedTestCount: number;
  timeConsumedMillis: number;
  memoryConsumedBytes: number;
  points: number;
}
