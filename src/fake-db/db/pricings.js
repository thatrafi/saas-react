import Mock from 'fake-db/mock';

const pricingDB = {
  plans: [
    {
      id: 'plan0',
      name: 'Regular',
      subName: 'Starter plan',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '3GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: 'Free',
      category: { id: 0, name: 'unknown' }
    },
    {
      id: 'plan1',
      name: 'Platinum',
      subName: 'For the best results',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '20GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: '$324',
      category: { id: 1, name: 'Monthly' }
    },
    {
      id: 'plan2',
      name: 'Standard',
      subName: 'Most popular',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '10GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: '$234',
      category: { id: 1, name: 'Monthly' }
    },
    {
      id: 'plan3',
      name: 'Platinum',
      subName: 'For the best results',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '20GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: '$3000',
      category: { id: 2, name: 'Yearly' }
    },
    {
      id: 'plan4',
      name: 'Standard',
      subName: 'Most popular',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '10GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: '$2500',
      category: { id: 2, name: 'Yearly' }
    }
  ]
};

Mock.onGet('/api/pricing/plans').reply(() => {
  const response = pricingDB.plans;
  return [200, response];
});
