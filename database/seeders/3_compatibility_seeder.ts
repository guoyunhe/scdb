import { CompatibilityFactory } from '#database/factories/compatibility_factory';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class extends BaseSeeder {
  async run() {
    CompatibilityFactory.createMany(200);
  }
}
