import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProblemsList } from '../api/problemsetApi';
import Loading from '../components/Loading';
import ProblemView from '../components/ProblemView';
import Problem from '../model/Problem';
import ProblemStatistics from '../model/ProblemStatistics';

export default function Problems() {
  const [allProblems, setAllProblems] = useState<Problem[] | undefined>(undefined);
  const [allStatistics, setAllStatistics] = useState<ProblemStatistics[] | undefined>(undefined);

  useEffect(() => {
    // TODO fix
    ProblemsList()
      .then(res => {
        console.log(res);
        setAllProblems(res.result ? res.result.problems : []);
        setAllStatistics(res.result ? res.result.problemStatistics : []);
      })
      .catch(err => {
        console.log(err);
        setAllProblems([]);
      });
  }, []);

  return (
    <Container>
      {allProblems ? (
        allProblems.length > 0 ? (
          allProblems.map((problem, index) => (
            <ProblemView
              key={index}
              problem={problem}
              statistics={allStatistics ? allStatistics[index] : undefined}
              index={index}
            />
          ))
        ) : (
          <NotFound>No problems found</NotFound>
        )
      ) : (
        <Loading />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const NotFound = styled.p`
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`;
