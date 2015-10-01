Palaver 2.2.0
#############

:date: 2015-09-24
:category: apps
:tags: iOS, Palaver
:author: dennis

After a long wait we finally released the new 2.2 upgrade for Palaver. This update brings many enhancements including image preview to view images directly inside conversations. We've also introduced a new notification settings for channels, iPhone 6 Plus split view and added support for the /ctcp command.

.. image:: {attach}/images/palaver-220.png
    :alt: Palaver 2.2.0 Image preview
    :width: 750
    :height: 1334
    :scale: 45%

---

Changes in 2.2
--------------

- Image preview - You can now view images in-line.
- Palaver is now fully localised into Japanese.
- Support for iPad's new multitasking "Split View".
- Channel settings - You can now configure push notifications per channel.
- New support for the `/ctcp` command.
- Support for the `znc.in/playback <http://wiki.znc.in/Playback>`_ ZNC module.
- Support for the `batch IRCv3 extension <http://ircv3.net/specs/extensions/batch-3.2.html>`_.
- Dedicated and improved support for ZNC authentication. If you're having
  problems with the new upgrade, be sure to check the authentication settings.
- New larger font size.
- Support for notifications when you're invited or kicked from channels.
- New connection status showing you that you're disconnected or connected.

Bug fixes
~~~~~~~~~

- Fixes various issues when connecting to certain IRC servers that don't follow
  the IRC protocol strictly. If you're having problems with the new upgrade, be
  sure to check the authentication settings.
- Fixes some issues where devices may fail to register for push notifications
  with ZNC servers.
- Fixes an issue where mentions are not highlighted while showing timestamps.


ZNC
~~~

We've also made numerous changes to the `znc-palaver plugin <https://github.com/cocodelabs/znc-palaver>`_, we highly recommend you upgrade to ZNC 1.6 and newer and the latest version of our module. This fixes many problems.

