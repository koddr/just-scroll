![just scroll github logo](https://koddr.me/images/projects/just-scroll-sass-logo-github.jpg)

# Just Scroll [![npm version](https://badge.fury.io/js/just-scroll.svg)](https://badge.fury.io/js/just-scroll)

Simple indicate the possibility of scrolling on a page with СSS3 animation.

## Features

* Work on all modern and many older browsers
* Have _SASS_ version for re-build (developers only)
* Include colors, helpers and more stuff
* Support for your issues

**Desktop browsers support**

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE" width="36px" height="36px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="36px" height="36px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="36px" height="36px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="36px" height="36px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="36px" height="36px" />](http://godban.github.io/browsers-support-badges/) |
| --------- | --------- | --------- | --------- | --------- |
| 10+ | 16+ | 3+ | 5+ | 12.10+ |

**Mobile browsers support**

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox Mobile" width="36px" height="36px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="36px" height="36px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="36px" height="36px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera-mini.png" alt="Opera Mini" width="36px" height="36px" />](http://godban.github.io/browsers-support-badges/) |
| --------- | --------- | --------- | --------- |
| 16+ | 2+ | 4+ | 12.10+ |

## How to use?

* First, install from `npm` to your project:

```
$ npm install just-scroll --save
```

* Next, import `just-scroll` to your builded _SASS_ (or _SCSS_) file:

```sass
@import('just-scroll')
```

* Good. Now, add special container with `.just-scroll`, `.to-down` (or `.to-up` if you want to indicate _scroll up_ action) and `.color-*` classes:

```html
<div class="just-scroll to-down color-black">
  ...
</div>
```

* And finally, place animated element into `.just-scroll` container:

```html
<div class="just-scroll to-down color-black">
  <div class="mouse-icon">
    <div class="wheel"></div>
  </div>
</div>
```

### More options?

Just add this class to `.just-scroll` container:

#### .to-*

| CSS Class | Description |
| --------- | --------- |
| `.to-up` | Animation scroll up |
| `.to-down` | Animation scroll down |

#### .color-*

| CSS Class | Description | Value |
| --------- | --------- | --------- |
| `.color-black` | Black color | `rgba(0, 0, 0, 1)` |
| `.color-white` | White color | `rgba(255, 255, 255, 1)` |
| `.color-green` | Green color | `rgba(35, 209, 96, 1)` |

#### .centered

| CSS Class | Description | Value |
| --------- | --------- | --------- |
| `.centered` | Place `.just-scroll` container to center of parent html element | `margin: 0 auto` |

## Animated elements

#### .mouse-icon

![just scroll example github](https://koddr.me/images/projects/just-scroll-sass-mouse-icon-example-github.gif?cache=1)

```html
<div class="mouse-icon">
  <div class="wheel"></div>
</div>
```

## Developers

Development and maintenance of `Just Scroll` project engaged by Vikky Shostak ([Koddr](https://koddr.me)). If you want to write a «thank you» or ask us about something, [use this e-mail](mailto:koddr.me@yandex.ru).

## Your help

If you want help, we will be glad reviews about `Just Scroll` on personal blogs (including Twitter), online media and/or specialized IT-portals. Thank you!

## License

[The MIT License (MIT)](https://github.com/koddr/mouse-icon-wheel/blob/master/LICENSE)
