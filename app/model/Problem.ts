export default interface Problem {
  contestId?: number;
  problemsetName?: string;
  index: string;
  name: string;
  type: 'PROGRAMMING' | 'QUESTION';
  points?: number;
  rating?: number;
  tags: ProblemTags[];
}

export type ProblemTags =
  | 'implementation'
  | 'math'
  | 'greedy'
  | 'dp'
  | 'data structures'
  | 'brute force'
  | 'constructive algorithms'
  | 'graphs'
  | 'sortings'
  | 'binary search'
  | 'dfs and similar'
  | 'trees'
  | 'strings'
  | 'number theory'
  | 'combinatorics'
  | '[*special] (/problemset?tags=*special)'
  | 'geometry'
  | 'bitmasks'
  | 'two pointers'
  | 'dsu'
  | 'shortest paths'
  | 'probabilities'
  | 'divide and conquer'
  | 'hashing'
  | 'games'
  | 'flows'
  | 'interactive'
  | 'matrices'
  | 'string suffix structures'
  | 'fft'
  | 'graph matchings'
  | 'ternary search'
  | 'expression parsing'
  | 'meet-in-the-middle'
  | '2-sat'
  | 'chinese remainder theorem'
  | 'schedules';
