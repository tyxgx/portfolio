/**
 * Case studies for the two flagship projects. Plain language, one screen and a bit each:
 * what it is, how it works, what went wrong and what I did about it, the numbers, the links.
 * Facts here come from each repo's docs (docs/improvements/*, README); update both together.
 */

export interface CaseStudy {
  slug: 'liveflights' | 'streampulse';
  title: string;
  tagline: string;
  why: string;
  how: { title: string; text: string }[];
  problems: { title: string; text: string }[];
  numbers: { value: string; label: string }[];
  links: { label: string; href: string }[];
}

const GH_LF = 'https://github.com/tyxgx/liveflights';
const GH_SP = 'https://github.com/tyxgx/streampulse';
const LF = 'https://liveflights-prod-site-922120357133.s3.us-east-1.amazonaws.com';
const SP = 'https://streampulse-site-922120357133.s3.ap-south-1.amazonaws.com';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'liveflights',
    title: 'liveflights',
    tagline: 'Live aircraft over Europe, updated every minute, with a model that predicts where each one will be in five minutes.',
    why: 'I wanted to build a real data system end to end: real data, deployed on AWS, cheap to run, and honest about how well its predictions work. Not a notebook.',
    how: [
      {
        title: 'Where the data comes from',
        text: 'adsb.lol, a community network of volunteer receivers that pick up the position signal every aircraft broadcasts. Eight points across Europe are queried and merged. It is real traffic, though not every aircraft.',
      },
      {
        title: 'How it is processed',
        text: 'A scheduled AWS Lambda runs once a minute: it saves the snapshot, a small compressed copy for the map and a raw archive. A second Lambda runs a PyTorch model (exported to ONNX) that predicts each aircraft five minutes ahead, and each prediction is later scored against the real position.',
      },
      {
        title: 'How it is shown',
        text: 'A static Next.js page on S3 fetches the small snapshot every 15 seconds and moves each aircraft along its heading and speed in between. There is no server behind it while you browse.',
      },
    ],
    problems: [
      {
        title: 'A cost bug, caught early',
        text: 'The first design kept live state in DynamoDB: about 4,600 writes a minute, a projected $155 a month. I traced it in CloudWatch and replaced it with one S3 file overwritten each minute. It now costs about $2 a month.',
      },
      {
        title: 'Bugs that only showed on live traffic',
        text: 'A Lambda timeout (fixed by batching inference), an out-of-memory error (lazy loading) and impossible aircraft speeds caused by address collisions (fixed with a plausibility check).',
      },
      {
        title: 'A slow, glitchy map',
        text: 'I measured first: the whole page re-rendered twice a second, every update was 1.6 MB uncompressed, and the API Lambda was being throttled. I fixed it in small steps, measuring each one and writing it up. JavaScript sent to the browser fell from 946 KB to 259 KB, data per 30 seconds from 4.4 MB to 1.6 MB, and page freezes in 30 seconds from 52 to 19.',
      },
    ],
    numbers: [
      { value: '~3,700', label: 'aircraft on the map' },
      { value: '60 s', label: 'update cycle' },
      { value: '~2 km', label: 'median 5-minute prediction error, shown live' },
      { value: '~$2', label: 'a month to run' },
    ],
    links: [
      { label: 'live demo', href: `${LF}/live.html` },
      { label: 'how it works, on the site', href: `${LF}/index.html#pipeline` },
      { label: 'source', href: GH_LF },
      { label: 'step-by-step improvement log', href: `${GH_LF}/tree/main/docs/improvements` },
    ],
  },
  {
    slug: 'streampulse',
    title: 'StreamPulse',
    tagline: 'Daily Spotify charts for 72 markets, rebuilt every morning on AWS, with a chatbot whose every number is checked.',
    why: 'The idea and the first design came out of a team capstone at C-DAC. I rebuilt it on my own as a serverless project to see how small and cheap a real data platform can be. The serverless pipeline, dashboard, chatbot and deployment are my work.',
    how: [
      {
        title: 'Where the data comes from',
        text: 'A public Kaggle dataset that republishes Spotify\'s daily top-200 chart for each market: about 44 million rows since 2017. "Streams" means streams of charted tracks, not total streams.',
      },
      {
        title: 'How it is processed',
        text: 'Every morning a scheduled GitHub job adds only new or changed rows to a raw layer that is never overwritten (Bronze), rebuilds a cleaned layer from it (Silver) and then monthly totals (Gold). Every run checks that Gold adds up to Silver.',
      },
      {
        title: 'How it is shown',
        text: 'The dashboard is plain pages on S3 reading small JSON files, so visitors never trigger a query. The chatbot picks from eleven fixed data tools, the tools run the SQL, and a checker rejects any number the tools did not return.',
      },
    ],
    problems: [
      {
        title: 'Gaps in the source data',
        text: 'India\'s stream counts have been blank in the source since August, though its chart positions continue. I first showed a chart that looked like India had stopped. Now the site shows India by chart position and says so, and a health page lists every such gap.',
      },
      {
        title: 'Numbers that changed between runs',
        text: 'The artist count differed on every run over the same data. The cause was an aggregation that picked an arbitrary row. I made it deterministic and added pipeline tests so it cannot return quietly.',
      },
      {
        title: 'A chatbot that can be trusted',
        text: 'I tested it on 41 questions whose answers I computed with separate SQL: 41 of 41 pass. That is a small set, so it works as a regression check, not a benchmark. Testing also found a fallback model that silently failed on tool calls; that is fixed.',
      },
    ],
    numbers: [
      { value: '43.9M', label: 'chart rows' },
      { value: '72', label: 'markets' },
      { value: 'daily', label: 'refresh, about 15 minutes' },
      { value: 'cents', label: 'to a few dollars a month' },
    ],
    links: [
      { label: 'live demo', href: `${SP}/index.html` },
      { label: 'how it works, on the site', href: `${SP}/index.html#/how` },
      { label: 'source', href: GH_SP },
      { label: 'step-by-step improvement log', href: `${GH_SP}/tree/main/docs/improvements` },
    ],
  },
];
