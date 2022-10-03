import React, { useEffect, useState } from 'react';
import { ContestList } from '../api/contestApi';
import { getSignature } from '../api/utils';
import Contest from '../model/Contest';
import ContestView from './ContestView';

export const Home = () => {
  const [contests, setContests] = useState<Contest[]>([]);

  ContestList().then(res => {
    if (res.status === 'OK') {
      res.result?.sort((a: Contest, b: Contest) => b.startTimeSeconds - a.startTimeSeconds);
      setContests(res.result!);

      console.log(contests.slice(0, 15));
    }
  });

  return (
    <>
      <h1>Home</h1>

      <h3>Contest List</h3>
      {contests.slice(0, 15).map((con, index) => (
        <ContestView key={index} contest={con} index={index} />
      ))}
      {contests.length === 0 && <p>No contests found</p>}
    </>
  );
};
