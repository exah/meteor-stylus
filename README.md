# Stylus for Meteor

[Stylus](http://stylus-lang.com/) is a CSS pre-processor with a
simple syntax and expressive dynamic behaviour. It allows for more compact
stylesheets and helps reduce code duplication in CSS files.

With the stylus package installed, `.styl` files in your application are
automatically compiled to CSS and the results are included in the client CSS.

## Source Maps

This package also automatically provide source map in the development
environment, so that you can read your original stylus file in the debugger
tools of the browser.

## Imports

If you want to `@import` a file, give it the extension `.import.styl` to prevent
Meteor from processing it independently.

This packages supports both relative and absolute `@import`. Absolute `@import`
are relative to your root meteor application directory, you shouldn't precede
its path by `/`.

## Included packages

### [Stylus](http://stylus-lang.com/) 0.54.5

Expressive, dynamic, robust CSS. Curly braces and semicolons: optional.

## Compatibility

The package should be fully compatible with Meteor 0.9.

All of these packages should be compatible with each other. That said, there are
not many tests at the moment. Feel free to PR any tests you think might be
handy.

NOTE: This may not be compatible with other Meteor Stylus libraries. Please
uninstall anything related to Stylus before running this, otherwise your
application may fail with a fibers-related error.

## Updates

Feel free to contact the author or submit a PR if these get terribly out-of-
date, or if you have any suggestions for other packages to be included.

## Testing

Basic tests for each module are provided. If you don't test in Chrome, you're
gonna have a bad time.

To test, run:

```
meteor test-packages ./
```
