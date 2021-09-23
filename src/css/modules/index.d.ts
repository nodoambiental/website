type CSSModule = {
    readonly [key: string]: string;
};

declare module "*!css-module" {
    const content: CSSModule;
    export default content;
}

declare module "@workshop/styles" {
    export class Module {
        readonly home: CSSModule;
        readonly index: CSSModule;
    }
}
