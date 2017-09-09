# example-datepicker-vue-material

> Option Example for use datepicker vue-material
## Requirements

- [vue-datepicker](https://github.com/hilongjw/vue-datepicker)
- [vue-material](https://github.com/vuematerial/vue-material)

## Example

Create the folder ```util``` on the ```src``` folder and next create a file in this case I call ```datePicker.js```.

Inside this file I add the next code.

``` bash
var optionDatePicker= {
	type: 'day',
	week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
	month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	format: 'YYYY-MM-DD',
	placeholder: '',
	inputStyle: {
		'display': 'inline-block',
		'padding': '6px',
		'font-size': '16px',
		'border': 'none',
		'border-radius': '2px',
		'color': '#5F5F5F',
		'width': '100%',
		'height': '32px',
		'-ms-flex': '1',
		'flex': '1',
		'background': 'none',
		'transition': 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
		'transition-property': 'font-size',
		'font-family': 'inherit',
		'line-height': '32px',
		'-webkit-appearance': 'textfield'
	},
	buttons: {
		ok: 'Ok',
		cancel: 'Cancel'
	},
	overlayOpacity: 0.5, // 0.5 as default
	dismissible: true // as true as default
}

export default optionDatePicker;
```

This is similar than the code find on the vue-datepicker repository, but in my case the ```placeholder``` is empty and the ```inputStyle``` is different.

Next step is go to the component file you going to implement datepicker, in my case is ```App.vue```, here in the ```script``` tag add the next lines.

``` bash
  import Datepicker from 'vue-datepicker';
	import optionDatePicker from './util/datePicker.js';
	export default {
		name: 'app',
		components: { datepicker: Datepicker },
		
		data(){
			return{
				date: {
					time: '',
				},
				option: optionDatePicker
			}
		},
		created(){
			this.option.placeholder = "Date";
		}
	}
```
I import the file get the datePicker configuration and ```vue-material```, next I create a variable call ```option``` that have the valuo of datePicker configuration, in the ```created``` cycle I set a value for the datePicker placeholder.

Next step is put the datepicker on the template.
``` bash
<div class="md-input-container md-theme-default md-has-value ">
  <label v-if="date.time != ''">Date</label>
  <datepicker
    :option="option"
    :date="date">
  </datepicker>
</div>
```

I create a ```div``` with the next classes ```md-input-container md-theme-default md-has-value```, this classes are create and use on vue-material. Next create a ```label``` that have a ```v-if``` validation, this is used when the datePicker have a value automatically show a label with the style of vue-material inside the datePicker field.
