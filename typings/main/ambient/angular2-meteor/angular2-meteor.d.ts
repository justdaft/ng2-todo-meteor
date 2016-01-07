// Compiled using typings@0.5.0
// Source: https://raw.githubusercontent.com/Urigo/angular2-meteor/master/typings/angular2-meteor.d.ts
declare module ngMeteor {
  class MeteorComponent {
    subscribe(name: string, ...rest: any[]): Meteor.SubscriptionHandle;
    autorun(runFunc: Function, autoBind?: boolean): Tracker.Computation;
    call(name: string, ...rest: any[]);
  }

  function bootstrap(appComponentType: /*Type*/ any, bindings?: Array<core.Type | core.Provider | any[]>): Promise<core.ApplicationRef>;
}

declare module "angular2-meteor" {
  export = ngMeteor;
}