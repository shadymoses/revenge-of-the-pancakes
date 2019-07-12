# Infinite house of pancakes

To run the project, clone the repository and then run `npm run flip` and pass a series of pancake strings (eg +-).

```bash
$ npm run flip -- +- --+- +-+-+-
```

You can also get more verbose output that will show the series of moves made by passing true as the final input.

```bash
$ npm run flip +-- -++ +-+-+- true
```

To run the jest tests:

```bash
$ npm install
$ npm test
```
