import { expect, test } from '@playwright/test';
import { fr } from '../../src/translations/fr.js';
import { en } from '../../src/translations/en.js';

for (const [route, t] of [['/', en], ['/fr/', fr]]) {
  test(`updated project content appears in cards, experience and JSON-LD: ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator('#experience [role="button"][aria-label*="Astrolab Agency"]')).toContainText('Front-End Engineer');
    const graph = await page.locator('script[type="application/ld+json"]').evaluate((el) => JSON.parse(el.textContent)['@graph']);
    for (const [id, project] of Object.entries(t.projects)) {
      await expect(page.locator(`#project-${id} .project-card-back`)).toContainText(project.description);
      expect(graph.find((item) => item['@type'] === 'CreativeWork' && item['@id'].endsWith(`#project-${id}`)).description).toBe(project.description);
    }
    await page.locator('#experience [role="button"][aria-label*="Astrolab Agency"]').click();
    const dialog = page.getByRole('dialog');
    for (const project of t.experience.jobs[0].projects) {
      const card = dialog.locator('.modal-project-card').filter({ has: page.getByRole('heading', { name: project.name, exact: true }) });
      await expect(card).toContainText(project.description);
      for (const achievement of project.achievements) await expect(card).toContainText(achievement);
    }
    await expect(dialog).not.toContainText(/72\s*%|35\s*%|dataviz|Designed and built a dual-portal|Conception d'une plateforme e-learning/);
  });
}
