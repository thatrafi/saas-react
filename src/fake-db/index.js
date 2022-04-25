import Mock from './mock';

import 'fake-db/db/pricings';
import 'fake-db/db/about';
import 'fake-db/db/product';
import 'fake-db/db/reviews';

Mock.onAny().passThrough();
