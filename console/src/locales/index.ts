import type { App } from 'vue';
import { createI18n } from 'vue-i18n';
// @ts-ignore
import en from './en.yaml';
// @ts-ignore
import zhCN from './zh-CN.yaml';
// @ts-ignore
import zhTW from './zh-TW.yaml';

export const locales = [
	{
		code: 'en',
		package: en,
		hidden: true,
	},
	{
		name: 'English',
		code: 'en-US',
		package: en,
	},
	{
		name: '简体中文',
		code: 'zh-CN',
		package: zhCN,
	},
	{
		name: '正體中文',
		code: 'zh-TW',
		package: zhTW,
	},
	{
		code: 'zh',
		package: zhCN,
	},
];

const messages = locales.reduce((acc, cur) => {
	acc[cur.code] = cur.package;
	return acc;
}, {});

const i18n = createI18n({
	legacy: false,
	locale: getBrowserLanguage(),
	fallbackLocale: getBrowserLanguage(),
	messages,
});

export function getBrowserLanguage(): string {
	const browserLanguage = navigator.language;
	// eslint-disable-next-line no-unused-vars
	const language = messages[browserLanguage]
		? browserLanguage
		: browserLanguage.split('-')[0];
	// console.debug('browser language', language)
	return language in messages ? language : 'zh-CN';
}

export function changeI18nLocal(val) {
	i18n.global.locale = val;
}

export function setupI18n(app: App) {
	app.use(i18n);
}

export { i18n };
