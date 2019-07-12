# Infinite house of pancakes

This is packaged as a simple cli tool. To run the project:

1. clone the repository
2. `npm install -g`
3. Run the `pancakes` command and pass a series of pancake strings (eg +- +-+-+-)

You can get more verbose output that will show the series of moves made by passing `--verbose` as an argument.

```bash
$ pancakes +-- -++ +-+-+- --verbose
```

To run the jest tests (after installing):

```bash
$ npm test
```
