
export const SITE = {
  name: 'Adanian Labs UK',
  contactEmail: 'hello@adanianlabs.co.uk',
  tagline: 'Market Access. Partnerships. Expansion. Impact.',
  baseLine: 'Adanian Labs UK · Gateway between the UK and Africa',
};

export const NAV = [
  { label: 'Who We Are', to: '/' },
  { label: 'Impact', to: '/impact' },
  { label: 'Markets & Partners', to: '/markets' },
];

export const AFRICA_LINKS = [
  { label: 'Adanian Labs Africa', href: '#' },
  { label: 'Technology Tools', href: '#' },
  { label: 'Venture Building', href: '#' },
  { label: 'Capacity Building', href: '#' },
  { label: 'Global Team', href: '/markets#team' },
];

export const CTA = {
  africa: { label: 'Expand into Africa', subject: 'Expand into Africa' },
  uk: { label: 'Expand into the UK', subject: 'Expand into the UK' },
  partner: { label: 'Partner with us', subject: 'Partnership enquiry' },
};

export const WHO = {
  hero: {
    eyebrow: 'UK · Africa · Trade Gateway',
    title: 'Connecting UK and African Markets. From Market Entry to Lasting Partnerships.',
    sub: 'We facilitate cross-continent expansion, industrial trade, strategic partnerships and joint ventures for ambitious businesses scaling between Africa and the UK.',
    tag: 'UK · Africa',
    note: 'Your gateway into African markets, and from Africa into the UK.',
  },
  gateway: {
    eyebrow: 'A two-way gateway',
    title: 'Two directions. One partner.',
    cards: [
      {
        dir: 'UK → Africa',
        title: 'UK businesses into African markets.',
        body: 'Market entry, local partners and on-the-ground expertise.',
        cta: 'africa',
      },
      {
        dir: 'Africa → UK',
        title: 'African businesses into the UK.',
        body: 'Access to capital, investors, UK partners and a trusted regulatory environment.',
        cta: 'uk',
      },
    ],
  },
  approach: {
    eyebrow: 'Our approach',
    title: 'How we open markets',
    intro: 'Six ways we move businesses across the corridor.',
    pillars: [
      { title: 'Market Entry', body: 'Structured routes into a new market, from first introduction to launch.' },
      { title: 'Strategic Partnerships', body: 'The right local partners on both sides of the corridor.' },
      { title: 'Joint Venture Structuring', body: 'Setting up cross-border ventures that work for both partners.' },
      { title: 'Regulatory Navigation', body: 'Guidance through legal and regulatory requirements in each market.' },
      { title: 'Market Intelligence', body: 'Research and insight to make confident expansion decisions.' },
      { title: 'Trade Delegations', body: 'Organised visits that put UK and African businesses in the same room as the right partners.' },
    ],
    support: "Adanian's technology and data teams support every engagement.",
  },
  africa: {
    eyebrow: 'Our foundation in Africa',
    title: 'Built in Africa. Proven across borders.',
    intro: 'Our Africa platform brings on-the-ground reach, local partners and delivery capacity to every UK-Africa partnership.',
    stats: [
      { value: '40+', label: 'startups incubated' },
      { value: '100+', label: 'technology tool solutions' },
      { value: '3', label: 'smart technology centres' },
      { value: '5', label: 'labs across Africa' },
      { value: '170+', label: 'blockchain engineers' },
      { value: '300+', label: 'data scientists' },
    ],
    note: 'Africa network figures',
  },
  uk: {
    eyebrow: 'Our UK base',
    title: 'The UK gateway',
    intro: 'Our UK base connects African businesses to UK capital, partners and regulation, and UK businesses to African markets.',
    items: [
      'Industrial Trade',
      'Technology',
      'AI',
      'Blockchain/Web3',
      'Digital health',
      'Creative tech/animation',
      'International partnerships',
      'UK-Africa connections',
    ],
  },
  purpose: {
    eyebrow: 'Our purpose',
    title: 'Growth that crosses borders',
    body: 'We turn cross-continent ambition into commercial results: new markets, lasting partnerships, success on both sides.',
  },
  explore: {
    title: 'Explore markets and partners',
    intro: 'Discover the partners, markets and expertise behind every engagement.',
  },
};

export const IMPACT = {
  hero: {
    eyebrow: 'Impact',
    title: 'UK success. African success. One shared corridor.',
    sub: 'Two-way growth, measured in markets entered and partnerships built.',
    tag: 'UK · Africa',
    note: 'Success stories from both sides of the corridor.',
  },
  focus: {
    eyebrow: 'The UK chapter',
    title: 'UK-Africa focus areas',
    intro: 'Six areas where we connect UK and African businesses.',
    items: [
      { title: 'Market Entry', body: 'Routes into new markets, from first introduction to launch.' },
      { title: 'Strategic Partnerships', body: 'The right partners on both sides of the corridor.' },
      { title: 'Joint Ventures', body: 'Cross-border ventures structured to work for both partners.' },
      { title: 'Technology & AI', body: 'Practical technology and responsible AI applied to cross-border business.' },
      { title: 'Digital Health', body: 'Technology-led health solutions that travel between markets.' },
      { title: 'Creative Technology', body: 'Animation and creative technology that reach audiences in both markets.' },
    ],
  },
  path: {
    eyebrow: 'From introduction to partnership',
    title: 'Market Access is the Engine',
    intro: 'The path a business follows when crossing the UK-Africa corridor, from first introduction to lasting growth.',
    steps: ['Introduction', 'Market Entry', 'Partnership', 'Joint Venture', 'Expansion', 'Sustained Growth'],
  },
  partners: {
    eyebrow: 'Who we work with',
    title: 'Partners on both sides of the corridor',
    intro: 'Investors, businesses and institutions that make cross-continent growth possible.',
    items: [
      { title: 'UK businesses', body: 'Companies ready to enter African markets.' },
      { title: 'African businesses', body: 'Companies ready to expand into the UK.' },
      { title: 'Investors', body: 'Back cross-border growth on both sides.' },
      { title: 'Industry partners', body: 'Bring real commercial opportunities to the table.' },
      { title: 'Trade bodies and chambers', body: 'Open doors and credibility in both markets.' },
      { title: 'Government and trade agencies', body: 'Support regulation, policy and delegations.' },
      { title: 'Legal and advisory firms', body: 'Help structure deals and navigate regulation.' },
      { title: 'Technology partners', body: 'Power the tools behind every engagement.' },
      { title: 'International networks', body: 'Extend reach across borders.' },
    ],
  },
  corridor: {
    eyebrow: 'Connected, not one-way',
    title: 'Trade corridors',
    intro: 'Business moves in both directions between the UK and Africa. Here is what flows each way.',
    tabs: ['UK', 'Africa'],
    rows: [
      { label: 'Industrial Trade', toAfrica: 'UK industrial goods and services into African markets', toUK: 'African industrial output into UK supply chains' },
      { label: 'Markets', toAfrica: 'UK businesses reach African customers', toUK: 'African businesses reach UK customers' },
      { label: 'Capital', toAfrica: 'UK investment into African growth', toUK: 'African businesses access UK capital' },
      { label: 'Innovation', toAfrica: 'UK innovation partners', toUK: 'African innovation ecosystems' },
      { label: 'Knowledge', toAfrica: 'UK sector expertise', toUK: 'African market insight' },
      { label: 'Technology', toAfrica: 'UK technology and services', toUK: 'African-built solutions' },
      { label: 'Cross-Border Expertise', toAfrica: 'Legal, regulatory and trade know-how', toUK: 'Local knowledge on the ground' },
    ],
  },
  closing: {
    eyebrow: 'Start here',
    title: 'The next deal starts here',
    body: 'Whether you are expanding into Africa or entering the UK, we connect you with the partners, markets and expertise to get there.',
  },
};

export const MARKETS = {
  hero: {
    eyebrow: 'Markets & Partners',
    title: 'One gateway. Two markets. Lasting partnerships.',
    sub: 'Connecting UK and African businesses through market entry, partnerships and joint ventures.',
    tag: 'UK · Africa',
    note: 'A partner network built for cross-continent expansion.',
  },
  team: {
    eyebrow: 'The people behind the platform',
    title: 'Meet the Global Team',
    people: [
      {
        name: 'John Kamara',
        role: 'Co-Founder & CEO',
        photo: 'john',
        linkedin: 'https://www.linkedin.com/in/johnkamara/',
        bio: [
          'Growth Strategy Consultant, former CEO of Cortex Africa and Non-Executive Director of Machine Intelligence Institute of Africa. 20+ years of experience launching tech-driven solutions in new markets in Europe, South America, the Caribbean and Africa. Tech & Gaming Entrepreneur.',
        ],
      },
      {
        name: 'Irene Phoebe Kiwia',
        role: 'Co-Founder & CGO',
        photo: 'irene',
        linkedin: 'https://www.linkedin.com/in/kiwiairene/',
        bio: [
          'Tech Entrepreneur using smart technology to drive exponential growth in data driven organizations. Visionary and thought leader with experience in new markets and verticals across multiple sectors.',
          'Marketing Consultant with 18+ years in Media, Communication, PR and supporting pan-African companies with their go-to-market strategies. Youth & women empowerment specialist with 10+ years experience running sustainability programs to empower two segments. Media entrepreneur.',
        ],
      },
      {
        name: 'Bendon Murgor',
        role: 'Co-Founder & CTO',
        photo: 'bendon',
        linkedin: 'https://www.linkedin.com/in/bendonmurgor/',
        bio: [
          'Senior software engineer with 16+ years experience architecting and building tech solutions for Pan-African clients. Certifications in CCNA, ITILv3 and GCIH, with extensive experience in Gaming, USSD Development, Mobile Money integrations, Blockchain programming, Mobile Applications and Systems Security.',
        ],
      },
    ],
  },
  how: {
    eyebrow: 'How we work',
    title: 'How a partnership moves',
    heading: 'Enter. Partner. Expand. Sustain.',
    intro: 'From first introduction to lasting growth between the UK and Africa.',
    cards: [
      { title: 'Market Entry', body: 'Structured routes into a new market, from first introduction to launch.' },
      { title: 'Strategic Partnerships', body: 'The right local partners on both sides of the corridor.' },
      { title: 'Market Intelligence', body: 'Research and insight to make confident expansion decisions.' },
      { title: 'Regulatory Navigation', body: 'Guidance through legal and regulatory requirements in each market.' },
      { title: 'Joint Venture Structuring', body: 'Setting up cross-border ventures that work for both partners.' },
      { title: 'Technology Support', body: "Adanian's technology and data teams back every engagement." },
    ],
  },
  footprint: {
    eyebrow: 'UK and Africa',
    title: 'Markets we connect',
    intro: 'The African markets and UK base where we connect businesses.',
    note: 'Adanian offices across Africa and the UK.',
    groups: [
      {
        name: 'Africa',
        places: [
          ['Kenya', 'Nairobi'],
          ['Nigeria', 'Lagos'],
          ['South Africa', 'Johannesburg'],
          ['Tanzania', 'Dar es Salaam'],
          ['Zambia', 'Lusaka'],
          ['Namibia', 'Windhoek'],
        ],
      },
      { name: 'UK base', places: [['United Kingdom', 'Salford']], accent: true },
    ],
  },
  twoWay: {
    eyebrow: 'Two-way opportunity',
    title: 'UK and Africa: Two-Way Opportunity',
    intro: 'Two markets. Two pathways. Whichever direction you are expanding, we make the move.',
    cards: [
      {
        heading: 'Why expand to Africa?',
        dir: 'UK companies → Africa',
        why: 'Market size and growth; a young, growing population; demand for UK products and expertise.',
        trade: 'Supply and industrial partnerships in growing African markets.',
        steps: [
          ['Assess', 'market intelligence'],
          ['Connect', 'local partners and introductions'],
          ['Launch', 'regulatory navigation, JV structuring, trade delegations'],
        ],
        cta: 'africa',
      },
      {
        heading: 'Why expand to the UK?',
        dir: 'African companies → UK',
        why: 'Access to capital and investors; established innovation ecosystems; a trusted regulatory framework.',
        trade: 'Routes into UK industrial buyers and supply chains.',
        steps: [
          ['Assess', 'market intelligence'],
          ['Connect', 'UK partners and investor introductions'],
          ['Launch', 'regulatory navigation, JV structuring, trade delegations'],
        ],
        cta: 'uk',
      },
    ],
  },
  model: {
    eyebrow: 'How we work',
    title: 'The Adanian Model',
    intro: 'Every cross-border move rests on three things: the right people, the right insight, and the right foundations.',
    formula: 'People + Data + Infrastructure = PDI',
    body: "We don't enter a market on guesswork. We start with the people on both sides, back decisions with data, and build the structures that make a partnership last.",
    pillars: [
      { name: 'People', body: 'The partners, teams and decision-makers on both sides of the corridor.' },
      { name: 'Data', body: 'Market intelligence that guides every expansion decision.' },
      { name: 'Infrastructure', body: 'The legal, regulatory and operational foundations that make a partnership work.' },
    ],
  },
  next: {
    eyebrow: 'Start a conversation',
    title: 'Start the conversation',
    body: 'Bring a question, a challenge or an idea. Tell us which direction you are expanding in and we will connect you with the right partners.',
  },
};
