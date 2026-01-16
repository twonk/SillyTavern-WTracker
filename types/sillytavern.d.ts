// Type declaration for SillyTavern global object
// This provides type definitions for the SillyTavern extension API

declare global {
    namespace SillyTavern {
        interface Context {
            chat: any[];
            chatMetadata: Record<string, any>;
            saveMetadataDebounced(): void;
        }

        function getContext(): Context;
    }

    const SillyTavern: {
        getContext(): SillyTavern.Context;
    };
}

export {};
