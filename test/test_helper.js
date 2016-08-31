import jsdom from 'jsdom';
import jquery from 'jquery';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.documnet.defaultView;
const $ = jquery(global.window);
