# Changelog

## [1.2.0](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v1.1.4...protobufjs-cli-v1.2.0) (2024-12-30)


### Features

* add feature resolution ([a9ffc8a](https://github.com/protobufjs/protobuf.js/commit/a9ffc8a7b593209642fc9d89e884ac6c4e746494))
* api_converters_editions tests added and run successfully" ([b4b5ca4](https://github.com/protobufjs/protobuf.js/commit/b4b5ca468fcde2082d65a72b508f18d07d75245c))

## [1.1.4](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v1.1.3...protobufjs-cli-v1.1.4) (2024-08-22)


### Bug Fixes

* include ([28e3334](https://github.com/protobufjs/protobuf.js/commit/28e333415d3c85687810e164125997d17baba0bd))

## [1.1.3](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v1.1.2...protobufjs-cli-v1.1.3) (2024-08-16)


### Bug Fixes

* handle nullability for optional fields ([59569c1](https://github.com/protobufjs/protobuf.js/commit/59569c12c85c1c7b783ace9a71775b1d05a08e9c))

## [1.1.2](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v1.1.1...protobufjs-cli-v1.1.2) (2023-08-21)


### Bug Fixes

* possible infinite loop when parsing option ([#1923](https://github.com/protobufjs/protobuf.js/issues/1923)) ([f2a8620](https://github.com/protobufjs/protobuf.js/commit/f2a86201799af5842e1339c22950abbb3db00f51))

## [1.1.1](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v1.1.0...protobufjs-cli-v1.1.1) (2023-02-02)


### Bug Fixes

* **cli:** fix relative path to Google pb files ([#1859](https://github.com/protobufjs/protobuf.js/issues/1859)) ([e42eea4](https://github.com/protobufjs/protobuf.js/commit/e42eea4868b11f4a07934804a56683321ed191e2))

## [1.1.0](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v1.0.2...protobufjs-cli-v1.1.0) (2023-01-24)


### Features

* **cli:** generate static files at the granularity of proto messages ([#1840](https://github.com/protobufjs/protobuf.js/issues/1840)) ([32f2d6a](https://github.com/protobufjs/protobuf.js/commit/32f2d6a68b27997bd0f7619998695a9fa7a4fd70))

## [1.0.2](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v1.0.1...protobufjs-cli-v1.0.2) (2022-09-09)


### Bug Fixes

* add import long to the generated .d.ts ([#1802](https://github.com/protobufjs/protobuf.js/issues/1802)) ([7c27b5a](https://github.com/protobufjs/protobuf.js/commit/7c27b5ad5d161c9f3711aa053ca704f8e1224e90))

## [1.0.1](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v1.0.0...protobufjs-cli-v1.0.1) (2022-08-26)


### Bug Fixes

* **deps:** update dependency glob to v8 ([#1750](https://github.com/protobufjs/protobuf.js/issues/1750)) ([8303a64](https://github.com/protobufjs/protobuf.js/commit/8303a648bc12dcea5aa8e7efa042de39011857f9))
* remove unused `@types/long` ([#1785](https://github.com/protobufjs/protobuf.js/issues/1785)) ([0f4af83](https://github.com/protobufjs/protobuf.js/commit/0f4af83e4ed3cef1ec035c2833e0b06cab0bd87f))
* **types:** update type deps ([#1776](https://github.com/protobufjs/protobuf.js/issues/1776)) ([d87978b](https://github.com/protobufjs/protobuf.js/commit/d87978b8eb2a176676c58379a89206b94a6d926a))

## [1.0.0](https://github.com/protobufjs/protobuf.js/compare/protobufjs-cli-v0.1.0...protobufjs-cli-v1.0.0) (2022-07-08)


### ⚠ BREAKING CHANGES

* drop support for Node 4, 6, 8, 10 (#1764)
* move command line tool to a new package named protobufjs-cli (#1234)

### Features

* add --no-service option for pbjs static target ([#1577](https://github.com/protobufjs/protobuf.js/issues/1577)) ([d01394a](https://github.com/protobufjs/protobuf.js/commit/d01394a1463062824c066b653aad53c449752202))
* add alt-comment CLI option ([#1692](https://github.com/protobufjs/protobuf.js/issues/1692)) ([7558ef0](https://github.com/protobufjs/protobuf.js/commit/7558ef0f93177978272f68f1710144a26b63e525))
* add getTypeUrl method to generated code ([#1463](https://github.com/protobufjs/protobuf.js/issues/1463)) ([d13d5d5](https://github.com/protobufjs/protobuf.js/commit/d13d5d5688052e366aa2e9169f50dfca376b32cf))
* add null-defaults option ([#1611](https://github.com/protobufjs/protobuf.js/issues/1611)) ([6e713ba](https://github.com/protobufjs/protobuf.js/commit/6e713baf54bd987ae52cbf92a4f2742c70201dc0))
* add support for buffer configuration ([#1372](https://github.com/protobufjs/protobuf.js/issues/1372)) ([101aa1a](https://github.com/protobufjs/protobuf.js/commit/101aa1a4f148516fdc83a74f54a229f06e24a5de))
* allow message.getTypeUrl provide custom typeUrlPrefix ([#1762](https://github.com/protobufjs/protobuf.js/issues/1762)) ([8aad1dd](https://github.com/protobufjs/protobuf.js/commit/8aad1dd994b1fc1f23bd71adf3a81b7a5616b210))
* move command line tool to a new package named protobufjs-cli ([#1234](https://github.com/protobufjs/protobuf.js/issues/1234)) ([da34f43](https://github.com/protobufjs/protobuf.js/commit/da34f43ccd51ad97017e139f137521782f5ef119))
* prepare initial publication of cli ([#1752](https://github.com/protobufjs/protobuf.js/issues/1752)) ([64811d5](https://github.com/protobufjs/protobuf.js/commit/64811d5878c31e4a86a39da5fec6aea35da22fcd))
* proto3 optional support ([#1584](https://github.com/protobufjs/protobuf.js/issues/1584)) ([6c4d307](https://github.com/protobufjs/protobuf.js/commit/6c4d30716a9a756dcdc21d64f9c9d069315fc5b1))
* update dependencies / general cleanup ([#1356](https://github.com/protobufjs/protobuf.js/issues/1356)) ([42f49b4](https://github.com/protobufjs/protobuf.js/commit/42f49b43f692c24c2bc1ae081b4d1ad9fa173cd7))


### Bug Fixes

* **deps:** patch minimatch vulnerability ([#1704](https://github.com/protobufjs/protobuf.js/issues/1704)) ([bac61b8](https://github.com/protobufjs/protobuf.js/commit/bac61b8c2757804bbb9c5fa0f8bc6a7bcf0bb374))
* drop support for Node 4, 6, 8, 10 ([#1764](https://github.com/protobufjs/protobuf.js/issues/1764)) ([50370dd](https://github.com/protobufjs/protobuf.js/commit/50370dd7747a0986e83ddbe51c54b97033af5ead))
* es6 export enum ([#1446](https://github.com/protobufjs/protobuf.js/issues/1446)) ([9f33784](https://github.com/protobufjs/protobuf.js/commit/9f33784350b1efc2e774bbfc087cbd2c47828748))
* fromObject should not initialize oneof members ([#1597](https://github.com/protobufjs/protobuf.js/issues/1597)) ([90afe44](https://github.com/protobufjs/protobuf.js/commit/90afe4412de8070b0c0681e5905a6e0213072a85))
* proper relative path to protobufjs in cli ([#1753](https://github.com/protobufjs/protobuf.js/issues/1753)) ([a1d6029](https://github.com/protobufjs/protobuf.js/commit/a1d60292ecb22fcf89c493c562ae07ab10ef49c9))
* typo in pbjs help text ([#1552](https://github.com/protobufjs/protobuf.js/issues/1552)) ([7f46dbe](https://github.com/protobufjs/protobuf.js/commit/7f46dbeb538a6277035a896e1ab5e1a070e28681))
