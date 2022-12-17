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
    // TODO fix
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
          (c.name.includes(filterText) || filterText.length === 0) &&
          (c.type === filterType || filterType === 'Any') &&
          ((c.relativeTimeSeconds &&
            ((c.relativeTimeSeconds < 0 && filterPhase === 'Before') ||
              (c.relativeTimeSeconds >= 0 &&
                c.relativeTimeSeconds <= c.durationSeconds &&
                filterPhase === 'Running') ||
              (c.relativeTimeSeconds > c.durationSeconds && filterPhase === 'Finished'))) ||
            filterPhase === 'All')
      )
    );
  };

  return (
    <Container>
      <CollapsiblePanel text="Contests:" openText="Filter">
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
