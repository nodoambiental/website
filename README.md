
# Our public website

<p style="text-align:center;">Visit us at <a href="https://nodoambiental.org">nodoambiental.org</a>.<br>(in Spanish)</p>

[![Codacy Grade](https://app.codacy.com/project/badge/Grade/db929a95de9143a5a1a6df49f907030b)](https://www.codacy.com/gh/nodoambiental/website-version-1/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nodoambiental/website-version-1&amp;utm_campaign=Badge_Grade) [![DeepSource Issues](https://deepsource.io/gh/nodoambiental/website-version-1.svg/?label=active+issues&show_trend=true&token=M1h9O4ftajm72GxBp_rSBQ4h)](https://deepsource.io/gh/nodoambiental/website-version-1/?ref=repository-badge)

![GitHub last commit](https://img.shields.io/github/last-commit/nodoambiental/website-version-1) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/nodoambiental/website-version-1)

![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade-score/nodoambiental.org?publish) ![Security Headers (Don't follow redirects)](https://img.shields.io/security-headers?ignoreRedirects&url=https%3A%2F%2Fnodoambiental.org) ![PingPong uptime (last 30 days)](https://img.shields.io/pingpong/uptime/sp_5730e230eff6469e9c49556f640835d6)

![License](https://img.shields.io/github/license/nodoambiental/website-version-1) ![GitHub issues](https://img.shields.io/github/issues/nodoambiental/website-version-1)

<hr style="height:3px;background-color:#99339060;"><br>

## What is this?

Hi! This is the repo for the current version of our website. There's a [future version](https://github.com/nodoambiental/website-version-2) under development, but it will be a long way until we get there.

It is deployed as a static site, oriented towards optimizing load times, promoting our brand and acting as a welcome site for everyone to know better who we are and what we do.

## Why like this?

This site is built this way so all the data and page construction can be offloaded to an easier to manage structure for non-coders. Currently, most of the global website data lies in a bunch of `YAML` files, and the posts themselves are a bunch of markdown.

This way, the less technical members of our development group can manage the website without much hassle, but allowing it to be kept simple and headless. The next version will include a CMS so the whole of our editorial group can manage the site themselves.

## Building the site

You will need [`ruby`](https://www.ruby-lang.org/es/documentation/installation/) and [`bundler`](https://bundler.io/es/).

The site won't compile on any kind of current ruby version, _only_ in `2.5.1p57`, and in line with that, some dependencies are quite broken, so please respect the present `Gemfile.lock`.

### Build

1. Clone this repo

    ```shell
    git clone https://github.com/nodoambiental/website-version-1
    ```

2. Install dependencies

    ```shell
    bundle install
    ```

3. Build

    ```shell
    bundle exec jekyll build
    ```

### Ruby version management

For managing the ruby and gems versions you will need [rbenv](https://github.com/rbenv/rbenv), [rbenv-gemset](https://github.com/jf/rbenv-gemset), and [rbenv-bundler](https://github.com/carsomyr/rbenv-bundler).

So if you don't have any rvm installed, you will need to:

1. Install rbenv [according to your OS/distro](https://github.com/rbenv/rbenv#installation)

2. Install rbenv-gemset

    ```shell
    git clone git://github.com/jf/rbenv-gemset.git $HOME/.rbenv/plugins/rbenv-gemset
    ```

3. Install rbenv-bundler

    ```shell
    git clone git://github.com/carsomyr/rbenv-bundler.git $HOME/.rbenv/plugins/bundler
    ```

4. Install the correct ruby version

    ```shell
    rbenv install 2.5.1
    ```

5. Create the correct gemset

    ```shell
    rbenv gemset create 2.5.1 website-version-1
    ```

6. Activate the needed ruby version

    ```shell
    rbenv global 2.5.1
    ```

7. `cd` into the repo root and install the correct bundler

    ```shell
    rbenv rehash
    gem install bundler -v "$(grep -A 1 "BUNDLED WITH" Gemfile.lock | tail -n 1)"
    ```

    See [this](https://bundler.io/blog/2019/05/14/solutions-for-cant-find-gem-bundler-with-executable-bundle.html) about the weird bundle install command.

8. Restore the system ruby version

    ```shell
    rbenv global system
    ```

Then you can proceed normally.

Remember this commands **only work for Bash**, so use it or search how to correctly enable `rbenv` for your shell and modify the bundle installation command in step seven.

## Roadmap

In no particular order.

<hr style="height:1px;background-color:#99339060;">

- [ ] Get docs up to standard
  - [x] Rewrite `README`
  - [ ] Add structure specs to every folder
  - [ ] Add `docs/` and dump stuff there
  - [ ] Add `CONTRIBUTING`
  - [ ] Document hooks and extra build/deploy steps
  - [ ] Document bugs, quirks and upcoming features
  - [ ] Document `JS` and Liquid templates

- [ ] Ditch Jekyll and add Bazel as a build system
  - [x] Manage to get a working build server
  - [ ] Write general structure and required files
  - [ ] Add rules for Markdown
  - [ ] Add rules for Liquid
  - [ ] Add rules for bibliography
  - [ ] Add rules for navigation
  - [ ] Add rules for site structure / posts
  - [ ] Wrap up

- [ ] Cleanup site
  - [ ] Remove mainteinance banner
  - [ ] Clean structure
  - [ ] Fix obvious bugs

- [ ] Add localization
  - [x] Translate Readme
  - [ ] Translate structure specs
  - [ ] Translate `docs/`
  - [ ] Translate comments in source
  - [ ] Translate posts
  - [ ] Replace string literals for enums
  - [ ] Modify folder structure to allow for localization
  - [ ] Add localization strings files
  - [ ] Integrate with a crowdlating service

- [ ] Add proper CI/CD
  - [ ] Fix Drone
  - [ ] Get CircleCI working

- [ ] Reach feature parity between `master` and development branches
  - [ ] Fix styles
  - [ ] Fix build system
  - [ ] Fix bibliography changes
  - [ ] Reach parity itself

- [ ] Meta
  - [ ] Cleanup GH repo
  - [x] Add helping bots/apps
  - [ ] Put everything in the correct issues
  - [ ] Get up to standards
  - [ ] Write issue template
  - [ ] Set contributing guidelines
  - [ ] Enforce transparency and all relevant checks

<br/><br/>

![Made with love in Argentina](https://madewithlove.now.sh/ar?heart=true&template=for-the-badge)
