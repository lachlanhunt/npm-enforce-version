# npm Enforce Version

Check a version of npm is properly installed. Enforce a version of npm on your dev or production environment.

# How-to

Specify the required npm version range in your package.json using the engines field.

```json
{
    "name": "example",
    "engines": {
        "npm": "^6.9.0"
    }
}
```

Any valid semver range will work.

Then install this package in your dev-dependencies, e.g.

```npm i --save-dev npm-enforce-version```

If someone installs your package without having an npm version that matches the specified semver range, installation will fail.
