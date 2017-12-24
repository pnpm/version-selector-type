declare function versionSelectorType (selector: string, loose?: boolean): 'version' | 'range' | 'tag' | null

export = versionSelectorType
