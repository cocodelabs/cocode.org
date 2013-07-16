#!/usr/bin/env python
# -*- coding: utf-8 -*- #

from __future__ import unicode_literals
from os import environ


AUTHOR = u'Kyle Fuller'
SITENAME = u'Cocode'
SITEURL = environ.get('PELICAN_SITEURL', 'http://www.cocode.org')

TIMEZONE = 'Europe/London'

DEFAULT_LANG = u'en'
DEFAULT_PAGINATION = 10

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

BLOG_INDEX_SAVE_AS = 'blog/index.html'

ARTICLE_DIR = 'blog'
ARTICLE_URL = 'blog/{slug}'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'

FEED_ALL_ATOM = 'blog/feeds/all.atom.xml'

SUMMARY_MAX_LENGTH = 50
