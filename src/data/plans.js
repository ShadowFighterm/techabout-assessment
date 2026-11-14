export const plans = [
  {
    id: 'starter', number: '01 / entry', name: 'Starter', monthlyPkr: 2400,
    description: 'A dependable home for small sites and side projects.',
    features: ['2 vCPU cores', '4 GB RAM', '80 GB NVMe storage', '2 TB transfer'],
    cta: 'Get Starter', subject: 'Starter VPS', icon: 'S'
  },
  {
    id: 'growth', number: '02 / momentum', name: 'Growth', monthlyPkr: 4800,
    description: 'Balanced power for busy websites and growing teams.',
    features: ['4 vCPU cores', '8 GB RAM', '160 GB NVMe storage', '4 TB transfer'],
    cta: 'Choose Growth', subject: 'Growth VPS', icon: 'G', popular: true
  },
  {
    id: 'scale', number: '03 / momentum', name: 'Scale', monthlyPkr: 9600,
    description: 'Room to run demanding apps, stores and databases.',
    features: ['8 vCPU cores', '16 GB RAM', '320 GB NVMe storage', '6 TB transfer'],
    cta: 'Get Scale', subject: 'Scale VPS', icon: 'S'
  },
  {
    id: 'dedicated', number: '04 / maximum', name: 'Dedicated Core', monthlyPkr: 19500,
    description: 'Predictable dedicated CPU power for serious workloads.',
    features: ['12 vCPU cores', '32 GB RAM', '640 GB NVMe storage', '8 TB transfer'],
    cta: 'Get Dedicated', subject: 'Dedicated Core VPS', icon: 'D'
  }
]

export const comparisonRows = [
  ['vCPU cores', '2', '4', '8', '12 dedicated'],
  ['Memory', '4 GB', '8 GB', '16 GB', '32 GB'],
  ['NVMe storage', '80 GB', '160 GB', '320 GB', '640 GB'],
  ['Monthly transfer', '2 TB', '4 TB', '6 TB', '8 TB'],
  ['IPv4 address', '1 dedicated', '1 dedicated', '1 dedicated', '1 dedicated'],
  ['IPv6', 'Included', 'Included', 'Included', 'Included'],
  ['DDoS protection', 'Basic', 'Basic', 'Advanced', 'Advanced'],
  ['Backups', 'Weekly', 'Weekly', 'Daily', 'Daily'],
  ['Server monitoring', '24/7', '24/7', '24/7', '24/7'],
  ['Support', 'Business hours', 'Priority', 'Priority', 'Priority']
]

export const faqs = [
  ['Can I upgrade my plan later?', 'Yes. We can move you to a larger plan with minimal downtime. Contact support before your next billing date and we will help plan the change.'],
  ['Do you manage the server for me?', 'These are self-managed VPS plans with monitoring and support. We can help with common setup questions; ongoing application administration is scoped separately.'],
  ['What does annual billing mean?', 'Annual billing gives you 12 months of service for the price of 10 months. The cards show the effective monthly rate and the full annual total.'],
  ['Which payment methods can I use?', 'We accept bank transfer, debit or credit card, and local mobile wallets. The checkout team will confirm the best option for your account.']
]
