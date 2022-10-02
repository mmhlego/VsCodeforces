import Party from './Party';
import Problem from './Problem';

export default interface Hack {
  id: number;
  creationTimeSeconds: number;
  hacker: Party;
  defender: Party;
  verdict:
    | 'HACK_SUCCESSFUL'
    | 'HACK_UNSUCCESSFUL'
    | 'INVALID_INPUT'
    | 'GENERATOR_INCOMPILABLE'
    | 'GENERATOR_CRASHED'
    | 'IGNORED'
    | 'TESTING'
    | 'OTHER';
  problem: Problem;
  test: String;
  judgeProtocol: Object;
}

export interface JudgeProtocol {
  manual: boolean;
  protocol: string;
  verdict: string;
}
