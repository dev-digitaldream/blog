export type TopicLanguage = 'fr' | 'en';

export interface TopicDefinition {
  slug: string;
  counterpart: string;
  title: string;
  eyebrow: string;
  description: string;
  postIds: string[];
}

export const topics: Record<TopicLanguage, TopicDefinition[]> = {
  fr: [
    {
      slug: 'apple-et-outils',
      counterpart: 'apple-and-tools',
      title: 'Apple et outils du quotidien',
      eyebrow: 'sur le bureau et sur le terrain',
      description: 'Des outils réellement utilisés sur Mac, iPhone et iPad, avec leurs qualités, leurs limites et les bricolages nécessaires pour travailler.',
      postIds: [
        'macscp-outil-transfert-manquait-mac',
        'faire-tourner-windows-11-sur-un-mac-apple-silicon-avec-vmware-fusion',
        'plaud-notes-lenregistreur-qui-promet-de-penser-a-ta-place',
      ],
    },
    {
      slug: 'auto-hebergement-et-infrastructure',
      counterpart: 'self-hosting-and-infrastructure',
      title: 'Auto-hébergement et infrastructure',
      eyebrow: 'garder la main sur ses machines',
      description: 'VPS, plateformes auto-hébergées, bases de données et services privés : des retours issus de systèmes utilisés au quotidien.',
      postIds: [
        'vps-low-cost-ce-que-personne-ne-dit-vraiment',
        'paas-auto-heberges-lexperience-cloud-sans-la-facture-2026',
        'le-brouillard-des-baas-deux-ans-a-chercher-une-base-de-donne',
        'degooglisation-comment-jai-migre-drive-photos-et-gmail-vers-des-solutions-plus-privees-et-souveraines',
      ],
    },
    {
      slug: 'ia-appliquee',
      counterpart: 'applied-ai',
      title: 'IA appliquée',
      eyebrow: 'loin des démonstrations',
      description: 'Ce que les modèles d’IA changent quand ils rencontrent du code, du matériel, des protocoles fermés et de vrais problèmes de terrain.',
      postIds: [
        'quand-lia-debloque-enfin-des-systemes-industriels-fermes',
        'macscp-outil-transfert-manquait-mac',
        'plaud-notes-lenregistreur-qui-promet-de-penser-a-ta-place',
      ],
    },
    {
      slug: 'vie-privee-et-securite',
      counterpart: 'privacy-and-security',
      title: 'Vie privée et sécurité',
      eyebrow: 'des habitudes tenables',
      description: 'Protéger ses données et reprendre le contrôle de ses services avec des choix compréhensibles, sans transformer le quotidien en forteresse.',
      postIds: [
        'protegez-vos-donnees-lhygiene-numerique-a-la-portee-de-tous',
        'degooglisation-comment-jai-migre-drive-photos-et-gmail-vers-des-solutions-plus-privees-et-souveraines',
      ],
    },
    {
      slug: 'developpement-et-architecture',
      counterpart: 'development-and-architecture',
      title: 'Développement et architecture',
      eyebrow: 'construire puis comprendre',
      description: 'Des choix de frameworks, de backends et d’architecture racontés après usage, avec les compromis que les pages produit oublient souvent.',
      postIds: [
        'le-brouillard-des-baas-deux-ans-a-chercher-une-base-de-donne',
        'astro-rachete-par-cloudflare-quand-les-frameworks-cessent-detre-neutres',
        'macscp-outil-transfert-manquait-mac',
      ],
    },
  ],
  en: [
    {
      slug: 'apple-and-tools',
      counterpart: 'apple-et-outils',
      title: 'Apple and everyday tools',
      eyebrow: 'at the desk and in the field',
      description: 'Tools actually used on Mac, iPhone, and iPad, including their strengths, limits, and the workarounds needed to get the job done.',
      postIds: [
        'macscp-file-transfer-tool-missing-on-mac',
        'running-windows-11-on-apple-silicon-mac-vmware-fusion',
        'plaud-note-2026-ai-grew-up',
      ],
    },
    {
      slug: 'self-hosting-and-infrastructure',
      counterpart: 'auto-hebergement-et-infrastructure',
      title: 'Self-hosting and infrastructure',
      eyebrow: 'keeping control of the machines',
      description: 'VPS hosting, self-hosted platforms, databases, and private services, based on systems used every day rather than product promises.',
      postIds: [
        'low-cost-vps-what-nobody-tells-you',
        'self-hosted-paas-cloud-experience-without-the-bill',
        'le-brouillard-des-baas-two-years-searching-for-a-database',
        'degoogling-migrating-from-google-to-private-solutions',
      ],
    },
    {
      slug: 'applied-ai',
      counterpart: 'ia-appliquee',
      title: 'Applied AI',
      eyebrow: 'beyond the demos',
      description: 'What AI models change when they meet code, hardware, locked-down protocols, and real problems in the field.',
      postIds: [
        'when-ai-finally-unlocked-industrial-systems',
        'macscp-file-transfer-tool-missing-on-mac',
        'plaud-note-2026-ai-grew-up',
      ],
    },
    {
      slug: 'privacy-and-security',
      counterpart: 'vie-privee-et-securite',
      title: 'Privacy and security',
      eyebrow: 'habits that remain practical',
      description: 'Protecting data and taking back control of services through understandable choices that still work in everyday life.',
      postIds: [
        'protect-your-data-digital-hygiene-for-everyone',
        'degoogling-migrating-from-google-to-private-solutions',
      ],
    },
    {
      slug: 'development-and-architecture',
      counterpart: 'developpement-et-architecture',
      title: 'Development and architecture',
      eyebrow: 'building first, then understanding',
      description: 'Framework, backend, and architecture choices revisited after use, including the trade-offs product pages tend to leave out.',
      postIds: [
        'le-brouillard-des-baas-two-years-searching-for-a-database',
        'astro-bought-by-cloudflare-when-frameworks-stop-being-neutral',
        'macscp-file-transfer-tool-missing-on-mac',
      ],
    },
  ],
};

export function topicPath(lang: TopicLanguage, slug: string) {
  return lang === 'en' ? `/en/topics/${slug}/` : `/sujets/${slug}/`;
}
