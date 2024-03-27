import { BaseModel, column } from '@adonisjs/lucid/orm';
import { DateTime } from 'luxon';

export default class Compatibility extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare systemId: number;

  @column()
  declare contentId: number;

  @column()
  declare rating: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}
