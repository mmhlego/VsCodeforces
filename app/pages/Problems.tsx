import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProblemsList } from '../api/problemsetApi';
import CollapsiblePanel from '../components/CollapsiblePanel';
import DropDown from '../components/DropDown';
import InputField from '../components/InputField';
import Loading from '../components/Loading';
import PrimaryButton from '../components/PrimaryButton';
import ProblemView from '../components/ProblemView';
import Problem from '../model/Problem';
import ProblemStatistics from '../model/ProblemStatistics';

export default function Problems() {
  const [allProblems, setAllProblems] = useState<Problem[] | undefined>(undefined);
  const [problems, setProblems] = useState<Problem[] | undefined>(undefined);
  const [allStatistics, setAllStatistics] = useState<ProblemStatistics[] | undefined>(undefined);
  const [filterText, setFilterText] = useState('');
  const [filterRatingFrom, setFilterRatingFrom] = useState<'' | number>('');
  const [filterRatingTo, setFilterRatingTo] = useState<'' | number>('');

  useEffect(() => {
    ProblemsList()
      .then(res => {
        console.log(res);
        setAllProblems(res.result ? res.result.problems : []);
        setProblems(res.result ? res.result.problems : []);
        setAllStatistics(res.result ? res.result.problemStatistics : []);
      })
      .catch(err => {
        console.log(err);
        setAllProblems([]);
        setProblems([]);
      });
  }, []);

  const filterContests = () => {
    setProblems(
      allProblems?.filter(
        p =>
          (filterText.length === 0 || p.name.includes(filterText)) &&
          (filterRatingFrom === '' || (p.rating && p.rating >= filterRatingFrom)) &&
          (filterRatingTo === '' || (p.rating && p.rating <= filterRatingTo))
      )
    );
  };

  const tags = [
    'implementation',
    'math',
    'greedy',
    'dp',
    'data structures',
    'brute force',
    'constructive algorithms',
    'graphs',
    'sortings',
    'binary search',
    'dfs and similar',
    'trees',
    'strings',
    'number theory',
    'combinatorics',
    '[*special] (/problemset?tags=*special)',
    'geometry',
    'bitmasks',
    'two pointers',
    'dsu',
    'shortest paths',
    'probabilities',
    'divide and conquer',
    'hashing',
    'games',
    'flows',
    'interactive',
    'matrices',
    'string suffix structures',
    'fft',
    'graph matchings',
    'ternary search',
    'expression parsing',
    'meet-in-the-middle',
    '2-sat',
    'chinese remainder theorem',
    'schedules',
  ];

  return (
    <Container>
      <CollapsiblePanel
        hasBackButton={true}
        text="Problems:"
        openText="Filter"
        style={{ position: 'sticky', top: '0px' }}
      >
        <InputField label="Name" placeholder="..." onChange={setFilterText} />
        {/* // TODO: complete filter by tag section */}
        <DropDown label="Type" items={tags} onChange={val => console.log(val)} />
        <FilterRow>
          <InputField
            label="Rating"
            placeholder="From"
            type="number"
            onChange={val => setFilterRatingFrom(parseInt(val))}
          />
          <FilterDash>-</FilterDash>
          <InputField
            placeholder="To"
            type="number"
            onChange={val => setFilterRatingTo(val.length > 0 ? parseInt(val) : '')}
          />
        </FilterRow>
        <PrimaryButton text="Filter" onClick={filterContests} />
      </CollapsiblePanel>
      <div>
        {problems ? (
          problems.length > 0 ? (
            problems.map((problem, index) => (
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
      </div>
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

const FilterRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
`;

const FilterDash = styled.p`
  font-weight: 500;
  line-height: 27px;
  font-size: 18px;
`;
