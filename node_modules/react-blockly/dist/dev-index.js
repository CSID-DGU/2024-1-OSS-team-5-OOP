var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
import { BlocklyWorkspace } from "./index";
import ConfigFiles from "./initContent/content";
import "./dev-index.css";
var TestEditor = function () {
    var _a = React.useState(ConfigFiles.INITIAL_TOOLBOX_JSON), toolboxConfiguration = _a[0], setToolboxConfiguration = _a[1];
    var _b = useState(""), generatedXml = _b[0], setGeneratedXml = _b[1];
    var _c = useState(""), generatedJson = _c[0], setGeneratedJson = _c[1];
    var _d = useState(""), generatedCode = _d[0], setGeneratedCode = _d[1];
    React.useEffect(function () {
        window.setTimeout(function () {
            setToolboxConfiguration(function (prevConfig) { return (__assign(__assign({}, prevConfig), { contents: __spreadArray(__spreadArray([], prevConfig.contents, true), [
                    {
                        kind: "category",
                        name: "Dynamically added category",
                        contents: [
                            { kind: "block", type: "text" },
                            {
                                kind: "block",
                                blockxml: '<block type="text_print"><value name="TEXT"><shadow type="text">abc</shadow></value></block>',
                            },
                        ],
                    },
                ], false) })); });
        }, 2000);
        window.setTimeout(function () {
            setToolboxConfiguration(function (prevConfig) { return (__assign(__assign({}, prevConfig), { contents: __spreadArray(__spreadArray([], prevConfig.contents.slice(0, prevConfig.contents.length - 1), true), [
                    __assign(__assign({}, prevConfig.contents[prevConfig.contents.length - 1]), { contents: [{ kind: "block", type: "text" }] }),
                ], false) })); });
        }, 4000);
        window.setTimeout(function () {
            setToolboxConfiguration(function (prevConfig) { return (__assign(__assign({}, prevConfig), { contents: __spreadArray([], prevConfig.contents.slice(0, prevConfig.contents.length - 1), true) })); });
        }, 10000);
    }, []);
    var onWorkspaceChange = React.useCallback(function (workspace) {
        workspace.registerButtonCallback("myFirstButtonPressed", function () {
            alert("button is pressed");
        });
        var newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
        setGeneratedXml(newXml);
        var newJson = JSON.stringify(Blockly.serialization.workspaces.save(workspace));
        setGeneratedJson(newJson);
        var code = javascriptGenerator.workspaceToCode(workspace);
        setGeneratedCode(code);
    }, []);
    var onXmlChange = React.useCallback(function (newXml) {
        setGeneratedXml(newXml);
    }, []);
    var onJsonChange = React.useCallback(function (newJson) {
        setGeneratedJson(JSON.stringify(newJson));
    }, []);
    var _e = useState("XML"), serialState = _e[0], setSerialState = _e[1];
    return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ style: { height: "600px", width: "800px" } }, { children: [_jsxs("button", __assign({ onClick: function (e) { return setSerialState(e.target.innerText == "XML" ? "XML" : "JSON"); } }, { children: [serialState == "XML" ? "JSON" : "XML", " "] })), _jsx(BlocklyWorkspace, { toolboxConfiguration: toolboxConfiguration, workspaceConfiguration: {
                            grid: {
                                spacing: 20,
                                length: 3,
                                colour: "#ccc",
                                snap: true,
                            },
                        }, initialXml: serialState === "XML" ? ConfigFiles.INITIAL_XML : undefined, initialJson: serialState === "JSON" ? ConfigFiles.INITIAL_JSON : undefined, className: "fill-height", onWorkspaceChange: onWorkspaceChange, onXmlChange: onXmlChange, onJsonChange: onJsonChange }, serialState)] })), _jsx("pre", { children: generatedXml }), _jsx("p", { children: generatedJson }), _jsx("textarea", { style: { height: "200px", width: "400px" }, value: generatedCode, readOnly: true })] }));
};
window.addEventListener("load", function () {
    var editor = React.createElement(TestEditor);
    var root = document.createElement("div");
    document.body.appendChild(root);
    ReactDOM.render(editor, root);
});
