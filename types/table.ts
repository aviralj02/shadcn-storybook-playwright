export type TabItem = {
  label: string;
  value: string;
  content: React.ReactNode;
};

export type ExchangeStats = {
  venue: string;
  latency: number;
  heartbeat: number;
  uptime: number;
};
