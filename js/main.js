(function(){
	function __Widget() {
		
		this.init = init;
		this.getData = getData;
		var widget = JFCustomWidget;
		var defaultSettings = {

		}

		/**
 		* initiating widget
 		* @param {object} params 
 		* @param {object} formData
 		* @return undefined
 		*/
		function init(params, formData) {
			var settings = $.extend(params, defaultSettings);

			if (formData && formData.value) {
				setData(formData.value);
				sendData();
			}

			addListeners();

		}

		/**
 		* getWidgetData for sendSubmit or sendData;
 		* @return object{valid: valid, value: value}
 		*/
		function getData() {
			var data = {};
			return data;
		}

		/**
 		* getWidgetData for calculation widget or other
 		* @return object{valid: valid, value: value}
 		*/
		function getDataForCalculation() {
			var data = {};
			return data; 
		}

		/**
 		* sendData for calculation or for form validation
 		* @return undefined
 		*/
		function sendData() {
			widget.sendData(getData());
		}

		/**
 		* set widget data when editing submissions
 		* @param {generic} value 
 		* @return undefined
 		*/
		function setData(value) {
			if (value) {

			}
		}

		/**
 		* resize widget
 		* @param {int} height iFrame
 		* @param {int} width iFrame  
 		* @return undefined
 		*/
		function widgetResize(height, width) {
			widget.requestWidgetResize({
				height: height,
				width: width
			});
		}

		/**
 		* adding dom listeners and logic when something happends
 		* @return undefined
 		*/
		function addListeners() {
			$("#test").on("click", function() {

			});

			$("#test2").on("change", function() {

			});
		}

	}

	window.Widget = __Widget;
});


$(doocument).ready() {
	JFCustomWidget.subscribe("ready", function(formData) {
		var params = JFCustomWidget.getWidgetSettings();
		var widget = new Widget();
		widget.init(params, formData);
		JFCustomWidget.subscribe("submit", function() {
			JFCustomWidget.sendSubmit(widget.getData());
		})
	})
}