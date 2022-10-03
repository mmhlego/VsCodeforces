import * as vscode from 'vscode';
import { SidebarProvider } from './view/SidebarProvider';

export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);
  sidebarProvider.setContext(context);

  context.subscriptions.push(
    // vscode.commands.registerCommand('webview.open', () => {
    //   ViewLoader.showWebview(context);
    // }),

    vscode.window.registerWebviewViewProvider('vscodeforces-sidebar', sidebarProvider)

    // vscode.commands.registerCommand('extension.sendMessage', () => {
    //   vscode.window
    //     .showInputBox({
    //       prompt: 'Send message to Webview',
    //     })
    //     .then(result => {
    //       result &&
    //         ViewLoader.postMessageToWebview<CommonMessage>({
    //           type: 'COMMON',
    //           payload: result,
    //         });
    //     });
    // })
  );
}

export function deactivate() {}
