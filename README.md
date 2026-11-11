# DMS Viewer — public privacy-policy site

Prepared 11 November 2026. Policy and extension version: **1.0.0**.

This is a static website package for hosting the existing privacy policy publicly. It is not the extension package. No private signing key, issued license, client report, extension parser, generator or browser data is included.

## Files

- `index.html`: the privacy policy as the website home page.
- `privacy-policy.html`: the same policy at a stable named URL.
- `disclaimer.html`: linked terms/disclaimer.
- `pdpa-official-references.html`: linked official PDPA reference page.
- `legal.css`: shared presentation.
- `legal-page.js`: the existing guarded legal-page helper; it does not call extension APIs when unavailable on a normal public webpage.
- `.nojekyll`: GitHub Pages static-file marker.

The legal pages match the corresponding extension pages.

## Review before publishing

The confirmed public publisher name is Ding Lab, and the privacy and support contact is dzwong97@gmail.com. A public policy must match your actual practices.

Keep a consistent finalized copy in both the public website and extension. Do not publish the full development project or any private issuer files.

## Publish with GitHub Pages

1. Extract this ZIP.
2. Create a separate GitHub repository, for example `dms-viewer-policy`. On GitHub Free, use a public repository for Pages.
3. Upload the extracted website files to the repository root. Upload the files themselves, not this ZIP and not the full extension project. Ensure `index.html` is at the publishing root.
4. Open repository Settings → Pages. Choose Deploy from a branch, branch `main`, folder `/(root)`, then Save.
5. Wait for Pages deployment to finish and use the URL shown in the repository's Pages settings.
6. Open the public policy URL in an InPrivate window to check that no sign-in is needed and the linked legal pages/style load.
7. Paste the public HTTPS policy URL into the Edge Store Privacy Policy URL field.

Example URL format only — replace YOUR-USERNAME and the repository name:

`https://YOUR-USERNAME.github.io/dms-viewer-policy/privacy-policy.html`

The root URL also displays the policy because `index.html` is included. You can use an existing public HTTPS website instead; upload the same website files together so relative links continue to work.

A ZIP on your computer is not a public URL. This package has not been uploaded or published, and it does not automatically create a GitHub repository or website.

## Official instructions

- GitHub Pages setup: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Edge privacy policy requirements: https://learn.microsoft.com/en-us/microsoft-edge/extensions/publish/publish-extension#set-a-privacy-policy
