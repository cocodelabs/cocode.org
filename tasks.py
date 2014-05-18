import threading
from time import sleep
from invoke import run, task

@task
def clean():
    run('rm -fr output')

@task
def build():
    run('pelican content -s pelicanconf.py')

@task
def watch():
    run('PELICAN_SITEURL="http://localhost:8000" pelican content -s pelicanconf.py -r')

@task
def serve():
    run('cd output && python -m SimpleHTTPServer')

@task
def develop():
    watch_thread = threading.Thread(target=watch)
    running_thread = threading.Thread(target=serve)

    watch_thread.start()
    sleep(0.5)

    running_thread.start()
    print('Listening on http://localhost:8000\n')

    sleep(1.0)
    run('open http://localhost:8000')

    watch_thread.join()

