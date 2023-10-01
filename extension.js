import vscode from "vscode"

export default function main(context){
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("extension.formatcode",function(){
        let editor=vscode.window.activeTextEditor // Get active text editor
        let lang=vscode.window.activeTextEditor.document.languageId

        if(editor){
            // Get full content of editor
            let content=editor.document.getText()

            // Format content by removing extra whitespaces
            let formatted=content.replace(/\s+/gi,"")

            // Update document content
            editor.edit(function(event){
                event.replace(new vscode.Range(0,0,editor.document.lineCount,0),formatted)
            })

            if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else if(lang=="html"){
            }else{
            }
        }else{ return }
    }))
}