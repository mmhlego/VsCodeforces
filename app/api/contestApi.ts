import CfResponse from '../model/CfResponse';
import Contest from '../model/Contest';
import { getEpoch, getFieldsArray, getSignature } from './utils';

export function ContestList(gym: boolean = false): Promise<CfResponse<Contest[]>> {
  // export function ContestList(gym: boolean = false): string {
  const query = {
    gym: false,
    // apiKey: apiUserSecret,
    // time: getEpoch(),
  };

  //   axios.get(`/contest.list`, {
  //     data: { ...query, apiSig: getSignature('contest.list', query) },
  //     data: query,
  //   });

  return fetch(`https://codeforces.com/api/contest.list?${getFieldsArray(query).join('&')}`).then(
    response => {
      console.log(response);
      return response.json();
    }
  );

  //   return `https://codeforces.com/api/contest.list?${getFieldsArray(query).join('&')}`;
}

export function ContestStandings(contestId: number) {
  //   const query = {
  //     contestId: contestId,
  //     from: 1,
  //     count: 5,
  //     apiKey: apiUserSecret,
  //     time: getEpoch(),
  //   };
  //
  //   axios.get(`/contest.standings`, {
  //     data: { ...query, apiSig: getSignature('contest.standings', query) },
  //   });
}

export function ContestStatus(contestId: number) {
  //   const query = {
  //     apiKey: apiUserSecret,
  //     time: getEpoch(),
  //   };
  //
  //   axios.get(`/contest.list`, {
  //     data: { ...query, apiSig: getSignature('contest.list', query) },
  //   });
}
