/* Paylaşım görseli (og.png, 1200×630) ve apple-touch-icon.png (180×180) üretir.
   Headless Chrome kullanır; çıktılar public/ içine yazılır ve repoya eklenir.
   Çalıştırma: node scripts/images.mjs */
import { execFileSync } from 'node:child_process';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const tmp = await mkdtemp(join(tmpdir(), 'sd-img-'));
const TOOTH = 'M7.5 3C5 3 3.5 5 3.5 7.3c0 2.1.8 3.5 1.4 5 .7 1.6.9 3.5 1.3 5.6.3 1.6.8 3.1 2 3.1 1.3 0 1.6-1.7 1.9-3.4.3-1.6.6-3.1 1.9-3.1s1.6 1.5 1.9 3.1c.3 1.7.6 3.4 1.9 3.4 1.2 0 1.7-1.5 2-3.1.4-2.1.6-4 1.3-5.6.6-1.5 1.4-2.9 1.4-5C20.5 5 19 3 16.5 3c-1.9 0-2.6.9-4.5.9S9.4 3 7.5 3z';
const FONTS = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@500;700&display=block">';

async function shoot(name, html, w, h) {
  const file = join(tmp, `${name}.html`);
  await writeFile(file, `<!DOCTYPE html><html><head><meta charset="utf-8">${FONTS}<style>html,body{margin:0;width:${w}px;height:${h}px;overflow:hidden}</style></head><body>${html}</body></html>`);
  execFileSync(CHROME, ['--headless=new', '--hide-scrollbars', '--force-device-scale-factor=1', '--virtual-time-budget=5000',
    `--window-size=${w},${h}`, `--screenshot=${resolve('public', name)}`, pathToFileURL(file).href], { stdio: 'ignore' });
  console.log(`✓ public/${name}`);
}

await shoot('og.png', `
<div style="position:relative;width:1200px;height:630px;background:#f7f5ef;color:#13302f;font-family:'Plus Jakarta Sans';overflow:hidden">
  <div style="position:absolute;right:-90px;top:-60px;width:640px;height:700px;border-radius:46% 54% 50% 50%/48% 46% 54% 52%;
    background:radial-gradient(120% 90% at 20% 15%,#fff 0%,#eaf4f0 38%,#ebe6f5 68%,#f5e8dd 100%);box-shadow:inset -18px -24px 60px rgba(150,130,190,.18)"></div>
  <svg viewBox="0 0 24 24" style="position:absolute;right:150px;top:150px;width:300px;fill:rgba(255,255,255,.6);stroke:#1f6f68;stroke-width:.5;stroke-linejoin:round"><path d="${TOOTH}"/></svg>
  <div style="position:absolute;left:80px;top:72px;display:flex;align-items:center;gap:16px">
    <svg viewBox="0 0 24 24" style="width:44px;fill:none;stroke:#1f6f68;stroke-width:1.6;stroke-linejoin:round"><path d="${TOOTH}"/></svg>
    <span style="font-family:'Instrument Serif';font-size:44px">Sedefli</span>
    <span style="font-weight:700;letter-spacing:.14em;color:#1f6f68;font-size:20px">DİŞ</span>
  </div>
  <div style="position:absolute;left:80px;top:200px;font-family:'Instrument Serif';font-size:96px;line-height:1">
    <div>Sakin bir klinik,</div><div style="font-style:italic;color:#1f6f68">anlaşılır tedavi.</div>
  </div>
  <div style="position:absolute;left:80px;bottom:120px;font-size:24px;color:#2f4a48">İmplant · Şeffaf plak · Kanal tedavisi · Zirkonyum · Çocuk diş hekimliği</div>
  <div style="position:absolute;left:80px;bottom:64px;font-size:18px;font-weight:700;letter-spacing:.08em;color:#5d6e6b">DEMO PROJE · EGEMENTUNCER.DEV</div>
</div>`, 1200, 630);

await shoot('apple-touch-icon.png', `
<div style="width:180px;height:180px;display:grid;place-items:center;background:radial-gradient(120% 90% at 20% 15%,#fff 0%,#eaf4f0 45%,#ebe6f5 75%,#f5e8dd 100%)">
  <svg viewBox="0 0 24 24" style="width:110px;fill:none;stroke:#1f6f68;stroke-width:1.5;stroke-linejoin:round"><path d="${TOOTH}"/></svg>
</div>`, 180, 180);

await rm(tmp, { recursive: true, force: true });
