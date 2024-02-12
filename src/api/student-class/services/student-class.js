'use strict';

/**
 * student-class service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-class.student-class');
