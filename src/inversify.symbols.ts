const Symbols: {[type: string]: any} = {
    LoaderStrategyFactory: Symbol('Factory<LoaderStrategy>'),
    LoaderStrategy: Symbol('LoaderStrategy'),

    UrlReplacerStrategyFactory: Symbol('Factory<UrlReplacerStrategy>'),
    UrlReplacerStrategy: Symbol('UrlReplacerStrategy'),

    Sitemapper: Symbol('Sitemapper'),
};

export default Symbols;