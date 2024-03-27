import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'compatibilities';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table
        .foreign('system_id')
        .references('id')
        .inTable('systems')
        .onDelete('CASCADE')
        .notNullable();
      table
        .foreign('content_id')
        .references('id')
        .inTable('contents')
        .onDelete('CASCADE')
        .notNullable();

      table.tinyint('rating').unsigned().notNullable();

      table.timestamp('created_at').nullable();
      table.timestamp('updated_at').nullable();

      table.unique(['system_id', 'content_id']);
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
