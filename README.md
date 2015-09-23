Meteor AutoForm Masks
=====================
Use masks in your AutoForm fields easily with SimpleSchema using jQuery Mask Plugin
This package uses (jQuery Mask Plugin)[https://github.com/igorescobar/jQuery-Mask-Plugin] by Igor Escobar

## Depends

```bash
> meteor add aldeed:autoform
```

## Installation

```bash
> meteor add gbit:autoform-mask
```

See the mask syntax (here)[http://igorescobar.github.io/jQuery-Mask-Plugin/]

## In Your SimpleSchema

The mask property can be String or Object

```js

var Example = new SimpleSchema({
	zipCode: {
		type: String,
		autoform:{
			mask: '00000-000'
		}
	},
	percent: {
		type: String,
		autoform: {
			mask: '##0,00%'
		}
	},
	date: {
		type: String,
		autoform: {
			mask: {
				syntax: '00/00/0000',
				options: {
					placeholder: "__/__/____"
				}
			}
		}
	}
});

```