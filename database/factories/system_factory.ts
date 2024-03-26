import System from '#models/system';
import factory from '@adonisjs/lucid/factories';

export const SystemFactory = factory
  .define(System, async ({ faker }) => {
    return {};
  })
  .build();
