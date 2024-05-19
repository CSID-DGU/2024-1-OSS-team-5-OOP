import Blockly, { WorkspaceSvg } from "blockly";
import { RefObject } from "react";
export interface CommonBlocklyProps {
    initialXml?: string;
    initialJson?: object;
    toolboxConfiguration?: Blockly.utils.toolbox.ToolboxDefinition;
    workspaceConfiguration: Blockly.BlocklyOptions;
    onWorkspaceChange?: (workspace: WorkspaceSvg) => void;
    onImportXmlError?: (error: any) => void;
    onImportError?: (error: any) => void;
    onInject?: (newWorkspace: WorkspaceSvg) => void;
    onDispose?: (workspace: WorkspaceSvg) => void;
}
export interface BlocklyWorkspaceProps extends CommonBlocklyProps {
    className?: string;
    onXmlChange?: (xml: string) => void;
    onJsonChange?: (worksapceJson: object) => void;
}
export interface UseBlocklyProps extends CommonBlocklyProps {
    ref: RefObject<Element>;
}
