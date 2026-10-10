export type TopicLanguage = 'fr' | 'en';

export interface TopicDefinition {
  slug: string;
  counterpart: string;
  title: string;
  eyebrow: string;
  description: string;
  postIds: string[];
  readingPaths?: { title: string; description: string; postIds: string[] }[];
}

export const topics: Record<TopicLanguage, TopicDefinition[]> = {
  fr: [
    {
      slug: 'apple-et-outils',
      counterpart: 'apple-and-tools',
      title: 'Travailler sur Mac avec Linux et Windows',
      eyebrow: 'sur le bureau et sur le terrain',
      description: 'Transferts SCP et SFTP, Windows sur Apple Silicon et serveurs personnels : mes outils, mes choix et les limites rencontrées sur le terrain.',
      readingPaths: [
        {
          title: 'Transférer des fichiers entre Mac et Linux',
          description: 'Le point de départ est un usage de terrain : récupérer des logs et envoyer des fichiers vers des machines Linux. La note macSCP raconte pourquoi j’ai construit mon propre outil après avoir travaillé avec WinSCP. L’application reste un projet personnel, sans téléchargement public.',
          postIds: ['macscp-outil-transfert-manquait-mac'],
        },
        {
          title: 'Garder Windows pour les outils qui en ont besoin',
          description: 'Une machine virtuelle peut compléter le Mac quand un utilitaire n’existe que sous Windows. Le guide VMware Fusion présente l’installation de Windows 11 ARM, la compatibilité et les limites à vérifier avant de compter sur cette solution.',
          postIds: ['faire-tourner-windows-11-sur-un-mac-apple-silicon-avec-vmware-fusion'],
        },
        {
          title: 'Choisir et garder la main sur ses serveurs',
          description: 'Le travail ne s’arrête pas au poste de bureau. Ces deux notes abordent la fiabilité des VPS low cost et le choix d’une plateforme auto-hébergée, avec un critère commun : pouvoir comprendre la panne.',
          postIds: ['vps-low-cost-ce-que-personne-ne-dit-vraiment', 'paas-auto-heberges-lexperience-cloud-sans-la-facture-2026'],
        },
      ],
      postIds: [
        'vps-low-cost-ce-que-personne-ne-dit-vraiment',
        'paas-auto-heberges-lexperience-cloud-sans-la-facture-2026',
        'macscp-outil-transfert-manquait-mac',
        'faire-tourner-windows-11-sur-un-mac-apple-silicon-avec-vmware-fusion',
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
      title: 'Working on Mac with Linux and Windows',
      eyebrow: 'at the desk and in the field',
      description: 'SCP and SFTP transfers, Windows on Apple Silicon, and personal servers: my tools, choices, and the limits encountered in the field.',
      readingPaths: [
        {
          title: 'Transfer files between Mac and Linux',
          description: 'The starting point is field work: retrieving logs and sending files to Linux machines. The macSCP note explains why I built my own tool after working with WinSCP. The app remains a personal project, with no public download.',
          postIds: ['macscp-file-transfer-tool-missing-on-mac'],
        },
        {
          title: 'Keep Windows for the tools that need it',
          description: 'A virtual machine can complement the Mac when a utility only runs on Windows. The VMware Fusion guide covers Windows 11 ARM installation, compatibility, and the limits to check before relying on this setup.',
          postIds: ['running-windows-11-on-apple-silicon-mac-vmware-fusion'],
        },
        {
          title: 'Choose servers you can understand and maintain',
          description: 'The work does not stop at the desktop. These two notes cover the reliability of low-cost VPS hosting and the choice of a self-hosted platform, with one shared criterion: being able to understand a failure.',
          postIds: ['low-cost-vps-what-nobody-tells-you', 'self-hosted-paas-cloud-experience-without-the-bill'],
        },
      ],
      postIds: [
        'low-cost-vps-what-nobody-tells-you',
        'self-hosted-paas-cloud-experience-without-the-bill',
        'macscp-file-transfer-tool-missing-on-mac',
        'running-windows-11-on-apple-silicon-mac-vmware-fusion',
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

export function topicsForPost(lang: TopicLanguage, postId: string) {
  return topics[lang].filter((topic) => topic.postIds.includes(postId));
}
