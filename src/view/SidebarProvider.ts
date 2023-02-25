import * as vscode from 'vscode';
import * as path from 'path';
import {
  getAPIOnlyOnlineFriends,
  getAPIUserHandle,
  getAPIUserKey,
  getAPIUserSecret,
} from '../config';
import Message from './messages/messageTypes';
import { ViewLoader } from './ViewLoader';

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
        case 'NOTIFICATION': {
          vscode.window.showInformationMessage('Sidebar Provider');
          break;
        }
        case 'PROBLEM': {
          const problemWebView = new ViewLoader(this._context!, message.payload);

          //   this._context!.subscriptions.push(
          vscode.window.registerWebviewViewProvider('vscodeforces-problemview', problemWebView);
          //   );
          break;
        }
        case 'RELOAD': {
          vscode.commands.executeCommand('workbench.action.webview.reloadWebviewAction');
          break;
        }
        case 'COMMON': {
          const text = message.payload;
          vscode.window.showInformationMessage(`Received message from Webview: ${text}`);
          break;
        }
      }
    });
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
          <title>VSCODEFORCES</title>
        </head>
    
        <body>
          <div id="root"></div>
          <script>
            const VsCode = acquireVsCodeApi();
            const apiUserHandle = "${userHandle}"
            const apiUserKey = "${userKey}"
            const apiUserSecret = "${userSecret}"
            const apiOnlyOnlineFriends = "${onlyOnlineFriends}"
			const problemId = ""
          </script>
		  <script>console.log(apiUserHandle,apiUserKey,apiUserSecret,apiOnlyOnlineFriends)</script>
          <script src="${bundleScriptPath}"></script>
        </body>
      </html>
    `;
  }
}
export function setContext(context: Mocha.SuiteFunction) {
  throw new Error('Function not implemented.');
}
