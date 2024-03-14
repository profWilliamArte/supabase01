import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_BwFYNnvI.mjs';
import 'kleur/colors';
import 'html-escaper';
import { s as supabase, $ as $$Card, a as $$Layout } from './buscar_CLUZqvs8.mjs';

const $$Astro = createAstro("https://profwilliamarte.github.io");
const prerender = false;
const $$Detalle2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Detalle2;
  const id = Astro2.url.searchParams.get("id") || "";
  const { data: product, error } = await supabase.from("product").select("*").eq("id", id);
  const rutaimg = "https://nxmsewmsmngxkuvpmrnh.supabase.co/storage/v1/object/public/tuzona/productos/";
  const idcat = product[0].categoria_id;
  const { data: product2, error2 } = await supabase.from("product").select("*").eq("categoria_id", idcat).range(0, 7);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <h3 class="text-center py-3">Detalle del producto</h3> <div class="card p-4"> <div class="row"> <div class="col-md-4"> <img${addAttribute(rutaimg + product[0].imagen, "src")}${addAttribute(product[0].nombre, "alt")} class="img-fluid img-thumbnail"> </div> <div class="col-md-6"> <h4>${product[0].nombre}</h4> <h5><b>Categoria: </b>${product[0].categoria}</h5> <h5><b>Disponibilidad: </b>${product[0].disponible}</h5> <p class="py-2"><b>Descripción: </b>${product[0].descripcion}</p> <div class="d-flex justify-content-between"> <h4 class="text-danger"><b>Precio: </b>${product[0].precio}</h4> <button onclick="window.history.back()" class="btn btn-success">Regresar</button> </div> </div> </div> </div> <div class="row"> <h3 class="text-center py-3">Productos en oferta</h3> ${product && product2.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "producto": item, "tipoCard": "col-md-4 col-lg-3  mb-4" })}`)} </div> </div>` })}`;
}, "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/detalle2.astro", void 0);

const $$file = "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/detalle2.astro";
const $$url = "/supabase01/detalle2";

export { $$Detalle2 as default, $$file as file, prerender, $$url as url };
