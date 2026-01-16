// Global type declarations for SillyTavern-specific modules
// These modules exist at runtime in SillyTavern but not during build

declare module '../../../../variables.js' {
    const variables: {
        [key: string]: any;
    };
    export default variables;
}
