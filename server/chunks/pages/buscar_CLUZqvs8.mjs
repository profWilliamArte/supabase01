import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderTransition, i as renderSlot } from '../astro_BwFYNnvI.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                           */
import { createClient } from '@supabase/supabase-js';

const $$Astro$5 = createAstro("https://profwilliamarte.github.io");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$4 = createAstro("https://profwilliamarte.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar navbar-expand-lg bg-black fixed-top" data-bs-theme="dark"> <div class="container-fluid"> <a class="navbar-brand" href="#"><img src="logo.png" alt="logo" width="250"></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-2"> <a class="btn btn-success" aria-current="page" href="/supabase01/">Home</a> <a class="btn btn-success" href="/supabase01/electrodomenticos">Electrodomesticos</a> <a class="btn btn-success" href="/supabase01/deportes">Deportes</a> <a class="btn btn-success" href="/supabase01/heladosypostres">Helados y Postres</a> <a class="btn btn-success" href="/supabase01/papeleria">Papeleria</a> </ul> <form class="d-flex" role="search" action="/supabase01/buscar" method="get"> <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="txtBuscar"> <button class="btn btn-outline-success" type="submit">Search</button> </form> </div> </div> </nav>`;
}, "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://profwilliamarte.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer mt-auto py-3 bg-black text-white-50"> <div class="container"> <p class="text-center py-3">Ar sistema / proyecto supabase</p> </div> </footer>`;
}, "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://profwilliamarte.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/supabase01/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-light text-black-50"> ${renderComponent($$result, "Header", $$Header, {})} <main${addAttribute(renderTransition($$result, "y5pnrmfq", "slide", ""), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/layout/Layout.astro", "self");

process.env.SUPABASE_URL;
process.env.SUPABASE_KEY;
                                     
const supabase = createClient('https://rngcfmfbftksaprimgbd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZ2NmbWZiZnRrc2FwcmltZ2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MzExMTksImV4cCI6MjAyNTAwNzExOX0.og6h2hQyigOmMFJ3DDg4C4dRxqkcqThpkTkSW7ngKa4');

const $$Astro$1 = createAstro("https://profwilliamarte.github.io");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { producto, tipoCard } = Astro2.props;
  const rutaimg = "https://nxmsewmsmngxkuvpmrnh.supabase.co/storage/v1/object/public/tuzona/productos/";
  const foto = `${rutaimg}${producto.imagen}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(tipoCard, "class")}> <div class="card h-100"> <div class="card-header p-0"> <img${addAttribute(foto, "src")}${addAttribute(producto.nombre, "alt")} class="img-fluid"> </div> <div class="card-body d-flex flex-column justify-content-between align-items-center text-center"> <p>${producto.nombre}</p> <p class="text-danger"><b>Precio: </b>${producto.precio}</p> </div> <div class="card-footer text-center"> <a${addAttribute(`/detalle/${producto.id}`, "href")} class="btn btn-danger btn-sm">Ver Detalle</a> <a${addAttribute(`/detalle2?id=${producto.id}`, "href")} class="btn btn-info btn-sm">Ver Detalle</a> </div> </div> </div>`;
}, "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/components/Card.astro", void 0);

const $$Astro = createAstro("https://profwilliamarte.github.io");
const prerender = false;
const $$Buscar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Buscar;
  const search = Astro2.url.searchParams.get("txtBuscar") || "";
  const { data: product, error } = await supabase.from("product").select("*").filter("nombre", "ilike", `%${search}%`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <h3 class="text-center py-5">${search}</h3> <div class="container"> <div class="row"> ${product && product.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "producto": item, "tipoCard": "col-md-4 col-lg-3 col-xl-2 mb-4" })}`)} </div> </div> </div> ` })}`;
}, "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/buscar.astro", void 0);

const $$file = "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/buscar.astro";
const $$url = "/supabase01/buscar";

const buscar = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Buscar,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Card as $, $$Layout as a, buscar as b, supabase as s };
