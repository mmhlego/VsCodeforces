import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContestList } from '../api/contestApi';
import CollapsiblePanel from '../components/CollapsiblePanel';
import ContestView from '../components/ContestView';
import DropDown from '../components/DropDown';
import InputField from '../components/InputField';
import Loading from '../components/Loading';
import PrimaryButton from '../components/PrimaryButton';
import Contest from '../model/Contest';

export default function Contests() {
  const [allContests, setAllContests] = useState<Contest[] | undefined>(undefined);
  const [contests, setContests] = useState<Contest[] | undefined>(undefined);
  const [filterText, setFilterText] = useState('');
  const [filterType, setFilterType] = useState('Any');
  const [filterPhase, setFilterPhase] = useState('All');

  useEffect(() => {
    ContestList()
      .then(res => {
        setAllContests(res.result ? res.result : []);
        setContests(res.result ? res.result : []);
      })
      .catch(err => {
        console.log(err);
        setAllContests([]);
        setContests([]);
      });
  }, []);

  const filterContests = () => {
    setContests(
      allContests?.filter(
        c =>
          (filterText.length === 0 || c.name.includes(filterText)) &&
          (filterType === 'Any' || c.type === filterType) &&
          c.relativeTimeSeconds &&
          (filterPhase === 'All' ||
            (filterPhase === 'Before' && c.relativeTimeSeconds < 0) ||
            (filterPhase === 'Running' &&
              0 <= c.relativeTimeSeconds &&
              c.relativeTimeSeconds <= c.durationSeconds) ||
            (filterPhase === 'Finished' && c.relativeTimeSeconds > c.durationSeconds))
      )
    );
  };

  return (
    <Container>
      <CollapsiblePanel
        hasBackButton={true}
        text="Contests:"
        openText="Filter"
        style={{ position: 'sticky', top: '0px' }}
      >
        <DropDown label="Type" items={['Any', 'ICPC', 'IOI', 'CF']} onChange={setFilterType} />
        <DropDown
          label="Phase"
          items={['All', 'Before', 'Running', 'Finished']}
          onChange={setFilterPhase}
        />
        <InputField label="Name" placeholder="..." onChange={setFilterText} />
        <PrimaryButton text="Filter" onClick={filterContests} />
      </CollapsiblePanel>
      <div>
        {contests ? (
          contests.length > 0 ? (
            contests.map((contest, index) => (
              <ContestView key={index} contest={contest} index={index} />
            ))
          ) : (
            <NotFound>No contests found</NotFound>
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
