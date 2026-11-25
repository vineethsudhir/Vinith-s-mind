// Your profiles. They show in the footer, on the home page and on the About page.
// Put your X/Twitter handle in TWITTER (no @) and your Strava athlete ID in STRAVA_ID
// (the number in your Strava profile URL). Each link stays hidden while it is empty.
const TWITTER = 'VineethSudhir';
const STRAVA_ID = '38678674';

// Your Substack. It shows as "Newsletter" in the menu, as a subscribe note on the blog page,
// and with your other profile links. Leave it empty to hide all of these.
// If you move Substack to your own domain (for example blog.vinith.in), change it here.
export const substack = 'https://substack.com/@vinithsudhir';

export const strava = STRAVA_ID ? `https://www.strava.com/athletes/${STRAVA_ID}` : '';

export const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vinithsudhir/' },
  { label: 'GitHub', href: 'https://github.com/vineethsudhir' },
  ...(TWITTER ? [{ label: 'X (Twitter)', href: `https://x.com/${TWITTER}` }] : []),
  ...(strava ? [{ label: 'Strava', href: strava }] : []),
  ...(substack ? [{ label: 'Substack', href: substack }] : []),
];

// Edit this file to update the home page. Newest entry first.
// Set `now: true` on the entry that is happening now.

export const guide = [
  {
    when: 'Now',
    now: true,
    title: 'Looking for my next backend role',
    detail: 'In Bengaluru, or remote in India. Building side projects with AI coding tools in the meantime.',
  },
  {
    when: '2022 to 2026',
    title: 'Amazon Prime Video',
    detail: 'Software Development Engineer on the live TV teams: search, discovery and live event publishing.',
  },
  {
    when: '2021 to 2022',
    title: 'New Jersey Institute of Technology',
    detail: 'Full stack developer on a statewide map of internet coverage across New Jersey.',
  },
  {
    when: '2022',
    title: 'MS in Computer Science, NJIT',
    detail: 'Newark, New Jersey.',
  },
  {
    when: '2020',
    title: 'BEng in Computer Science, Global Academy of Technology',
    detail: 'Bengaluru.',
  },
];

export const built = [
  {
    title: 'Live TV search',
    text: 'A search platform for live TV at about 80K queries per second, under 100 ms, across more than 1,000 stations in many languages and regions. The query API ran at 99.99% availability.',
  },
  {
    title: 'Catalog ingestion',
    text: 'I designed the system that loads live TV catalog data into the search index within a 10-minute SLA. It has had zero outages since launch, with nearly 300% buffer on the SLA.',
  },
  {
    title: 'Anomaly detection',
    text: 'A crawler that finds titles customers cannot discover, in under 30 minutes instead of hours. Estimated savings: $2M a year.',
  },
  {
    title: 'Live event publishing',
    text: 'Live sports metadata now reaches customers in 20 seconds. Before, it took up to 3 hours.',
  },
];

export const projects = [
  {
    title: 'indic-book-translator',
    href: 'https://github.com/vineethsudhir/indic-book-translator',
    text: 'A pipeline that translates books into Kannada EPUB files.',
  },
];
