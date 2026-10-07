import test from 'node:test';
import assert from 'node:assert/strict';
import { fr } from '../src/translations/fr.js';
import { en } from '../src/translations/en.js';

const normalizeTech = (value) => value.toLowerCase().replace('reactjs', 'react').replace('react.js', 'react').replace('design responsive', 'responsive design');
const ids = ['astrolab', 'talinty', 'ciceria', 'eldowallet', 'sweetees', 'sarabapp', 'championsmind', 'agcff', 'eekad'];

for (const [lang, t] of Object.entries({ fr, en })) {
  const experience = t.experience.jobs.flatMap((job) => job.projects);
  const project = (id) => experience.find((item) => item.id === id);
  test(`${lang}: all nine project cards agree with their experience technology lists`, () => {
    assert.deepEqual(Object.keys(t.projects).sort(), [...ids].sort());
    for (const id of ids) {
      assert.ok(project(id), `Missing experience: ${id}`);
      assert.deepEqual(t.projects[id].technologies.split(',').map((v) => normalizeTech(v.trim())).sort(), project(id).tech.map(normalizeTech).sort(), id);
    }
    assert.equal(t.experience.jobs[0].projects.length, 7);
    assert.equal(t.experience.jobs[0].role, 'Front-End Engineer');
    assert.equal(t.about.achievements.projectsValue, '9+');
    assert.equal(t.about.achievements.experienceValue, '3+');
    assert.equal(t.hero.subtitle, lang === 'fr' ? 'Ingénieur Frontend' : 'Frontend Engineer');
    assert.match(t.footer.rights, /2026/);
    assert.match(t.footer.description, lang === 'fr' ? /plus de 3 ans/ : /3\+ years/);
  });

  test(`${lang}: Eldo describes the full frontend scope and attributes the platform metric`, () => {
    const eldo = project('eldowallet');
    for (const text of [t.projects.eldowallet.description, eldo.description, eldo.achievements[0]]) {
      for (const keyword of ['Admin', 'Manager', 'Partner', 'React', 'TypeScript', 'Apple Wallet', 'Google Wallet']) assert.ok(text.includes(keyword), keyword);
    }
    for (const text of [t.projects.eldowallet.description, eldo.description]) {
      assert.match(text, lang === 'fr' ? /La plateforme annonce plus d'un million de cartes activées/ : /The platform reports over one million activated cards/);
    }
    assert.match(eldo.achievements[1], /frontend/);
    assert.match(eldo.achievements[1], /REST/);
    assert.match(eldo.achievements[1], lang === 'fr' ? /gestion des erreurs/ : /error handling/);
    assert.match(eldo.achievements[2], lang === 'fr' ? /visualisation de données/ : /data-visualization/);
    assert.doesNotMatch(JSON.stringify(eldo) + t.projects.eldowallet.description, /72\s*%|35\s*%|200\+|100\+|dataviz/);
  });

  test(`${lang}: other revised missions retain CV scope and tools`, () => {
    assert.match(project('championsmind').achievements[0], lang === 'fr' ? /Développement des interfaces/ : /Developed the interfaces/);
    assert.match(project('agcff').achievements.join(' '), /Claude, Cursor (?:et|and) Codex/);
    for (const text of [project('talinty').description, t.projects.talinty.description]) {
      assert.match(text, lang === 'fr' ? /présentant.*solution de recrutement assisté par IA/ : /presenting.*AI-assisted recruitment solution/);
    }
    for (const id of ['astrolab', 'talinty']) {
      assert.deepEqual(project(id).tech.slice(0, 3), ['Next.js', 'Motion', 'Shadcn/ui']);
      assert.doesNotMatch(JSON.stringify(project(id)) + t.projects[id].description, /Tailwind|React|HTML5|CSS3/);
    }
    assert.deepEqual(project('ciceria').tech.slice(0, 2), ['React', 'Tailwind CSS']);
    assert.doesNotMatch(JSON.stringify(project('ciceria')), /V2|OCR|INPI|JALPRO|Next\.js/);
    assert.doesNotMatch(JSON.stringify(project('sarabapp')) + t.projects.sarabapp.description, /measurably|mesurables|React SPA/);
  });
}

test('French and English experience chronology and project identities agree', () => {
  assert.deepEqual(fr.experience.jobs.map((job) => job.projects.map((p) => p.id)), en.experience.jobs.map((job) => job.projects.map((p) => p.id)));
  // Dates from the current CVs; TCC is additional portfolio-only experience.
  assert.deepEqual(fr.experience.jobs.slice(0, 4).map((job) => job.period), ["Jan. 2023 – Aujourd'hui", 'Fév. 2022 – Déc. 2022', 'Juil. 2021 – Oct. 2021', 'Jan. 2020 – Juil. 2020']);
  assert.deepEqual(en.experience.jobs.slice(0, 4).map((job) => job.period), ['Jan 2023 – Present', 'Feb 2022 – Dec 2022', 'Jul 2021 – Oct 2021', 'Jan 2020 – Jul 2020']);
  assert.equal(fr.contact.details.email.toLowerCase(), en.contact.details.email.toLowerCase());
  assert.equal(fr.contact.details.phone, en.contact.details.phone);
});
