import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'systems';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('code').unique();
      table.string('name').unique();

      table.timestamp('created_at').nullable();
      table.timestamp('updated_at').nullable();
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
