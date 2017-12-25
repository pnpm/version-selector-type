export = versionSelectorType

declare function versionSelectorType (selector: string): null | {
  normalized: string,
  type: 'version' | 'range' | 'tag',
}

declare namespace versionSelectorType {
  export function strict (selector: string): null | {
    normalized: string,
    type: 'version' | 'range' | 'tag',
  }
}
