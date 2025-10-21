# Multi-Language FAQ System

Bu dizin, her dil için 200+ FAQ içeriğini barındırır.

## Yapı

```
faq/
├── de/          # Almanca FAQs
├── fr/          # Fransızca FAQs
├── ja/          # Japonca FAQs
├── es/          # İspanyolca FAQs
├── pt/          # Portekizce FAQs
├── ru/          # Rusça FAQs
└── ar/          # Arapça FAQs
```

## Kullanım

### FAQ Üretimi

```bash
# Almanca için 200 FAQ üret
node scripts/generateFAQs.js de 200

# Fransızca için 200 FAQ üret
node scripts/generateFAQs.js fr 200
```

### Entegrasyon

FAQ'lar `src/contexts/faqTranslations.ts` dosyasına otomatik olarak entegre edilecek.

## Format

Her FAQ şu formatta:

```json
{
  "id": 1,
  "question": "Soru metni",
  "answer": "200-250 kelimelik detaylı cevap",
  "category": "Kategori"
}
```

## Dil Özellikleri

- **de**: Ciddi, güven odaklı, Tech Advisor tarzı
- **fr**: Zarif, editoryal, Clubic tarzı  
- **ja**: Kısa, açıklayıcı, Nikkei Tech tarzı
- **es**: Enerjik, eğitici, Xataka tarzı
- **pt**: Samimi, rehber tonu, TecMundo tarzı
- **ru**: Analitik, profesyonel, TJournal tarzı
- **ar**: Açıklayıcı, güven verici, ArabHardware tarzı
