
# eslint-config-robin

These are the rules that are used in my ([Robin Berjon](http://berjon.com/)) projects.

## Usage

Obtaining it is simple:

    npm install --save-dev eslint-config-robin

Note that you do not need to install a bunch of other modules for this to work, it is meant to be
self-contained so as to be simple to install.

Normally, all your `.eslintrc` needs to contain is:

```json
{
  "extends": "robin"
}
```

### Atom

This will just work with the `linter` and `linter-eslint` plugins; just be sure to configure the
latter not to use the global eslint.
