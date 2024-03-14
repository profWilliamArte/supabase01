import '@astrojs/internal-helpers/path';
import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_BwFYNnvI.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/supabase01/astro/hoisted.C86bGMte.js"}],"styles":[{"type":"external","src":"/supabase01/astro/buscar.xGcgtWkZ.css"}],"routeData":{"route":"/buscar","isIndex":false,"type":"page","pattern":"^\\/buscar\\/?$","segments":[[{"content":"buscar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/buscar.astro","pathname":"/buscar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/supabase01/astro/hoisted.C86bGMte.js"}],"styles":[{"type":"external","src":"/supabase01/astro/buscar.xGcgtWkZ.css"}],"routeData":{"route":"/deportes","isIndex":false,"type":"page","pattern":"^\\/deportes\\/?$","segments":[[{"content":"deportes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/deportes.astro","pathname":"/deportes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/supabase01/astro/hoisted.C86bGMte.js"}],"styles":[{"type":"external","src":"/supabase01/astro/buscar.xGcgtWkZ.css"}],"routeData":{"route":"/detalle2","isIndex":false,"type":"page","pattern":"^\\/detalle2\\/?$","segments":[[{"content":"detalle2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/detalle2.astro","pathname":"/detalle2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/supabase01/astro/hoisted.C86bGMte.js"}],"styles":[{"type":"external","src":"/supabase01/astro/buscar.xGcgtWkZ.css"}],"routeData":{"route":"/electrodomenticos","isIndex":false,"type":"page","pattern":"^\\/electrodomenticos\\/?$","segments":[[{"content":"electrodomenticos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/electrodomenticos.astro","pathname":"/electrodomenticos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/supabase01/astro/hoisted.C86bGMte.js"}],"styles":[{"type":"external","src":"/supabase01/astro/buscar.xGcgtWkZ.css"}],"routeData":{"route":"/heladosypostres","isIndex":false,"type":"page","pattern":"^\\/heladosypostres\\/?$","segments":[[{"content":"heladosypostres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/heladosypostres.astro","pathname":"/heladosypostres","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/supabase01/astro/hoisted.C86bGMte.js"}],"styles":[{"type":"external","src":"/supabase01/astro/buscar.xGcgtWkZ.css"}],"routeData":{"route":"/papeleria","isIndex":false,"type":"page","pattern":"^\\/papeleria\\/?$","segments":[[{"content":"papeleria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/papeleria.astro","pathname":"/papeleria","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/supabase01/astro/hoisted.C86bGMte.js"}],"styles":[{"type":"inline","content":"body{margin-top:50px}\n"},{"type":"external","src":"/supabase01/astro/buscar.xGcgtWkZ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://profwilliamarte.github.io","base":"/supabase01","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/buscar.astro",{"propagation":"in-tree","containsHead":true}],["C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/deportes.astro",{"propagation":"in-tree","containsHead":true}],["C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/detalle/[id].astro",{"propagation":"in-tree","containsHead":true}],["C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/detalle2.astro",{"propagation":"in-tree","containsHead":true}],["C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/electrodomenticos.astro",{"propagation":"in-tree","containsHead":true}],["C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/heladosypostres.astro",{"propagation":"in-tree","containsHead":true}],["C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/papeleria.astro",{"propagation":"in-tree","containsHead":true}],["C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/layout/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/buscar@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/deportes@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/detalle/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/detalle2@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/electrodomenticos@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/heladosypostres@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/papeleria@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/deportes.astro":"chunks/pages/deportes_OwoF09Lm.mjs","/src/pages/detalle2.astro":"chunks/pages/detalle2_DQ1s9xV2.mjs","/src/pages/electrodomenticos.astro":"chunks/pages/electrodomenticos_DZG8x7sN.mjs","/src/pages/heladosypostres.astro":"chunks/pages/heladosypostres_DiHQ9_AY.mjs","/src/pages/index.astro":"chunks/pages/index_AxzK-36w.mjs","/node_modules/astro/dist/assets/endpoint/node.js":"chunks/pages/node_Br-m5E8k.mjs","/src/pages/papeleria.astro":"chunks/pages/papeleria_DqggzhKD.mjs","/src/pages/detalle/[id].astro":"chunks/prerender_DSJo2FR5.mjs","\u0000@astrojs-manifest":"manifest_DpI39kRj.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"chunks/node_BmY7iaF8.mjs","\u0000@astro-page:src/pages/buscar@_@astro":"chunks/buscar_CgQz1hLI.mjs","\u0000@astro-page:src/pages/deportes@_@astro":"chunks/deportes_DHLDV09-.mjs","\u0000@astro-page:src/pages/detalle/[id]@_@astro":"chunks/_id__Qnqpn6AR.mjs","\u0000@astro-page:src/pages/detalle2@_@astro":"chunks/detalle2_BLJU9ok3.mjs","\u0000@astro-page:src/pages/electrodomenticos@_@astro":"chunks/electrodomenticos_CX3YBDtP.mjs","\u0000@astro-page:src/pages/heladosypostres@_@astro":"chunks/heladosypostres_CBhrT7iI.mjs","\u0000@astro-page:src/pages/papeleria@_@astro":"chunks/papeleria_CUHjbRuf.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DCZkt33u.mjs","/astro/hoisted.js?q=0":"astro/hoisted.C86bGMte.js","astro:scripts/before-hydration.js":""},"assets":["/supabase01/astro/buscar.xGcgtWkZ.css","/supabase01/favicon.svg","/supabase01/logo.png","/supabase01/supabase1.png","/supabase01/astro/hoisted.C86bGMte.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
