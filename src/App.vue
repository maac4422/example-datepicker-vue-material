<template>
	<div id="app">
		<md-layout md-align="center">
			<md-layout  md-tag="md-card" md-column
					md-flex-xlarge="60" 
					md-flex-large="70" 
					md-flex-medium="70"
					md-flex-small="60" 
					md-flex-xsmall="90" >
				<md-card-content>
					<div class="md-input-container md-theme-default md-has-value ">
						<label v-if="date.time != ''">Date</label>
						<datepicker
							:option="option"
							:date="date">
						</datepicker>
					</div>
				</md-card-content>	
			</md-layout>
		</md-layout>
	</div>
</template>

<script>
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
</script>
	