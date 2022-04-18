import Mock from './mock';

import 'fake-db/db/pricings';
import 'fake-db/db/about';
import 'fake-db/db/product';

Mock.onAny().passThrough();
