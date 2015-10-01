Palaver 2.1.0
#############

:date: 2015-03-06
:category: apps
:tags: iOS, Palaver
:author: kyle

I'm excited to release a new version of Palaver, 2.1.0. This update includes a brand new dark mode for Palaver. The application can detect when the screen brightness is down and automatically switch between light and dark mode.

.. image:: {attach}/images/palaver-210.jpg
    :alt: Palaver 2.1.0 Light and Dark mode
    :width: 750
    :height: 1334
    :scale: 45%

---

Changes in 2.1
--------------

- Brand new light and dark variants of the Palaver interface.
- Introduced light variants of the "Sunburn", "Solarized" and "Simplified" themes.
- Added the ability to re-arrange the order of your networks.
- We've reintroduced nick highlighting inside of messages.
- We now show the amount of users in a channel at the top of the nick list.
- Added a new `/clearbuffer` shortcut for ZNC users.
- Translated the application into Spanish and Czech.
- You can now tap on any nickname inside a channel to perform actions on the user such as whois.

Bug fixes
~~~~~~~~~

- Fixes an issue with receiving a large amount of messages at once (i.e, with ZNC).
- Now correctly tracks when channel keys change (channel `+k` mode).
- Fixes an issue where certain changes in channel modes were not tracked correctly.
- Fixes an issue where hitting send on a message could trigger a nick-name completion.

