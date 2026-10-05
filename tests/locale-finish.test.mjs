import test from 'node:test';
import assert from 'node:assert/strict';
import {strategicResources} from '../src/roadmap/platform.mjs';
import {renderCampusHome} from '../src/campus.mjs';
import {locales} from '../src/i18n.mjs';

const nonEnglish = locales.filter(l => !['tr', 'en'].includes(l));

test('strategic resources are localized in every language instead of falling back to English', () => {
  for (const r of strategicResources) {
    for (const field of ['title', 'summary']) {
      for (const l of nonEnglish) {
        assert.ok(r[field][l]?.trim(), `${r.id}.${field}.${l} present`);
        assert.notEqual(r[field][l], r[field].en, `${r.id}.${field}.${l} is not the English text`);
      }
    }
  }
});

test('strategic resource titles are short catalogue labels, not full article titles', () => {
  for (const r of strategicResources) for (const l of locales) assert.ok(r.title[l].length <= 110, `${r.id}.${l}: ${r.title[l].length}`);
});

test('every page head carries a social preview image with dimensions', () => {
  for (const base of ['/', '/MARSAM/']) for (const l of locales) {
    const html = renderCampusHome(l, base);
    assert.match(html, /<meta property="og:image" content="[^"]*assets\/og-card\.png">/, `${base}${l} og:image`);
    assert.match(html, /<meta property="og:image:width" content="1200">/);
    assert.match(html, /<meta name="twitter:card" content="summary_large_image">/);
  }
});

test('visible copy no longer announces a planned, preview or establishment-stage centre', () => {
  const banned = /Kuruluş hazırlığı|kurulması planlanan|planlanan merkez|Dijital önizleme|Geliştirme önizlemesi|web taslağı|henüz resmî olarak kurulmuş|Digital preview|Development preview|planned within|not yet a formally established|In Vorbereitung|geplant|Vorschau|筹建|预览|Подготовка к созданию|планируем|Предварительная версия|قيد التأسيس|مزمع|معاينة|Dalam persiapan|direncanakan|Pratinjau|Dalam persediaan|dirancang|Pratonton/i;
  for (const base of ['/', '/MARSAM/']) for (const l of locales) {
    const visible = renderCampusHome(l, base).replace(/<script[\s\S]*?<\/script>|<[^>]+>/g, ' ');
    assert.doesNotMatch(visible, banned, `${base}${l}`);
  }
});
