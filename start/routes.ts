/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import SystemsController from '#controllers/systems_controller';
import router from '@adonisjs/core/services/router';

router.get('/', async () => {
  return {
    hello: 'world',
  };
});

router.resource('systems', SystemsController);
