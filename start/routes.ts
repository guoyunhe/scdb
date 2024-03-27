/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ContentsController from '#controllers/contents_controller';
import SystemsController from '#controllers/systems_controller';
import router from '@adonisjs/core/services/router';

router.get('/', async () => {
  return {
    hello: 'world',
  };
});

router.resource('systems', SystemsController);
router.resource('contents', ContentsController);
