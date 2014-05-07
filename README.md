<img src="http://boeddo.com/assets/img/centr-logo.png" width='447' alt='jquery.pep.js'>
----

Minimal jQuery plugin to center objects.

## Getting Started
Getting started is simple: include jQuery, include Centr, then:
```javascript
$('#object').centr();
```

## Usage

Centr contains a few options. You can `center horizontal`, `center vertical`, `add a class` & `center the text`.

`center horizontal`

```javascript
$('#object').centr();
```

```javascript
$('#object').centr({
    axisX: true
});
```

`center vertical`

```javascript
$('#object').centr({
    axisX: false,
    axisY: true
});
```

`horizontal & vertical`

```javascript
$('#object').centr({
    axisX: true,
    axisY: true
});
```

`add class`

```javascript
$('#object').centr({
    addClass: true // add class "centered"
});
```

`center the text`

```javascript
$('#object').centr({
    textCenter: true
});
```

## Examples

Check my website for examples and more information: http://boeddo.com/centr

## Support

Centr support almost every browser. That's great, huh?

## Author

Centr is made by [Quincy Kools](http://boeddo.com).

## License

Centr is licensed under the [MIT License](http://www.tldrlegal.com/license/mit-license)
