type Message = import('../src/view/messages/messageTypes').Message;

type VSCode = {
  postMessage<T extends Message = Message>(message: T): void;
  getState(): any;
  setState(state: any): void;
};

declare const vscode: VSCode;

declare const apiUserHandle: string;
declare const apiUserKey: string;
declare const apiUserSecret: string;
declare const apiOnlyOnlineFriends: boolean;
