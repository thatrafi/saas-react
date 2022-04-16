import Mock from 'fake-db/mock';

const pricingDB = {
  plans: [
    {
      name: 'Regular',
      subName: 'Starter plan',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '3GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: 'Free'
    },
    {
      name: 'Platinum',
      subName: 'For the best results',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '20GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: '$324'
    },
    {
      name: 'Standard',
      subName: 'Most popular',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '10GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: '$234'
    }
  ]
};

Mock.onGet('/api/pricing/plans').reply(() => {
  const response = pricingDB.plans;
  return [200, response];
});
