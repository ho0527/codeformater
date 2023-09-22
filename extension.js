import vscode from "vscode"

function activate(context){
    let disposable=vscode.commands.registerTextEditorCommand("extension.formatcode",function(){
        // Get active text editor
        let editor=vscode.window.activeTextEditor;

        if(editor){
            // Get full content of editor
            let document=editor.document
            let content=document.getText()

            // Format content by removing extra whitespaces
            let formatted=content.replace(/\s+/g,"")

            // Update document content
            editor.edit(function(event){
                event.replace(new vscode.Range(0,0,document.lineCount,0),formatted);
            })
        }else{
            return
        }
    })
    context.subscriptions.push(disposable)
}

module.exports={ activate }