import * as vscode from 'vscode';
import * as path from 'path';
import {
  getAPIOnlyOnlineFriends,
  getAPIUserHandle,
  getAPIUserKey,
  getAPIUserSecret,
} from '../config';
import Message from './messages/messageTypes';

export class ViewLoader implements vscode.WebviewViewProvider {
  public static currentPanel?: vscode.WebviewPanel;

  private panel: vscode.WebviewPanel;
  private static context: vscode.ExtensionContext;
  private disposables: vscode.Disposable[];
  private problemId: string;

  constructor(context: vscode.ExtensionContext, problemId: string) {
    ViewLoader.context = context;
    this.disposables = [];
    this.problemId = problemId;

    this.panel = vscode.window.createWebviewPanel('reactApp', 'React App', vscode.ViewColumn.One, {
      enableScripts: true,
      retainContextWhenHidden: true,
      localResourceRoots: [
        vscode.Uri.file(path.join(ViewLoader.context.extensionPath, 'out', 'app')),
      ],
    });

    // render webview
    this.renderWebview();

    // listen messages from webview
    this.panel.webview.onDidReceiveMessage(
      (message: Message) => {
        if (message.type === 'NOTIFICATION') {
          vscode.window.showInformationMessage(message.payload);
        } else if (message.type === 'RELOAD') {
          vscode.commands.executeCommand('workbench.action.webview.reloadWebviewAction');
        } else if (message.type === 'COMMON') {
          const text = message.payload;
          vscode.window.showInformationMessage(`Received message from Webview: ${text}`);

          vscode.window.showQuickPick(['Python', 'Java', 'C++'], {
            canPickMany: false,
            onDidSelectItem(item) {
              console.log(item);
            },
            placeHolder: 'Select your preferred language',
            title: 'Open file to solve this problem:',
            ignoreFocusOut: true,
          });
        }
      },
      null,
      this.disposables
    );

    this.panel.onDidDispose(
      () => {
        this.dispose();
      },
      null,
      this.disposables
    );
  }
  resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext<unknown>,
    token: vscode.CancellationToken
  ): void | Thenable<void> {
    vscode.window.showErrorMessage('Method not implemented.');
  }

  static setContext(context: vscode.ExtensionContext) {
    ViewLoader.context = context;
  }

  static createNewWebview(problemId: string) {
    return new ViewLoader(ViewLoader.context, problemId);
  }

  private renderWebview() {
    const html = this.render();
    this.panel.webview.html = html;
  }

  static showWebview(context: vscode.ExtensionContext, problemId: string) {
    const cls = this;
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;
    if (cls.currentPanel) {
      cls.currentPanel.reveal(column);
    } else {
      cls.currentPanel = new cls(context, problemId).panel;
    }
  }

  static postMessageToWebview<T extends Message = Message>(message: T) {
    // post message from extension to webview
    const cls = this;
    cls.currentPanel?.webview.postMessage(message);
  }

  public dispose() {
    ViewLoader.currentPanel = undefined;

    // Clean up our resources
    this.panel.dispose();

    while (this.disposables.length) {
      const x = this.disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  render() {
    const bundleScriptPath = this.panel.webview.asWebviewUri(
      vscode.Uri.file(path.join(ViewLoader.context.extensionPath, 'out', 'app', 'bundle.js'))
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
          <title>${this.problemId}</title>
        </head>
    
        <body>
          <div id="problemView"></div>
          <script>
            const VsCode = acquireVsCodeApi();
            const apiUserHandle = "${userHandle}"
            const apiUserKey = "${userKey}"
            const apiUserSecret = "${userSecret}"
            const apiOnlyOnlineFriends = "${onlyOnlineFriends}"
			const problemId = "${this.problemId}"
          </script>
		  <script>console.log(apiUserHandle,apiUserKey,apiUserSecret,apiOnlyOnlineFriends)</script>
          <script src="${bundleScriptPath}"></script>
        </body>
      </html>
    `;
  }
}
