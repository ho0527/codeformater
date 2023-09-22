import vscode from "vscode"

export default function main(context){
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("extension.formatcode",function(){
        let editor=vscode.window.activeTextEditor // Get active text editor

        if(editor){
            // Get full content of editor
            let document=editor.document
            let content=document.getText()

            // Format content by removing extra whitespaces
            let formatted=content.replace(/\s+/g,"")

            // Update document content
            editor.edit(function(event){
                event.replace(new vscode.Range(0,0,document.lineCount,0),formatted)
            })
        }else{ return }
    }))
}