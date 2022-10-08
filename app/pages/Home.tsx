import React from 'react';
import LinkText from '../components/LinkText';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import SecondaryLinkText from '../components/SecondaryLinkText';
import Title from '../components/Title';
// import Ping from 'ping-url';

export const Home = () => {
  //   const [contests, setContests] = useState<Contest[]>([]);

  //   ContestList().then(res => {
  //     if (res.status === 'OK') {
  //       res.result?.sort((a: Contest, b: Contest) => b.startTimeSeconds - a.startTimeSeconds);
  //       setContests(res.result!);
  //
  //       console.log(contests.slice(0, 15));
  //     }
  //   });

  return (
    <>
      <Title text="Title" />

      <LinkText
        text="Link Text"
        onClick={() => {
          console.log('Filter');
        }}
      />

      <SecondaryLinkText
        text="Secondary Link Text"
        onClick={() => {
          console.log('Filter');
        }}
      />

      <PrimaryButton text="Primary Button" />

      <SecondaryButton text="Secondary Button" />
    </>
  );
};
