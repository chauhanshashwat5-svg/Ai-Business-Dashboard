export const demoKpis = [
  {
    icon: 'payments',
    iconVariant: 'primary',
    label: 'Revenue',
    value: '$2.4M',
    delta: '+12.5%',
    deltaDirection: 'up',
    sparkline: [
      { value: 50 }, { value: 65 }, { value: 100, active: true },
      { value: 75 }, { value: 85, active: true },
    ],
  },
  {
    icon: 'account_balance_wallet',
    iconVariant: 'tertiary',
    label: 'Net Profit',
    value: '$842k',
    delta: '+8.2%',
    deltaDirection: 'up',
  },
  {
    icon: 'person_add',
    iconVariant: 'secondary',
    label: 'Active Users',
    value: '45.2k',
    delta: '+1.4k',
    deltaDirection: 'up',
  },
  {
    icon: 'track_changes',
    iconVariant: 'primary',
    label: 'Conv Rate',
    value: '3.24%',
    delta: '-0.4%',
    deltaDirection: 'down',
  },
  {
    icon: 'psychology',
    iconVariant: 'primary',
    label: 'AI Confidence',
    value: '94%',
    delta: 'High',
    deltaDirection: 'up',
  },
  {
    icon: 'trending_up',
    iconVariant: 'secondary',
    label: 'Growth Rate',
    value: '18.5%',
    delta: '+24%',
    deltaDirection: 'up',
  },
];

export const demoRevenueChart = [
  { label: 'Jan', regionA: 42, regionB: 30, trend: 38 },
  { label: 'Feb', regionA: 58, regionB: 34, trend: 44 },
  { label: 'Mar', regionA: 75, regionB: 40, trend: 52 },
  { label: 'Apr', regionA: 55, regionB: 46, trend: 48 },
  { label: 'May', regionA: 68, regionB: 52, trend: 62 },
  { label: 'Jun', regionA: 62, regionB: 58, trend: 74 },
  { label: 'Jul', regionA: 80, regionB: 60, trend: 82 },
];

export const demoRevenueSources = [
  { name: 'Organic', value: 42, color: '#c4c0ff' },
  { name: 'Paid Search', value: 28, color: '#7bd0ff' },
  { name: 'AI Referral', value: 18, color: '#ffb785' },
  { name: 'Others', value: 12, color: '#464555' },
];

export const demoTransactions = [
  { customer: 'Alpha Systems', invoice: '#INV-9022', amount: 2450, status: 'COMPLETED', payment: 'Stripe', date: 'Oct 24, 2023' },
  { customer: 'Blue Nexus', invoice: '#INV-9023', amount: 12100, status: 'PROCESSING', payment: 'Wire', date: 'Oct 24, 2023' },
  { customer: 'GreenLeaf Ltd', invoice: '#INV-9024', amount: 1120.5, status: 'OVERDUE', payment: 'PayPal', date: 'Oct 23, 2023' },
];
