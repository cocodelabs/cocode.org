#!/usr/bin/env python
# -*- coding: utf-8 -*- #

from __future__ import unicode_literals
from os import environ


AUTHOR = 'Kyle Fuller'
SITENAME = 'Cocode'
SITEURL = environ.get('PELICAN_SITEURL', 'https://cocode.org')

TIMEZONE = 'Europe/London'

DEFAULT_LANG = 'en'
DEFAULT_PAGINATION = 0

RELATIVE_URLS = False

DELETE_OUTPUT_DIRECTORY = True

# Theme

THEME = 'theme'

DIRECT_TEMPLATES = ('index', 'blog_index',)
PAGINATED_DIRECT_TEMPLATES = ('blog_index',)

# Pages

PAGE_URL = '{slug}'
PAGE_SAVE_AS = '{slug}/index.html'

# Blog

BLOG_URL = 'blog/'
BLOG_INDEX_SAVE_AS = 'blog/index.html'

ARTICLE_PATHS = ('blog',)
ARTICLE_URL = 'blog/{slug}/'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'

TAGS_SAVE_AS = 'blog/tags/index.html'

TAG_URL = 'blog/tags/{slug}/'
TAG_SAVE_AS = 'blog/tags/{slug}/index.html'

CATEGORY_URL = 'blog/category/{slug}/'
CATEGORY_SAVE_AS = 'blog/category/{slug}/index.html'

AUTHOR_URL = 'blog/authors/{slug}/'
AUTHOR_SAVE_AS = 'blog/authors/{slug}/index.html'

ARCHIVES_SAVE_AS = 'blog/archvives/index.html'

STATIC_PATHS = ('images',)

FEED_DOMAIN = SITEURL
FEED_ALL_ATOM = 'blog/feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'blog/feeds/%s.atom.xml'
TRANSLATION_FEED_ATOM = 'blog/feeds/all-%s.atom.xml'

SUMMARY_MAX_LENGTH = 50

DISQUS_SITENAME = 'cocodeorg'

# Plugins

PLUGIN_PATHS = ('plugins',)
PLUGINS = ('author', 'summary', 'assets', 'gzip_cache')

# Assets (plugin)
ASSET_SOURCE_PATHS = ('static',)

SUMMARY_END_MARKER = '---'

# Authors

AUTHORS = {
    'kyle': {
        'name': 'Kyle Fuller',
        'title': 'Managing Director',
        'website': 'https://fuller.li/',
        'email': 'kyle@cocode.org',
        'avatar': 'https://www.gravatar.com/avatar/d200a17dd269fd4001bacb11662dab4b.png?s=100'
    },
    'dennis': {
    	'name': 'Dennis Collaris',
        'title': 'UI/UX developer',
        'website': 'http://decode.design',
        'email': 'dennis@cocode.org',
        'avatar': 'http://s.gravatar.com/avatar/f0bd7d7d3ab88a6eb7fcaa44e8ee316b?s=100'
     }
}

# Analytics

#GAUGES = '51f83b87108d7b160a000007'
MIXPANEL = 'f2bbf83d0665a60a2d9280c205f5583e'

