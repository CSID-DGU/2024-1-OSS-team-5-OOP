import { WorkspaceSvg } from "blockly";
import { UseBlocklyProps } from "./BlocklyWorkspaceProps";
declare const useBlocklyWorkspace: ({ ref, initialXml, initialJson, toolboxConfiguration, workspaceConfiguration, onWorkspaceChange, onImportXmlError, onImportError, onInject, onDispose, }: UseBlocklyProps) => {
    workspace: WorkspaceSvg | null;
    xml: string | null;
    json: object | null;
};
export default useBlocklyWorkspace;
