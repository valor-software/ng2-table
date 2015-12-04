export enum Ng2TableTheme {BS3 = 1, BS4 = 2}

export class Ng2TableConfig {
  private static _theme: Ng2TableTheme;
  static get theme():Ng2TableTheme {
    // hack as for now
    let w: any = window;
    if (w && w.__theme === 'bs4') {
      return Ng2TableTheme.BS4;
    }
    return (this._theme || Ng2TableTheme.BS3);
  }
  static set theme(v:Ng2TableTheme){
    this._theme = v;
  }
}
