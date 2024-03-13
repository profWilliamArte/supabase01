import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BwFYNnvI.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Layout } from './buscar_KGUXU8Lk.mjs';
/* empty css                          */

const $$Astro = createAstro("https://profwilliamarte.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-j7pv25f6> <div class="container py-5" data-astro-cid-j7pv25f6> <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" data-astro-cid-j7pv25f6> <div class="col-lg-7 p-3 p-lg-5 pt-lg-3" data-astro-cid-j7pv25f6> <h1 class="display-4 fw-bold lh-1 text-body-emphasis" data-astro-cid-j7pv25f6>Supabase</h1> <p class="lead" data-astro-cid-j7pv25f6>"¡Crea una aplicación escalable y segura con Supabase! Con nuestra base de datos remota y almacenamiento de imágenes en Supabase, junto con el modo server en el output de Astro y el adaptador Node para el deploy, tendrás todas las herramientas necesarias para desarrollar tu proyecto de forma eficiente. Supabase ofrece un plan gratuito perfecto para pruebas, y un plan PRO ideal para aplicaciones productivas y escalables. Únete a los más de 80 mil desarrolladores que han experimentado el crecimiento acelerado de Supabase. ¡Aprovecha al máximo tu tiempo y ahorra en inversión con Supabase!"</p> </div> <div class="col-lg-4 text-center" data-astro-cid-j7pv25f6> <img class="img-fluid" src="supabase1.png" alt="Logo supabase" data-astro-cid-j7pv25f6> </div> </div> </div> </div> ` })} `;
}, "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/index.astro", void 0);

const $$file = "C:/laragon/www/arsistema/guias/astro/supabase/supabase01/src/pages/index.astro";
const $$url = "/supabase01";

export { $$Index as default, $$file as file, $$url as url };
