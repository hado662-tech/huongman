import { brand } from "../config.mjs";

export const hubSlug = "cam-nang-phun-moi-phun-may-thai-nguyen";
export const articlePath = (slug) => `blog/${slug}.html`;
export const link = (slug, label) => `<a href="/blog/${slug}">${label}</a>`;
export const sources = {
  fda: "https://www.fda.gov/cosmetics/cosmetic-products/tattoos-permanent-makeup-fact-sheet",
  aad: "https://www.aad.org/public/everyday-care/skin-care-basics/tattoos/tattoo-skin-reactions",
  aftercare: "https://leaflets.ekhuft.nhs.uk/micro-pigmentation-medical-tattooing-aftercare-advice/html/",
  removal: "https://www.fda.gov/consumers/consumer-updates/tattoo-removal-options-and-results",
  brows: "https://www.naaf.org/confidence-guide/eyebrows-tools-and-techniques/",
  leeds: "https://www.leedsth.nhs.uk/patients/resources/medical-tattooing/",
};
export function consultation(service) {
  return `<p>Muốn trao đổi về ${service} tại Thái Nguyên, bạn có thể gọi <a href="${brand.phoneHref}">${brand.phone}</a> hoặc <a href="/lien-he">đặt lịch tư vấn Hương Mận</a>. Hãy xác nhận lịch và phương án trước khi quyết định thực hiện.</p>`;
}
