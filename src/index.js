/*
 * moleculer-pdf
 * Copyright (c) 2019 moleculer-pdf (https://github.com/olivmonnier/moleculer-pdf)
 * MIT Licensed
 */

"use strict";

const puppeteer = require('puppeteer');

module.exports = {

	name: "pdf",

	/**
	 * Default settings
	 */
	settings: {
		puppeteerArgs: { headless: true },
		options: { format: 'Letter' },
		remoteContent: true
	},

	/**
	 * Actions
	 */
	actions: {
		transform: {
			params: {
				html: { type: 'string' }
			},
			handler(ctx) {
				return this.transform(ctx.params.html)
			}
		}
	},

	/**
	 * Methods
	 */
	methods: {
		/**
		 * 
		 * @param {String} html - The html content
		 * @returns {Promise}
		 */
		transform(html) {
			return new Promise(async (resolve, reject) => {
				if (typeof html !== 'string') {
					reject('Invalid Argument: HTML expected as type of string and received a value of a different type. Check your request body and request headers.')
				}
	
				let browser;
				const { puppeteerArgs, options, remoteContent } = this.settings;
	
				if (puppeteerArgs) {
					browser = await puppeteer.launch(puppeteerArgs);
				} else {
					browser = await puppeteer.launch();
				}
			
				const page = await browser.newPage();
			
				if (remoteContent === true) {
					await page.goto(`data:text/html;base64,${Buffer.from(html).toString('base64')}`, {
						waitUntil: 'networkidle0'
					});
				} else {
					await page.setContent(html);
				}
			
				const result = await page.pdf(options);
				await browser.close();
	
				return resolve(result);
			})
		}
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};