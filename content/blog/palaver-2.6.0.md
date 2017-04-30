Title: Palaver 2.6
Category: apps
Tags: iOS, Palaver
Author: kyle
Date: 2017-04-28

## Changes in 2.6

### Enhancements

* You can now quickly add popular IRC networks in the Add Network screen.
* Message previews found in notifications can now be disabled in the application settings.
* You can now copy, share and export multiple messages by holding a message and tapping "More" inside a query.
* Revamped how notifications are displayed and notifications are now shown in-app so you can quickly see and response to messages in other queries.
* Channel topic can be found in the channel details screen.
* When a message fails to send, you can tap to try and resend the message.

#### IRCv3

We're committed to IRCv3 and pushing IRC forward. We've added support for some new IRCv3 capabilities:

* CAP v3.1, CAP v3.2 and `cap-notify`
* `echo/message` (providing `labeled-response` is available)
* `batch`
* `chghost`
* `invite-notify` - You can now see when other nicks are invited into a channel.
* `MONITOR` - Allows us to efficiently keep track of which nicks are offline and online in the query list.
* `draft/sts` - Palaver will respect any strict transport security policies an IRC server advertises.
* `draft/labeled-response`

#### New Commands

* `/cycle` - Cycle allows you to part and rejoin a channel.
* `/raw` - The raw command allows you to send raw unmodified IRC messages to the IRC server.
* `/debug` - Opens a new debug query showing all of the raw IRC messages.

### Bug fixes

- Fixed some problems with auto-connect when Palaver is resumed from the background.
- Nickname completions will now update the nickname to complete the same case nickname.
- During dark mode while scrolling up in a query, we will now theme the scroll down button.
- `/join` command will now jump to the joined channel.
- We now show when a nickname you are trying to use is erroneous on the given IRC server inside the networks console.
- Various improvements with the night time theme in Palaver, message selection and URLs are now more prominent.
- When the font size is changed, we now update existing messages to use the new font size settings.
- Nickname completion with third-party keyboards improved.
