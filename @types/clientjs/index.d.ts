declare module "clientjs" {
  class ClientJS {
    constructor();
    getBrowser(): string;
    getBrowserMajorVersion(): string;
    getOS(): string;
    getOSVersion(): string;
    getCurrentResolution(): string;
    getAvailableResolution(): string;
    getTimeZone(): string;
    getLanguage(): string;
  }
}
