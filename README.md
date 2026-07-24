# Printer toner level feature for Home Assistant Tile card

[![GitHub Release](https://img.shields.io/github/release/hondzik/printer-toner-level-feature.svg?style=for-the-badge)](https://github.com/hondzik/printer-toner-level-feature/releases)
[![License](https://img.shields.io/github/license/hondzik/printer-toner-level-feature.svg?style=for-the-badge)](LICENSE)
[![Project Maintenance](https://img.shields.io/badge/maintainer-hondzik-blue.svg?style=for-the-badge)](https://github.com/hondzik)
![Github](https://img.shields.io/github/followers/hondzik.svg?style=for-the-badge)
[![GitHub Activity](https://img.shields.io/github/last-commit/hondzik/printer-toner-level-feature?style=for-the-badge)](https://github.com/hondzik/printer-toner-level-feature/commits/main)

[![My Home Assistant](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?repository=printer-toner-level-feature&owner=hondzik&category=Plugin)

This is a Home Assistant Lovelace **Tile card feature** that renders a printer's toner/ink cartridge levels as small bar gauges underneath a Tile card, the same way built-in features like "Cover open/close" or "Light brightness" attach to a Tile card.

![Color](docs/images/color.png)
![Black & White](docs/images/black-and-white.png)

It automatically detects whether the printer is black-and-white or color (based on whether cartridge levels for cyan/magenta/yellow are present) and renders 1 bar (black only) or 4 bars (cyan, magenta, yellow, black) accordingly.

## How it works

The feature doesn't talk to your printer or any integration directly. It only reads a fixed set of **attributes** off whichever entity your Tile card points at:

| Attribute      | Required | Type   | Description                                             |
| -------------- | -------- | ------ | --------------------------------------------------------- |
| `domain`       | yes      | string | Must be exactly `"printer"` — this is how the feature recognizes a compatible entity (see note below). |
| `black_level`  | yes      | number | Black toner/ink level, 0-100.                              |
| `cyan_level`   | no       | number | Cyan level, 0-100. Presence of this attribute is what makes the feature treat the printer as color and switch to the 4-bar layout. |
| `magenta_level`| no       | number | Magenta level, 0-100.                                      |
| `yellow_level` | no       | number | Yellow level, 0-100.                                        |
| `ip`           | no       | string | Not used by the feature itself, but handy to show in the Tile card's own `state_content` (see example below). |

> **Note on `domain: "printer"`:** this is a plain custom attribute you set yourself — it has nothing to do with the Home Assistant entity domain (the `sensor.` prefix in an entity ID). You could use this feature on a `sensor.*`, `binary_sensor.*` or any other entity type, as long as it carries this attribute. It exists purely so the feature can offer itself in the Lovelace feature picker only for entities that actually look like a supported printer, instead of showing up for every entity in your system.

Because the feature only cares about attributes, it is **integration-agnostic**: it doesn't matter whether your printer is exposed through the IPP integration, SNMP, a cloud API, or anything else — as long as you can get the toner levels into some entity's attributes, the feature will render them. In practice, the most common way to do that is a small YAML template sensor that pulls the values from whatever entities your printer integration already created.

## Setup

### 1. Install

Install through [HACS](https://hacs.xyz/) using the badge above, or add this repository manually as a custom HACS repository (category: plugin) if it isn't listed in the default store yet.

### 2. Create a template sensor with the toner levels

Before using the feature, define a template sensor that stores each toner level as an attribute. The example below is based on the built-in [IPP integration](https://www.home-assistant.io/integrations/ipp/), which creates one entity for the printer's overall status and a separate entity per marker/cartridge — this template sensor bundles them all together into the attribute shape the feature expects:

```yaml
- sensor:
    - name: "HP Color LasetJet Pro MFP M283fdw"
      state: "{{ states('sensor.hp_colorlaserjet_mfp_m282_m285_2') }}"
      icon: mdi:printer
      attributes:
        domain: "printer"
        ip: "{{ state_attr('sensor.hp_colorlaserjet_mfp_m282_m285_2', 'uri_supported').split('/')[2] }}"
        cyan_level: "{{ states('sensor.hp_colorlaserjet_mfp_m282_m285_cyan_cartridge_hp_w2211a_2') }}"
        magenta_level: "{{ states('sensor.hp_colorlaserjet_mfp_m282_m285_magenta_cartridge_hp_w2213a_2') }}"
        yellow_level: "{{ states('sensor.hp_colorlaserjet_mfp_m282_m285_yellow_cartridge_hp_w2212a_2') }}"
        black_level: "{{ states('sensor.hp_colorlaserjet_mfp_m282_m285_black_cartridge_hp_w2210a_2') }}"
```

The way you fill in the individual attributes will vary depending on the integration/entities your specific printer exposes. Only `domain` and `black_level` are required — omit `cyan_level`/`magenta_level`/`yellow_level` entirely for a black-and-white printer, and the feature will render just the single black bar.

After adding this to your template sensor configuration, reload templates (Developer tools → YAML → Template entities) or restart Home Assistant, and confirm the new sensor shows the expected attributes on its "Attributes" tab before moving on.

### 3. Add a Tile card and the feature

Create a Tile card, pick the template sensor you just created as its entity, and add the feature. In the feature picker you should see **Printer toner level** listed (it only appears for entities carrying the `domain: "printer"` attribute).

Because the feature renders a fixed-height block of bars *underneath* the card's own header, the Tile card's height needs to be set explicitly via `grid_options.rows`, otherwise the bars get clipped or leave dead space:

- **Black-and-white printer** (1 bar): `grid_options.rows: 2`
- **Color printer** (4 bars): `grid_options.rows: 3`

Full example for a color printer:

```yaml
type: tile
entity: sensor.hp_color_lasetjet_pro_mfp_m283fdw
features_position: bottom
vertical: false
state_content:
  - state
  - ip
features:
  - type: custom:printer-toner-level-feature
grid_options:
  columns: 6
  rows: 3
```

`state_content: [state, ip]` is what shows the "idle · 192.168.1.122" line under the card title — this reads the template sensor's own `state` and the `ip` attribute defined in step 2, and is entirely optional/independent of the feature.

## Configuration options

The feature itself has two options, both toggleable either through YAML or the visual editor (pencil icon on the feature, see [below](#using-the-visual-editor)):

| Option           | Type    | Default | Description                                                                 |
| ----------------- | ------- | ------- | ---------------------------------------------------------------------------- |
| `show_percent`     | boolean | `true`  | Show the numeric percentage next to each bar.                                |
| `black_as_white`   | boolean | `true`  | Render the black toner bar in white instead of black — useful for it to stay visible on a dark bar background rather than blending into it. |

```yaml
features:
  - type: custom:printer-toner-level-feature
    show_percent: false
    black_as_white: false
```

## Using the visual editor

Instead of editing YAML, you can use the "Edit feature" (pencil) icon next to the feature in the card's feature list:

![Edit feature icon](docs/images/edit-feature-icon.png)

Clicking it opens the Tile card configuration dialog with the two toggles described above:

![Edit feature dialog](docs/images/edit-feature-dialog.png)

## Troubleshooting

- **"Printer toner level" doesn't show up in the feature picker** — double check the entity has an attribute literally named `domain` with the literal string value `printer`, and a numeric `black_level` attribute. Both are required for the feature to offer itself; check the entity's "Attributes" tab in Developer tools to confirm the template rendered correctly (a template error will leave the attribute missing entirely, not just empty).
- **Bars look cut off or there's empty space below them** — set `grid_options.rows` to 2 (black-and-white) or 3 (color) as described above; the feature does not auto-size the card.
- **Only a black bar shows even though the printer is color** — `cyan_level` must actually be present as an attribute (not `null`/omitted) for the feature to switch into color mode; check the template output.
