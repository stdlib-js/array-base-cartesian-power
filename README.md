<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# cartesianPower

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the [Cartesian power][cartesian-product].

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-cartesian-power
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var cartesianPower = require( '@stdlib/array-base-cartesian-power' );
```

#### cartesianPower( x, n )

Returns the [Cartesian power][cartesian-product].

```javascript
var x = [ 1, 2 ];

var out = cartesianPower( x, 2 );
// returns [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
```

If provided an empty array, the function returns an empty array.

```javascript
var out = cartesianPower( [], 2 );
// returns []
```

If `n` is less than or equal to zero, the function returns an empty array.

```javascript
var out = cartesianPower( [ 1, 2 ], 0 );
// returns []
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var cartesianPower = require( '@stdlib/array-base-cartesian-power' );

var x = linspace( 0, 5, 6 );

var out = cartesianPower( x, 3 );
// returns [ [ 0, 0, 0 ], [ 0, 0, 1 ], ..., [ 5, 5, 4 ], [ 5, 5, 5 ] ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-cartesian-power.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-cartesian-power

[test-image]: https://github.com/stdlib-js/array-base-cartesian-power/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-cartesian-power/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-cartesian-power/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-cartesian-power?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-cartesian-power.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-cartesian-power/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-cartesian-power/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-cartesian-power/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-cartesian-power/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-cartesian-power/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-cartesian-power/main/LICENSE

[cartesian-product]: https://en.wikipedia.org/wiki/Cartesian_product

</section>

<!-- /.links -->
