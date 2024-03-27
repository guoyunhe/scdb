import Content from '#models/content';
import type { HttpContext } from '@adonisjs/core/http';

export default class ContentsController {
  /**
   * Return list of all posts or paginate through
   * them
   */
  async index({ params }: HttpContext) {
    return Content.query().paginate(params.page || 1, params.perPage || 10);
  }

  /**
   * Handle form submission to create a new post
   */
  async store({ request }: HttpContext) {}

  /**
   * Display a single post by id.
   */
  async show({ params }: HttpContext) {}

  /**
   * Handle the form submission to update a specific post by id
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Handle the form submission to delete a specific post by id.
   */
  async destroy({ params }: HttpContext) {}
}
