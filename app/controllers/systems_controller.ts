import System from '#models/system';
import type { HttpContext } from '@adonisjs/core/http';

export default class SystemsController {
  /**
   * Return list of all posts or paginate through
   * them
   */
  async index() {
    return System.query().orderBy('name', 'asc');
  }

  /**
   * Handle form submission to create a new post
   */
  async store({ request }: HttpContext) {}

  /**
   * Display a single post by id.
   */
  async show({ params }: HttpContext) {
    return System.find(params.id);
  }

  /**
   * Handle the form submission to update a specific post by id
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Handle the form submission to delete a specific post by id.
   */
  async destroy({ params }: HttpContext) {}
}
