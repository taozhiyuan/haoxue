import '../stencil.core';
export declare class Icon {
    el: HTMLElement;
    private svgContent;
    private isVisible;
    isServer: boolean;
    resourcesUrl: string;
    mode: string;
    doc: Document;
    win: any;
    color: string;
    /**
     * Specifies the label to use for accessibility. Defaults to the icon name.
     */
    ariaLabel: string;
    /**
     * Specifies which icon to use on `ios` mode.
     */
    ios: string;
    /**
     * Specifies which icon to use on `md` mode.
     */
    md: string;
    /**
     * Specifies which icon to use from the built-in set of icons.
     */
    name: string;
    /**
     * Specifies the exact `src` of an SVG file to use.
     */
    src: string;
    /**
     * A combination of both `name` and `src`. If a `src` url is detected
     * it will set the `src` property. Otherwise it assumes it's a built-in named
     * SVG and set the `name` property.
     */
    icon: string;
    /**
     * The size of the icon.
     * Available options are: `"small"` and `"large"`.
     */
    size: string;
    componentWillLoad(): void;
    waitUntilVisible(el: HTMLElement, rootMargin: string, cb: Function): void;
    loadIcon(): void;
    getUrl(): string;
    getNamedUrl(name: string): string;
    hostData(): {
        class: {};
    };
    render(): JSX.Element;
}
export declare function getName(name: string, mode: string, ios: string, md: string): string;
export declare function getSrc(src: string): string;
export declare function isValid(elm: HTMLElement): boolean;
