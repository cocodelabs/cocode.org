from pelican import signals

def author_context_injection(article_generator, metadata):
    author = metadata['author']

    authors = article_generator.settings.get('AUTHORS', {})

    if str(author) in authors:
        author_meta = authors[author]
        for key in author_meta:
            setattr(author, key, author_meta[key])

def register():
    signals.article_generator_context.connect(author_context_injection)

