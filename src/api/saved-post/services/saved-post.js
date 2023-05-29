'use strict';

/**
 * saved-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saved-post.saved-post');
