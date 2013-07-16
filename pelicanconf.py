#!/usr/bin/env python
# -*- coding: utf-8 -*- #

from __future__ import unicode_literals
from os import environ


AUTHOR = 'Kyle Fuller'
SITENAME = 'Cocode'
SITEURL = environ.get('PELICAN_SITEURL', 'http://www.cocode.org')

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

ARTICLE_DIR = 'blog'
ARTICLE_URL = 'blog/{slug}/'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'

TAGS_SAVE_AS = 'blog/tags/index.html'

TAG_URL = 'blog/tags/{slug}/'
TAG_SAVE_AS = 'blog/tags/{slug}/index.html'

CATEGORY_URL = 'blog/category/{slug}/'
CATEGORY_SAVE_AS = 'blog/category/{slug}/index.html'

ARCHIVES_SAVE_AS = 'blog/archvives/index.html'

FEED_DOMAIN = SITEURL
FEED_ALL_ATOM = 'blog/feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'blog/feeds/%s.atom.xml'
TRANSLATION_FEED_ATOM = 'blog/feeds/all-%s.atom.xml'

SUMMARY_MAX_LENGTH = 50
