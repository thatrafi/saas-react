import Mock from './mock';

import 'fake-db/db/pricings';
import 'fake-db/db/about';

Mock.onAny().passThrough();
