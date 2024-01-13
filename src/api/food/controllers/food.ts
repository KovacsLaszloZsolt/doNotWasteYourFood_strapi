/**
 * food controller
 */

import { factories } from '@strapi/strapi';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: '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' });

export default factories.createCoreController('api::food.food', ({ strapi }) => ({
	// WIP
	async recipe(ctx) {
		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'user',
					content: 'Could you suggest me a spanish dish with the following ingredients: beef meat, rice, vegetables ?'
				},
				{ role: 'assistant', content: 'You do not have to use all the ingredients and you can add new ingredients' },
				{
					role: 'assistant',
					content:
						'Response has to be in JSON format with the following syntax: {"name": <dish name>, "ingredients": <array of ingredients>,"instructions": <array of instructions>}'
				}
			],
			model: 'dall-e-3'
		});

		// eslint-disable-next-line no-console
		console.log(JSON.stringify(response));
	}
}));
