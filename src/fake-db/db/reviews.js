import Mock from 'fake-db/mock';

const reviewDB = [
  {
    id: 'review1',
    name: 'Ron Wood',
    title: 'CEO',
    comment:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    image: 'team4.png'
  },
  {
    id: 'review2',
    name: 'Mark Mason',
    title: 'Marketing Manager',
    comment:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    image: 'beardedman.png'
  },
  {
    id: 'review3',
    name: 'Sam Preston',
    title: 'CTO',
    comment:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    image: 'team2.png'
  }
];

Mock.onGet('/api/reviews').reply(() => {
  return [200, reviewDB];
});
