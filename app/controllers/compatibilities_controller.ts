import Compatibility from '#models/compatibility';
import type { HttpContext } from '@adonisjs/core/http';

export default class CompatibilitiesController {
  async handle({ params }: HttpContext) {
    return Compatibility.query()
      .where('systemId', params.systemId)
      .where('contentId', params.contentId)
      .first();
  }
}
