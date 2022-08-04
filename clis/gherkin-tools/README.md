oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @liebsoer/gherking-tools
$ gherkin-tools COMMAND
running command...
$ gherkin-tools (--version)
@liebsoer/gherking-tools/0.0.0 darwin-x64 node-v16.16.0
$ gherkin-tools --help [COMMAND]
USAGE
  $ gherkin-tools COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gherkin-tools hello PERSON`](#gherkin-tools-hello-person)
* [`gherkin-tools hello world`](#gherkin-tools-hello-world)
* [`gherkin-tools help [COMMAND]`](#gherkin-tools-help-command)
* [`gherkin-tools plugins`](#gherkin-tools-plugins)
* [`gherkin-tools plugins:install PLUGIN...`](#gherkin-tools-pluginsinstall-plugin)
* [`gherkin-tools plugins:inspect PLUGIN...`](#gherkin-tools-pluginsinspect-plugin)
* [`gherkin-tools plugins:install PLUGIN...`](#gherkin-tools-pluginsinstall-plugin-1)
* [`gherkin-tools plugins:link PLUGIN`](#gherkin-tools-pluginslink-plugin)
* [`gherkin-tools plugins:uninstall PLUGIN...`](#gherkin-tools-pluginsuninstall-plugin)
* [`gherkin-tools plugins:uninstall PLUGIN...`](#gherkin-tools-pluginsuninstall-plugin-1)
* [`gherkin-tools plugins:uninstall PLUGIN...`](#gherkin-tools-pluginsuninstall-plugin-2)
* [`gherkin-tools plugins update`](#gherkin-tools-plugins-update)

## `gherkin-tools hello PERSON`

Say hello

```
USAGE
  $ gherkin-tools hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/liebsoer/toolbox/blob/v0.0.0/dist/commands/hello/index.ts)_

## `gherkin-tools hello world`

Say hello world

```
USAGE
  $ gherkin-tools hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `gherkin-tools help [COMMAND]`

Display help for gherkin-tools.

```
USAGE
  $ gherkin-tools help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for gherkin-tools.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `gherkin-tools plugins`

List installed plugins.

```
USAGE
  $ gherkin-tools plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ gherkin-tools plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `gherkin-tools plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ gherkin-tools plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ gherkin-tools plugins add

EXAMPLES
  $ gherkin-tools plugins:install myplugin 

  $ gherkin-tools plugins:install https://github.com/someuser/someplugin

  $ gherkin-tools plugins:install someuser/someplugin
```

## `gherkin-tools plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ gherkin-tools plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ gherkin-tools plugins:inspect myplugin
```

## `gherkin-tools plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ gherkin-tools plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ gherkin-tools plugins add

EXAMPLES
  $ gherkin-tools plugins:install myplugin 

  $ gherkin-tools plugins:install https://github.com/someuser/someplugin

  $ gherkin-tools plugins:install someuser/someplugin
```

## `gherkin-tools plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ gherkin-tools plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ gherkin-tools plugins:link myplugin
```

## `gherkin-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ gherkin-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ gherkin-tools plugins unlink
  $ gherkin-tools plugins remove
```

## `gherkin-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ gherkin-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ gherkin-tools plugins unlink
  $ gherkin-tools plugins remove
```

## `gherkin-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ gherkin-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ gherkin-tools plugins unlink
  $ gherkin-tools plugins remove
```

## `gherkin-tools plugins update`

Update installed plugins.

```
USAGE
  $ gherkin-tools plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
