[cocode.org](https://cocode.org/)
=================================

The Cocode website is powered by [Pelican](http://getpelican.com/), the Python
static site generator.

## Setup

This assumes you have the python virtualenv package. `pip install virtualenv`.

1. Create a virtual environment:

        $ virtualenv venv

2. Activate the virtual environment:

        $ source venv/bin/activate

   Or in the fish shell:

        $ source venv/bin/activate.fish

3. Install the dependencies:

        $ pip install -r requirements.txt

## Development

To start a local server, you can run the following in your shell:

    $ invoke develop

