# Mouse Icon Wheel

Simple СSS3 animation to indicate the possibility of scrolling on a page of your site.

<img src="https://koddr.me/images/projects/mouse-icon-wheel-logo-github.gif" alt="mouse icon wheel" />

## Features

* Work on all modern and many older browsers
* Have _SASS_ and classic _CSS_ versions
* Colors, helpers and more stuff
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
$ npm install mouse-icon-wheel
```

* Next, import to builded _SASS_ (or _SCSS_) file:

```sass
@import('mouse-icon-wheel')
```

* And now, add special container with `.mouse-icon`, `.color-*` and `.wheel` classes:

```html
<div class="mouse-icon color-black">
  <div class="wheel"></div>
</div>
```

### More options?

Just add this class to `.mouse-icon` container:

| CSS Class | Description | Value |
| --------- | --------- | --------- |
| `.color-black` | Black color | `rgba(0, 0, 0, 1)` |
| `.color-white` | White color | `rgba(255, 255, 255, 1)` |
| `.color-green` | Green color | `rgba(35, 209, 96, 1)` |
| `.centered` | Place container to center | `margin: 0 auto` |

## License

[The MIT License (MIT)](https://github.com/koddr/mouse-icon-wheel/blob/master/LICENSE)