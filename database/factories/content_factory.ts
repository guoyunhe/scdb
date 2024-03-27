import Content from '#models/content';
import factory from '@adonisjs/lucid/factories';

export const ContentFactory = factory
  .define(Content, async ({ faker }) => {
    return {
      code: faker.string.uuid(),
      name: faker.lorem.words(),
    };
  })
  .build();
