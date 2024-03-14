import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BwFYNnvI.mjs';
import 'kleur/colors';
import 'html-escaper';
import { s as supabase, $ as $$Card, a as $$Layout } from './buscar_CLUZqvs8.mjs';

const $$Astro = createAstro("https://profwilliamarte.github.io");
const prerender = false;
const $$Electrodomenticos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Electrodomenticos;
  const categoria = 1;
  const nomCategoria = "Electrodomesticos";
  const { data: product, error } = await supabase.from("product").select("*").eq("categoria_id", categoria);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <h3 class="text-center py-5">${nomCategoria}</h3> <div class="row"> ${product && product.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "producto": item, "tipoCard": "col-md-4 col-lg-3 col-xl-2 mb-4" })}`)} </div> </div>` })}`;
}, "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/electrodomenticos.astro", void 0);

const $$file = "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/electrodomenticos.astro";
const $$url = "/supabase01/electrodomenticos";

export { $$Electrodomenticos as default, $$file as file, prerender, $$url as url };
