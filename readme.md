# About This Child Theme

Hi there! This theme was built by [K.J. Roelke](https://kjroelke.online) during his time at [First Methodist Carrollton](https://firstchurch.net). It is a child of [Pro Theme](https://theme.co/pro) and is specifically meant for this organiztion.

---

## Changelog

## v2.4.1

- Update JS to better handle MEC Event Single's Related Events `click` and also fix a bug with the Wednesday Night Meals not disappearing like they were supposed to.

## v2.4

- Updated MEC Event Single.php to include more modules from MEC and have better styling.

## v2.3

- updated MEC Event Single.php page to utilize `position:sticky` and reduce code complexity.

## 2.2.0

- Updated `init()`
- Controlled `/menu` with Child Theme JS to hide Wednesday Nights that have already happened
- Migrated customJS that adds line-breaks to side dishes into Child Theme.

## Previous Versions

- I didn't think about doing a changelog....so that's where I'm at.

---

## Background

Initially published in the summer of 2022 after KJ took over the Communications Director position, this theme is specificially meant to act similarly to an "out-of-the-box" Wordpress solution. The website was migrated away from an [Ekklesia360 site](https://ekklesia360.com) because that site builder, while designed specifically for churches, was too restrictive to do anything actually useful beyond posting simple content.

While I believe Ekklesia is a fine CMS and web builder, I decided migrate because Wordpress is more ubiquitous and I believed I could make a highly specialized theme for the church. **Pro Theme** can be highly customized and extended (even at a code-base level) upon install, but I still felt that I should abstract away certain styles or functions in case the person after me was familiar with Wordpress as a CMS but wasn't a super-knowledgeable Full Stack Wordpress Developer (as is often the case with Communications Directors/Managers/Coordinators).

---

## Child Theme Specs

### `functions.php`

- Enqueues KJ's CSS & JS, Planning Center JS.
- Added site data (global `fmcData` object) that has helpful bits of info I need across the site. Namely, dates and the `root_url`.

### Custom JS

Custom JS & planningCenterForm `<script>`s are loaded in the footer. This section contains information pertaining to custom JS files that aren't attached to a specific page/section of the website.

- `utilities.js`
  - The copyright in the Footer uses a simple IIFE to keep the year up-to-date.
  - Some simple selector functions to make Vanilla JS a little easier on my fingers.
- `hub.js`
  - Our Central Hub (/hub) needed to show/hide a section of content based on whether or not the current Day was Sunday. So I wrote a quick function to do that _because_ something with [Pro Theme's Conditions](https://theme.co/docs/conditions-and-assignments) wasn't working right (I suspect it is a caching issue).
- `jobs.js`
  - Essentially, the same idea as `hub.js`, except it is used to hide the `archive-jobs` template (since that template is, apparently, based on Pro Theme's _Content / Sidebar Right_ layout)
    - I might upload a new php file to handle this...I just wrote a quick `js` file because I was already writing `js` files.
- `wednesdayNightMenu.js`
  - Hides menu items once their dates move to the past.
  - Also adds a line break `<br/>` after each side dish (except the last one) so it looks pretty :P

### Custom CSS (SCSS)

This mostly exists so I could reset some annoying quirks of **Pro Theme** and have it abstracted away. There's more CSS in the theme's _Global CSS_ section, but some of this I wanted to feel "default to the theme" so I hid it away in the Child theme.

### Custom Sections

#### `mec-events.php`

For some reason, Modern Events Calendar doesn't fire properly. The Standard and Modern Single Event displays both miss key aspects, so I neeed to create a display page that contained everything I needed (and wanted).

This page is styled with custom SCSS, bundled into the Child Theme.

##### `mec-events.js`

A simple function to hide the 'related-events' container if there are no related events to display (again, part of the buggy nature of this particular instance of MEC).

#### `search.php`

Once I built some Layouts in Cornerstone, the basic search archive page would get overridden by those Layouts, so this custom php file is to provide a more simple 'results' layout.

---

# Questions or Comments?

[Feel free to contact me](mailto:kj.roelke@gmail.com) if you'd like to chat about this. Or drop a comment on the repo? I'm not really sure how Github works (socially) to be honest...
