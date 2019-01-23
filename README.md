# krisinfo-card
A Lovelace custom card for [custom component Krisinformation](https://github.com/isabellaalstrom/sensor.krisinformation) in Home Assistant.
The red alert icon will appear only if the message is an alert.

<img src="https://github.com/isabellaalstrom/krisinfo-card/blob/master/krisinfo.png" alt="Krisinformation Lovelace Card" />

## Installation

1. Copy `krisinfo-card.js` to `<config directory>/www/krisinfo-card.js`
2. Add `krisinfo-card` as a resource in `ui-lovelace.yaml` or in raw config editor if you don't use yaml mode.

```yaml
resources:
  - url: /local/krisinfo-card.js
    type: js
```


## Example configuration

```yaml
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



Thanks to [@arsaboo](https://github.com/arsaboo) for inspiration to this card from [Animated weather card](https://community.home-assistant.io/t/custom-animated-weather-card-for-lovelace/58338).


Like my work and want to say thanks? Do it here:

<a href="https://www.buymeacoffee.com/iq1f96D" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
