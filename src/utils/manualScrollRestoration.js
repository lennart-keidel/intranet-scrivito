import * as Scrivito from "scrivito";

class ManualScrollRestoration {
  constructor() {
    this.hasRestored = false;
  }

  useHistory = (history) => {
    this.history = history;
    this.previousPathname = history.location.pathname;
    return this;
  };

  keyName = (pathname) => {
    return `scrollPosition__${pathname || window.location.pathname}`;
  };

  saveScrollTop = (pathname) => {
    const scrollTop =
      window.pageYOffset ||
      (typeof document !== "undefined" && document.documentElement.scrollTop);
    sessionStorage.setItem(this.keyName(pathname), scrollTop);
  };

  restoreScrollTop = (pathname) => {
    this.hasRestored = true;
    const scrollTop = sessionStorage.getItem(this.keyName(pathname));
    // NOTE: We can't disable scrollRestoration for IE so we need to use this timeout
    setTimeout(() => window.scrollTo(0, scrollTop), 100);
  };

  start = () => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.addEventListener("beforeunload", () => this.saveScrollTop(null));
    if (sessionStorage[this.keyName()]) {
      this.hasRestored = true;
      Scrivito.finishLoading().then(() => this.restoreScrollTop(null));
    }
    this.unlisten = this.history.listen((location, action) => {
      switch (action) {
        case "PUSH":
          if (this.previousPathname !== location.pathname) {
            this.saveScrollTop(this.previousPathname);
          }
          this.hasRestored = false;
          break;
        case "POP": {
          this.restoreScrollTop(location.pathname);
          this.saveScrollTop(this.previousPathname);
          break;
        }
        default:
      }
      this.previousPathname = location.pathname;
    });
  };

  stop = () => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
    window.removeEventListener("beforeunload", this.saveScrollTop);
    this.unlisten();
  };
}

// NOTE: Singleton class
// eslint-disable-next-line import/no-anonymous-default-export
export default new ManualScrollRestoration();
