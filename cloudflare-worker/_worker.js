// Basit Cloudflare Worker - Geo IP yönlendirmesi kaldırıldı
// Tüm istekleri direkt olarak geçir

export default {
  async fetch(request, env, ctx) {
    // Tüm istekleri direkt olarak geçir - hiçbir yönlendirme yapma
    return fetch(request);
  }
};
