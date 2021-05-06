declare module '@module-federation/concat-runtime' {
  export default class ModuleFederationConcatRuntime {
    constructor();
    apply(compiler: Compiler): void;
  }
}
