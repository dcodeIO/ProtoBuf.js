type pbjsCallback = (err: Error | null, output?: string) => void;

export interface IPBJSOptions {
    target: string;
    out: string;
    path: string;
    wrap: string;
    dependency: string;
    root: string;
    lint: string;
    create: boolean;
    encode: boolean;
    decode: boolean;
    verify: boolean;
    convert: boolean;
    delimited: boolean;
    beautify: boolean;
    comments: boolean;
    es6: boolean;
    sparse: boolean;
    "keep-case": boolean;
    "force-long": boolean;
    "force-number": boolean;
    "force-enum-string": boolean;
    "force-message": boolean;
}

/**
 * Runs pbjs as API.
 * @param {IPBJSOptions} options Command line arguments
 * @param {?{content: (string | Object), name: ?string}} source Object containing the sourcecode and filename
 * @param {function(?Error, string=)} [callback] Optional completion callback
 * @returns {number|undefined} Exit code, if known
 */
export function pbjs(options: IPBJSOptions, source?: { content: string | object, name?: string }, callback?: pbjsCallback): number | undefined;

/**
 * Runs pbjs programmatically.
 * @param {string[]} args Command line arguments
 * @param {function(?Error, string=)} [callback] Optional completion callback
 * @returns {number|undefined} Exit code, if known
 */
export function main(args: string[], callback?: pbjsCallback): number | undefined;
