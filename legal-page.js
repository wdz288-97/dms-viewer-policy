// Isolate this document's browser zoom from the viewer, even if the reader
// later zooms the policy or terms. No report-site tabs are involved.
if (globalThis.chrome?.runtime?.sendMessage) {
  void chrome.runtime.sendMessage({type:'isolate-legal-zoom'}).catch(() => {});
}
