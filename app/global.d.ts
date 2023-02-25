type Message = typeof import('../src/view/messages/messageTypes');

type VSCode = {
  //   postMessage<T extends Message = Message>(message: T): void;
  postMessage(message: Message): void;
  getState(): any;
  setState(state: any): void;
};

declare const VsCode: VSCode;
// declare const VsCode: vscode;

declare const apiUserHandle: string;
declare const apiUserKey: string;
declare const apiUserSecret: string;
declare const apiOnlyOnlineFriends: boolean;

declare const problemId: string;
