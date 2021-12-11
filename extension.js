const vscode = require('vscode');

function activate(context) {
	let disposable = vscode.commands.registerCommand('toggle-eslint.toggle', function () {
		const configuration = vscode.workspace.getConfiguration()
		configuration.update('eslint.enable', !configuration.eslint.enable, vscode.ConfigurationTarget.Global)

		vscode.window.showInformationMessage(configuration.eslint.enable ? 'Disabled ESLint' : 'Enabled ESLint');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
