import * as vscode from 'vscode';
import * as path from 'path';
import {
  getAPIOnlyOnlineFriends,
  getAPIUserHandle,
  getAPIUserKey,
  getAPIUserSecret,
} from '../config';
import { CommonMessage, Message } from './messages/messageTypes';

export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;
  _context?: vscode.ExtensionContext;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public setContext(context: vscode.ExtensionContext) {
    this._context = context;
  }

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    webviewView.webview.onDidReceiveMessage(async (message: Message) => {
      switch (message.type) {
        case 'RELOAD': {
          vscode.commands.executeCommand('workbench.action.webview.reloadWebviewAction');
          break;
        }
        case 'COMMON': {
          const text = (message as CommonMessage).payload;
          vscode.window.showInformationMessage(`Received message from Webview: ${text}`);
          break;
        }
      }
    });

    // webviewView.onDidDispose(
    //   () => {
    //     this.dispose();
    //   },
    //   null,
    //   this.disposables
    // );
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    const bundleScriptPath = webview.asWebviewUri(
      vscode.Uri.file(path.join(this._context!.extensionPath, 'out', 'app', 'bundle.js'))
    );

    const userHandle = getAPIUserHandle();
    const userKey = getAPIUserKey();
    const userSecret = getAPIUserSecret();
    const onlyOnlineFriends = getAPIOnlyOnlineFriends();

    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>React App</title>
        </head>
    
        <body>
          <div id="root"></div>
          <script>
            const vscode = acquireVsCodeApi();
            const apiUserHandle = "${userHandle}"
            const apiUserKey = "${userKey}"
            const apiUserSecret = "${userSecret}"
            const apiOnlyOnlineFriends = "${onlyOnlineFriends}"
          </script>
		  <script>console.log(apiUserHandle,apiUserKey,apiUserSecret,apiOnlyOnlineFriends)</script>
          <script src="${bundleScriptPath}"></script>
        </body>
      </html>
    `;
  }
}
