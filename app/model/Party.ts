import Member from './Member';

export default interface Party {
  contestId: number;
  members: Member[];
  participantType: 'CONTESTANT' | 'PRACTICE' | 'VIRTUAL' | 'MANAGER' | 'OUT_OF_COMPETITION';
  teamId: number;
  teamName: string;
  ghost: Boolean;
  room: number;
  startTimeSeconds: number;
}
