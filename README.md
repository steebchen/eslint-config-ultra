# eslint-config-ultra

This is a eslint plugin ([http://eslint.org](eslint)) with my personal coding style. It is based on [standard](http://standardjs.com/) but with tabs and some extra rules.

## Why tabs

Because it's the only way. I used to indent my code with 2 spaces (4 are just too much! :P), but using tabs is just the right way. Period.
When using tabs, one indentation level equals one character. And everyone can decide how a tab is displayed.

Github sadly displays tab as 8 spaces, which looks kinda ugly. However, there are dozens of plugins which fix that with a single click.
The same applies to editors like nano where you can simply set the tabsize in your settings.

Usage:

```sh
# installing eslint again here is required for a local install
npm i eslint eslint-config-ultra -D
# or
yarn add eslint eslint-config-ultra --dev
```

Then, add the following snippet to your .eslintrc.json (very similar to a js/yml config):

`"extends": "ultra"`

Yay!
