# krisinfo-card
A Lovelace custom card for [custom component Krisinformation](https://github.com/isabellaalstrom/sensor.krisinformation) in Home Assistant.
The red alert icon will appear only if the message is an alert.

<img src="https://github.com/isabellaalstrom/krisinfo-card/blob/master/krisinfo.png" alt="Krisinformation Lovelace Card" />

## Installation

For installation instructions [see this guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins).


## Example configuration

```yaml
title: My awesome Lovelace!
resources:
  - url: /local/krisinfo-card.js
    type: module
views:
  title: My view
  cards:
    - type: custom:krisinfo-card
      entity: sensor.krisinformation
```

## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:krisinfo-card`
| entity | string | **Required** | The entity id of your Krisinformation sensor
| only_alerts | boolean | **Optional** | Set to true if you only want the card to be shown when there is an alert and then only show alerts (default false)


Like my work and want to say thanks? Do it here:

<a href="https://www.buymeacoffee.com/iq1f96D" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>


## [Changelog](https://github.com/isabellaalstrom/krisinfo-card/blob/master/CHANGELOG.md)
