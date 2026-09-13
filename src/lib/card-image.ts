const cardVariants: Record<string, string> = {
  '/uploads/ia-industrie/atelier-investigation.webp': '/uploads/ia-industrie/atelier-investigation-card.webp',
  '/blog/macscp/macscp-desktop.webp': '/blog/macscp/macscp-desktop-card.webp',
  '/blog/faire-tourner-windows-11-sur-un-mac-apple-silicon-avec-vmware-fusion/vmware.webp': '/blog/faire-tourner-windows-11-sur-un-mac-apple-silicon-avec-vmware-fusion/vmware-card.webp',
  '/blog/astro-rachete-par-cloudflare-quand-les-frameworks-cessent-detre-neutres/SCR-20260118-ptii.webp': '/blog/astro-rachete-par-cloudflare-quand-les-frameworks-cessent-detre-neutres/SCR-20260118-ptii-card.webp',
  'https://pub-8d35cf03c12f4e258a891dd5fc8f9fe4.r2.dev/blog/baas-cover.webp': '/blog/baas-cover-card.webp',
};

export function cardSizedImage(source: string | null): string | null {
  return source ? cardVariants[source] ?? source : null;
}
