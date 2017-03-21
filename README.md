
# eslint-config-scienceai

JavaScript — FOR SCIENCE!

These are the rules that are in common use in science.ai projects. Note that we
use [prettier](https://github.com/prettier/prettier) for style.

## Usage

Obtaining it is simple:

    npm install --save-dev eslint-config-scienceai

Note that you do not need to install a bunch of other modules for this to work, it is meant to be
self-contained so as to be simple to install.

Normally, all your `.eslintrc` needs to contain is:

```json
{
  "extends": "scienceai"
}
```

### Atom

This will just work with the `linter` and `linter-eslint` plugins; just be sure to configure the
latter not to use the global eslint.

### emacs

An example can be found at https://github.com/sballesteros/dot-emacs
