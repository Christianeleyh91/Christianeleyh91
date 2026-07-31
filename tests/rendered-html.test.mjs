import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders Christian Eleyh portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Christian Eleyh — Pianist &amp; Creative Developer<\/title>/i,
  );
  assert.match(html, /Christian/);
  assert.match(html, /Eleyh/);
  assert.match(html, /christian-avatar\.png/);
  assert.match(html, /Christianeleyh91/);
  assert.match(html, /github-profile-icon/);
  assert.match(html, /src="\/icons\/github\.svg"/);
  assert.match(
    html,
    /mail\.google\.com\/mail\/\?view=cm&amp;fs=1&amp;to=christian\.eleyh1391%40gmail\.com/,
  );
  assert.match(html, /logo_loading_2x\.png/);
  assert.match(html, /https:\/\/codeforces\.com\/profile\/Christianeleyh91/);
  assert.match(html, /https:\/\/quera\.org\/profile\/tvctpp/);
  assert.match(html, /https:\/\/codeforces\.com\/favicon\.ico/);
  assert.match(html, /\/s2\/favicons\?domain=quera\.org&amp;sz=64/);
  assert.match(html, /social-brand-icon/);
  assert.equal((html.match(/class="orbit-dot"/g) ?? []).length, 4);
  assert.doesNotMatch(html, /<span dir="ltr">DREAM<\/span>/);
  assert.match(
    html,
    /<bdi class="skill-name" dir="ltr">C\+\+<\/bdi>/,
  );
  assert.match(html, /favicon\.svg\?v=ce-3/);
  assert.match(html, /https:\/\/open\.spotify\.com\//);
  assert.doesNotMatch(html, /social-line/);
  assert.match(html, /ClientBoot-/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
