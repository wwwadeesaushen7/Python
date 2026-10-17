import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const folder=mkdtempSync(join(tmpdir(),'cutline-browser-'));
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
page.setDefaultTimeout(10000);
const errors=[];
page.on('pageerror',error=>errors.push(error.message));
try {
  await page.goto(process.env.APP_URL||'http://127.0.0.1:5173');
  await page.getByRole('heading',{name:'Long video. Endless potential.'}).waitFor();
  await page.getByRole('button',{name:'Create my clips'}).click();
  await page.getByRole('alert').filter({hasText:'Choose a video'}).waitFor();
  await page.getByRole('tab',{name:'YouTube link'}).click();
  await page.getByRole('textbox',{name:'YouTube video link'}).fill('https://example.com/video');
  await page.getByRole('button',{name:'Create my clips'}).click();
  await page.getByRole('alert').filter({hasText:'valid YouTube video link'}).waitFor();
  await page.locator('.nav-item').filter({hasText:'Caption styles'}).click();
  await page.locator('.template-card').filter({hasText:'Pop'}).click();
  await page.getByRole('status').filter({hasText:'Pop is your default'}).waitFor();
  await page.locator('.nav-item').filter({hasText:'Create clips'}).click();
  assert(await page.getByRole('button',{name:'Pop caption style'}).evaluate(e=>e.classList.contains('selected')));
  await page.getByRole('switch',{name:'Auto captions',exact:true}).click();
  assert.equal(await page.locator('.caption-style-select').count(),0);
  await page.getByRole('button',{name:'How Cutline works'}).click();
  await page.getByRole('dialog').waitFor();
  await page.keyboard.press('Escape');
  assert.equal(await page.getByRole('dialog').count(),0);
  await page.getByRole('tab',{name:'Upload a video'}).click();
  const video=join(folder,'short.mp4');
  execFileSync('ffmpeg',['-v','error','-y','-f','lavfi','-i','color=blue:s=160x90:r=5','-f','lavfi','-i','sine=frequency=440:sample_rate=16000','-t','1','-c:v','libx264','-c:a','aac',video]);
  await page.locator('input[type=file]').setInputFiles(video);
  await page.getByRole('alert').filter({hasText:'longer than 3 minutes'}).waitFor();
  for (const width of [320,390,768,1440]) {
    await page.setViewportSize({width,height:900});
    await page.waitForTimeout(300);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}px`);
  }
  await page.setViewportSize({width:390,height:844});
  await page.getByRole('button',{name:'Open navigation'}).click();
  await page.locator('.nav-item').filter({hasText:'My projects'}).click();
  await page.getByRole('heading',{name:'Good stories live here.'}).waitFor();
  assert.deepEqual(errors,[]);
  console.log('Browser smoke passed: source validation, caption selection, toggles, dialog, video duration, mobile navigation, and four responsive widths.');
} finally {
  await browser.close();
  rmSync(folder,{recursive:true,force:true});
}
