import { COMPANY } from './constants'

export const generateWhatsAppLink = (message) => {
  const base = `https://wa.me/${COMPANY.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const generateWhatsAppFromForm = (data) =>
  generateWhatsAppLink(
    `Halo Tim Incaf,\n\nNama: ${data.name}\nPerusahaan: ${data.company}\nEmail: ${data.email}\nNo. HP: ${data.phone}\n\nKebutuhan: ${data.category}\nProduk: ${data.product}\n\nPesan:\n${data.message}`
  )
