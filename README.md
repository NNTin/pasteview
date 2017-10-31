# pasteview

Goal of project: Make reading pastes from Pastebin more enjoyable.

## Functionality

* customize reading area
* customize font size
* customize background and font color
* save settings (on page reload you have your old settings) and reset settings
* show/hide settings

## Limitation

It only accepts pastes from pastebin **pro** accounts. (Pastes from pastebin pro accounts have [CORS headers](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) enabled.)

## Todo's:

* help/default text when no paste or non-pro paste was provided
* touch up the style, especially for mobile users
* add error message when paste is from a non-pro account
* in addition to reset, add custom settings (light/dark/... mode)
* fix [vue-color](https://xiaokaike.github.io/vue-color/) not correctly jumping when clicking reset button

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# github pages deploy
npm run deploy
```
