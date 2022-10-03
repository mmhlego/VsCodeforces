import * as vscode from 'vscode';

export const getAPIUserHandle = () => {
  return vscode.workspace.getConfiguration('VSCodeforces').get('userHandle', '');
};

export const getAPIUserKey = () => {
  return vscode.workspace.getConfiguration('VSCodeforces').get('userKey', '');
};

export const getAPIUserSecret = () => {
  return vscode.workspace.getConfiguration('VSCodeforces').get('userSecret', '');
};

export const getAPIOnlyOnlineFriends = () => {
  return vscode.workspace.getConfiguration('VSCodeforces').get('showOnlyOnlineFriends', false);
};
