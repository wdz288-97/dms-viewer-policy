# DMS Viewer — public privacy-policy site

Prepared 11 November 2026. Policy and extension version: **1.0.1**.

This is a static website package for hosting the existing privacy policy publicly. It is not the extension package. No private signing key, issued license, client report, extension parser, generator or browser data is included.

## Files

- `index.html`: the privacy policy as the website home page.
- `privacy-policy.html`: the same English policy at a stable named URL.
- `privacy-policy-ms.html`: the Bahasa Malaysia policy.
- `disclaimer.html`: linked terms/disclaimer.
- `pdpa-official-references.html`: linked official PDPA reference page.
- `legal.css`: shared presentation.
- `legal-page.js`: the existing guarded legal-page helper; it does not call extension APIs when unavailable on a normal public webpage.
- `.nojekyll`: GitHub Pages static-file marker.

The legal pages match the corresponding extension pages.

## Review before publishing

The confirmed public publisher name is Ding Lab, and the privacy and support contact is dzwong97@gmail.com. A public policy must match your actual practices.

Keep a consistent finalized copy in both the public website and extension. Do not publish the full development project or any private issuer files.

## GitHub Pages

The policy URL is https://wdz288-97.github.io/dms-viewer-policy/privacy-policy.html. Publish the website files together at the repository root so relative links work, and verify the deployed pages after updates. Do not upload the full extension project or private issuer files.

## Official instructions

- GitHub Pages setup: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Edge privacy policy requirements: https://learn.microsoft.com/en-us/microsoft-edge/extensions/publish/publish-extension#set-a-privacy-policy
