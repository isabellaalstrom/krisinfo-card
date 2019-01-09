# krisinfo-card
A Lovelace custom card for custom component Krisinformation in Home Assistant
https://github.com/isabellaalstrom/sensor.krisinformation

<img src="https://github.com/isabellaalstrom/krisinfo-card/blob/master/krisinfo.png" alt="Krisinformation Lovelace Card" />

**Usage:**
```yaml
  - type: custom:krisinfo-card
    entity: sensor.krisinformation
```

## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:krisinfo-card`
| entity | string | **Required** | The entity id of your Krisinformation sensor
