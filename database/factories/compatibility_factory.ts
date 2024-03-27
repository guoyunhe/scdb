import factory from '@adonisjs/lucid/factories'
import Compatibility from '#models/compatibility'

export const CompatibilityFactory = factory
  .define(Compatibility, async ({ faker }) => {
    return {}
  })
  .build()