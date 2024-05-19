declare const ConfigFiles: {
    INITIAL_XML: string;
    INITIAL_JSON: {
        blocks: {
            languageVersion: number;
            blocks: {
                type: string;
                id: string;
                x: number;
                y: number;
                fields: {
                    TEXT: string;
                };
            }[];
        };
    };
    INITIAL_TOOLBOX_XML: string;
    INITIAL_TOOLBOX_JSON: {
        kind: string;
        contents: ({
            kind: string;
            name: string;
            colour: number;
            contents: ({
                kind: string;
                type: string;
                blockxml?: undefined;
            } | {
                kind: string;
                blockxml: string;
                type?: undefined;
            })[];
            custom?: undefined;
        } | {
            kind: string;
            name?: undefined;
            colour?: undefined;
            contents?: undefined;
            custom?: undefined;
        } | {
            kind: string;
            name: string;
            colour: number;
            contents: {
                kind: string;
                text: string;
                callbackKey: string;
            }[];
            custom?: undefined;
        } | {
            kind: string;
            name: string;
            custom: string;
            colour: number;
            contents?: undefined;
        })[];
    };
    INITIAL_TOOLBOX_CATEGORIES: ({
        name: string;
        blocks: ({
            type: string;
            values?: undefined;
            statements?: undefined;
        } | {
            type: string;
            values: {
                TIMES: {
                    type: string;
                    shadow: boolean;
                    fields: {
                        NUM: number;
                    };
                };
            };
            statements: {
                DO: {
                    type: string;
                    shadow: boolean;
                    values: {
                        TEXT: {
                            type: string;
                            shadow: boolean;
                            fields: {
                                TEXT: string;
                            };
                        };
                    };
                };
            };
        })[];
    } | {
        name: string;
        blocks: ({
            type: string;
            values?: undefined;
        } | {
            type: string;
            values: {
                TEXT: {
                    type: string;
                    shadow: boolean;
                    fields: {
                        TEXT: string;
                    };
                };
            };
        })[];
    })[];
};
export default ConfigFiles;
