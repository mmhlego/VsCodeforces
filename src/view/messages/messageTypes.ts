export type MessageType = 'RELOAD' | 'COMMON';

type CommonMessage = {
  type: 'COMMON';
  payload: string;
};

type NotificationMessage = {
  type: 'NOTIFICATION';
  payload: string;
};

type ProblemWindowMessage = {
  type: 'PROBLEM';
  payload: string;
};

type ReloadMessage = {
  type: 'RELOAD';
};

type Message = CommonMessage | NotificationMessage | ProblemWindowMessage | ReloadMessage;

export default Message;
