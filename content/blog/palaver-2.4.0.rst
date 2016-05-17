Palaver 2.4.0
#############

:date: 2016-05-17
:category: apps
:tags: iOS, Palaver
:author: kyle

We're making it even easier to upload images in `Palaver
<https://palaverapp.com>`_. Version 2.4 brings a new image picker so you can
upload recent images directly from Palaver.

.. image:: {attach}/images/palaver-240.jpg
    :alt: Palaver 2.4.0 Image Upload
    :width: 750
    :height: 1334
    :scale: 45%

---

Changes in 2.4
--------------

- Upload recent images directly from image upload instead of going into your
  camera roll.
- Open links from messages inside the app instead of jumping out to Safari.
- Palaver will no longer display channel topic when reconnecting multiple
  times.


Bug fixes
~~~~~~~~~

- Performance improvements with channel lists via `/list`.
- Fixes an issue where push notifications may not work after restoring your
  device from a backup.
- Various improvements to improve the experience of using Palaver on iPads,
  including fixing issues you might've faced when switching to Palaver via iPad
  Split View.
- Palaver will now use a monospaced font for message timestamps, this improves
  the alignment of messages.
- We no longer grey out messages when they come from ZNC buffers.
