# Blog System Documentation

## Otomatik Blog Sistemi Nasıl Çalışır

Bu sistem, yeni blog yazıları eklediğinizde otomatik olarak sitenizde görünmesini sağlar.

### Yeni Blog Yazısı Ekleme Adımları:

1. **Blog Yazısı Bileşenini Oluşturun**
   - `src/pages/` klasörüne yeni blog yazınızın TSX dosyasını ekleyin
   - Örnek: `YeniBlogYazisi.tsx`

2. **Blog Verisini Ekleyin**
   - `src/data/blogData.ts` dosyasını açın
   - `blogPosts` dizisine yeni blog yazınızın bilgilerini ekleyin:

```typescript
{
  id: 'unique-id',
  slug: 'yeni-blog-yazisi-2025',
  title: 'Blog Yazısı Başlığı',
  excerpt: 'Kısa açıklama...',
  author: 'Yazar Adı',
  date: '2025-01-XX',
  readTime: 'X min read',
  category: 'Kategori',
  tags: ['tag1', 'tag2'],
  image: '/path/to/image.jpg',
  featured: false,
  component: 'YeniBlogYazisi'
}
```

3. **Bileşeni Kaydedin**
   - `src/components/DynamicBlogPost.tsx` dosyasını açın
   - `componentMap` objesine yeni bileşeninizi ekleyin:

```typescript
const YeniBlogYazisi = lazy(() => import('../pages/YeniBlogYazisi'));

const componentMap: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  // ... mevcut bileşenler
  'YeniBlogYazisi': YeniBlogYazisi,
};
```

### Sistem Özellikleri:

✅ **Otomatik Routing**: Yeni blog yazıları otomatik olarak `/blog/slug` URL'inde erişilebilir
✅ **Dinamik Yükleme**: Blog yazıları lazy loading ile performanslı şekilde yüklenir
✅ **SEO Dostu**: Her blog yazısı kendi URL'ine sahip
✅ **Kategori ve Etiket Filtreleme**: Otomatik kategori ve etiket sistemi
✅ **Responsive Tasarım**: Tüm cihazlarda uyumlu
✅ **Arama Özelliği**: Blog yazılarında arama yapılabilir

### Dosya Yapısı:

```
src/
├── data/
│   └── blogData.ts          # Blog verilerinin merkezi deposu
├── components/
│   └── DynamicBlogPost.tsx  # Dinamik blog bileşeni
├── pages/
│   ├── BlogPage.tsx         # Ana blog sayfası
│   └── [BlogYazilari].tsx   # Bireysel blog yazıları
└── App.tsx                  # Routing yapılandırması
```

Bu sistem sayesinde artık sadece blog yazısını oluşturup veri dosyasına ekleyerek otomatik olarak sitenizde yayınlayabilirsiniz!