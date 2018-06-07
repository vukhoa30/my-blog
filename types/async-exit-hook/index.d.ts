declare module 'async-exit-hook' {
  declare const exitHook: (cb: (done: Function) => any) => void;
  export = exitHook;
}
