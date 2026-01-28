import { MarketEvent } from "../types";

const FALLBACK_EVENTS: MarketEvent[] = [
  {
    name: "Whale Manipulation",
    description: "An unknown whale moved 10,000 BTC. Market is confused.",
    effect: "NEUTRAL",
    impactMultiplier: 1.0
  },
  {
    name: "Elon Tweeted a Dog",
    description: "The CEO of X posted a meme. Retail is FOMOing in.",
    effect: "BULLISH",
    impactMultiplier: 1.5
  },
  {
    name: "Exchange Hack",
    description: "A major offshore exchange 'lost' user funds. Panic everywhere.",
    effect: "BEARISH",
    impactMultiplier: 1.8
  },
  {
    name: "Fed Interest Hike",
    description: "The Fed raised rates by 50bps. Risk-off assets are bleeding.",
    effect: "BEARISH",
    impactMultiplier: 1.3
  },
  {
    name: "ETF Approval",
    description: "The SEC finally approved a Spot ETF. Institutional money is flowing.",
    effect: "BULLISH",
    impactMultiplier: 2.0
  },
  {
    name: "Mainnet Upgrade",
    description: "Successful hardfork. Scalability issues are (temporarily) solved.",
    effect: "BULLISH",
    impactMultiplier: 1.2
  },
  {
    name: "Stablecoin Depeg",
    description: "A popular algorithmic stablecoin hit $0.80. Trust is shattered.",
    effect: "BEARISH",
    impactMultiplier: 1.6
  },
  {
    name: "Crypto Winter Thaw",
    description: "Retail is back. McDonald's applications are decreasing.",
    effect: "BULLISH",
    impactMultiplier: 1.4
  },
  {
    name: "Rug Pull Alert",
    description: "Another celebrity token vanished. Shocked Pikachu face.",
    effect: "BEARISH",
    impactMultiplier: 1.5
  },
  {
    name: "Institutional FOMO",
    description: "BlackRock added more to their holdings. Smart money is moving.",
    effect: "BULLISH",
    impactMultiplier: 1.7
  }
];

export const fetchMarketEvent = async (): Promise<MarketEvent> => {
  // Using local fallback events (Gemini AI integration can be added later)
  return FALLBACK_EVENTS[Math.floor(Math.random() * FALLBACK_EVENTS.length)];
};
