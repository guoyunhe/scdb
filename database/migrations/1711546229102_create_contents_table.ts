import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'contents';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('code').unique().notNullable();
      table.string('name').unique().notNullable();

      table.timestamp('created_at').nullable();
      table.timestamp('updated_at').nullable();
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
