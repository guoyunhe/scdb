import { ContentFactory } from '#database/factories/content_factory';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class extends BaseSeeder {
  async run() {
    ContentFactory.makeMany(100);
  }
}
