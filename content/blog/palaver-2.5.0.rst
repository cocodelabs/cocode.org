Palaver 2.5
###########

:date: 2016-12-21
:category: apps
:tags: iOS, Palaver
:author: kyle

Palaver 2.5 includes some big changes on how we store messages. Your
conversations will no longer be cleared when restarting the application. When
you open Palaver, all of your existing messages will be available so you don't
miss a thing.

.. image:: {attach}/images/palaver-251.jpg
    :alt: Palaver 2.5.1 Peek and Pop
    :width: 750
    :height: 1334
    :scale: 45%

---

We've also made various usability and interface tweaks to improve the
day-to-day experience of using Palaver along with adding some much desired
power-user features. We have significantly improve the channel settings page to
include new controls to view and change channel modes.

Changes in 2.5
--------------

Enhancements
~~~~~~~~~~~~

* Messages are now saved and persisted across application launches.
* Peek and Pop is supported for all links and queries.
* New controls allowing you to view and modify channel modes.
* Improved user experience while performing a whois on a user.

New Commands
^^^^^^^^^^^^

* ``/clearall`` - Allows you to clear all queries in the network.
* ``/readall`` - Allows you to mark all queries in the network as read.
* ``/closeall`` - Allows you to close all queries in the network.
* ``/sysinfo``

New Keyboard Shortcuts
^^^^^^^^^^^^^^^^^^^^^^

New keyboard shortcuts for bluetooth and USB connected keyboards.

* ``⌘ + [`` - Jumps to previous query.
* ``⌘ + ]`` - Jumps to next query.
* ``⇧ + ⌘ + [`` - Jumps to previous unread query.
* ``⇧ + ⌘ + ]`` - Jumps to next unread query.
* ``⌘ + W`` - Closes the current query.
* Holding ``⌘`` will show you full help describing all keyboard shortcuts.

Bug fixes
~~~~~~~~~

- Huge improvements to VoiceOver support.
- Fixes problems while connecting to IPv4 IRC networks with IPv6 mobile
  providers which resulted in a connection error.
- Huge speed improvement while loading large and fast IRC buffers.
- Many more fixes and enhancements to improve the stability of Palaver.
