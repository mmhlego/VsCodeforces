import CfResponse from '../model/CfResponse';
import Problem from '../model/Problem';
import ProblemStatistics from '../model/ProblemStatistics';

interface Response {
  problemStatistics: ProblemStatistics[];
  problems: Problem[];
}

export function ProblemsList(): Promise<CfResponse<Response>> {
  return fetch(`https://codeforces.com/api/problemset.problems`).then(response => {
    console.log(response);
    return response.json();
  });
}

export function ProblemText(problemId: string): Promise<string> {
  return fetch(`https://codeforces.com/problemset/problem/` + problemId).then(response => {
    console.log('response', response);
    return response.text();
  });
}
