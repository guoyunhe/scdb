import System from '#models/system';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class extends BaseSeeder {
  async run() {
    await System.createMany([
      {
        code: 'android_aarch64',
        name: 'Android (aarch64)',
      },
      {
        code: 'linux_x86_64',
        name: 'Linux (x86_64)',
      },
      {
        code: 'linux_aarch64',
        name: 'Linux (aarch64)',
      },
      {
        code: 'windows_x86_64',
        name: 'Windows (x86_64)',
      },
    ]);
  }
}
