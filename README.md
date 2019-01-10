# krisinfo-card
A Lovelace custom card for [custom component Krisinformation](https://github.com/isabellaalstrom/sensor.krisinformation) in Home Assistant.
The red alert icon will appear only if the message is an alert.

<img src="https://github.com/isabellaalstrom/krisinfo-card/blob/master/krisinfo.png" alt="Krisinformation Lovelace Card" />

**Use in ui-lovelace.yaml:**
```yaml
  - type: custom:krisinfo-card
    entity: sensor.krisinformation
```

## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:krisinfo-card`
| entity | string | **Required** | The entity id of your Krisinformation sensor



Thanks to @arsaboo for inspiration to this card from [Animated weather card](https://community.home-assistant.io/t/custom-animated-weather-card-for-lovelace/58338).
