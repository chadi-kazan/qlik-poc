var __app = 'a5bd7be8-539e-4940-9d4f-600b5f895cc7';
var VaRConfig = {
  url: "wss://gvaqsf1.geneva.vitol.com/app/"+__app,
  schema: qlikEngineSchema
}

var VaRSession = enigma.create(VaRConfig)
var appList = {};
/*VaRSession.open().then(qlik=>{
  qlik.openDoc(__app).then(app=>{
	 console.log("Connected to VaR App")
	 appList["VaRApp"] = app
  })
})*/

function initializeItems(defs, app){
	for(var key in defs){
		switch(defs[key].qInfo.qType){
			case "Table":
				var t = new websyTable(appList[app], defs[key], defs[key].elementId, {fontSize: 12, fontFamily: "Calibri"})
				break;
			case "Line":
				initializeEChartsLineChart(appList[app], defs[key], defs[key].elementId)
				break;
			case "ButtonGroup":
				initializeButtonGroup(appList[app], defs[key], defs[key].elementId)
				break;
		}
	}
}

function updateItems(itemId){
	
}

function initializeEChartsLineChart(app, def, elementId){
	app.createSessionObject(def).then(function(model){
		if(!objList[elementId]){
			objList[elementId] = {
				model: model,
				chart: echarts.init(document.getElementById(elementId)),
				refreshing: false
			}
		}
		var chart = objList[elementId];
		var updating = false;
		objList[elementId].chart.on("datazoom", function(selection){
			var elemNums = []
			if(selection.batch){
				var rangeStart = selection.batch[0].startValue
				var rangeEnd = selection.batch[0].endValue
				console.log(rangeStart, rangeEnd)
				var data = chart.chart._model.option.series[0].data
				for(var i=rangeStart;i<=rangeEnd;i++){
					elemNums.push(data[i].eNum)
				}
				if(!chart.refreshing){
					chart.refreshing = true
					console.log(elemNums)
					chart.chart.data
					model.selectHyperCubeValues("/qHyperCubeDef", 0, elemNums, true)
				}
			}
			
			
		})
		model.addListener("changed", renderEChartsLineChart.bind(this, elementId, model))
		renderEChartsLineChart(elementId, model)
	})
}

function initializeButtonGroup(app, def, elementId){
	app.createSessionObject(def).then(function(model){
		if(!objList[elementId]){
			objList[elementId] = {
				model: model
			}
		}
		model.addListener("changed", renderButtonGroup.bind(this, elementId, model))
		renderButtonGroup(elementId, model)
	})
}

function renderButtonGroup(elementId, model){
	var el = document.getElementById(elementId)
	if(el){
		var viz = objList[elementId]
		viz.model.getLayout().then(function(layout){
			viz.refreshing = false
			var html = "<div class='vitol-filter-group-title'>"+layout.qListObject.qDimensionInfo.qFallbackTitle+"</div>"
			html += "<ul>"
			var field = layout.qListObject.qDimensionInfo.qGroupFieldDefs[layout.qListObject.qDimensionInfo.qGroupPos]
			var matrix = layout.qListObject.qDataPages[0].qMatrix
			if(layout.allValue){
				html += "<li class='vitol-filter-button "+(layout.qListObject.qDimensionInfo.qStateCounts.qSelected==0?'active':'')+"' data-elemno='-1' data-elemId='"+elementId+"'>"
				html += layout.allValue
				html += "</li>"
			}
			for(var i=0;i<matrix.length;i++){
				html += "<li class='vitol-filter-button "+(matrix[i][0].qState=='S'?'active':'')+"' data-elemno='"+matrix[i][0].qElemNumber+"' data-elemId='"+elementId+"'>"
				html += matrix[i][0].qText
				html += "</li>"
			}
			html += "</ul>"
			el.innerHTML = html
		})
	}	
}

function renderEChartsLineChart(elementId, model){
	var viz = objList[elementId]
	viz.model.getLayout().then(function(layout){
		var matrix = layout.qHyperCube.qDataPages[0].qMatrix;
		var xData = [];
		var yData = [];
		var legendData = [];
		for (var t = 0; t < layout.qHyperCube.qMeasureInfo.length; t++){
		  yData.push({
			  data: [], //The raw num will be used for the bar size
			  name: layout.qHyperCube.qMeasureInfo[t].qFallbackTitle,
			  type: 'line'
			});
		  legendData.push({
			name: layout.qHyperCube.qMeasureInfo[t].qFallbackTitle
		  });
			for (var i = 0; i < matrix.length; i++) {
				if(t==0){
				  xData.push({
					value: matrix[i][0].qText
				  });
				}
			  yData[t].data.push({
				value: matrix[i][layout.qHyperCube.qDimensionInfo.length+t].qNum,
				eNum: matrix[i][0].qElemNumber
			  })
			}
		}
		console.log(xData)
		console.log(yData)
		var options = {
		  backgroundColor: "#FFFFFF",
		  tooltip: {
			trigger: 'axis'
		  },
		  legend: {
			data: legendData,
			show: true,
			left: '3%',
			top: '3%',
			orient: "horizontal"
		  },
		  grid: {
			left: '3%',
			right: '4%',
			containLabel: true
		  },
		  xAxis: {
			type: 'category',
			boundaryGap: false,
			data: xData,
			axisLabel: {
			  rotate:  "90"
			}
		  },
		  toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                brush: {
                    type: ['lineX', 'clear']
                }
            }
          },
		  yAxis: {
			type: 'value'
		  },
		   dataZoom: {
			// xAxisIndex: 0
			start: 0,
			end: 100
		   },
		  // brush: {
			// xAxisIndex: 0  
		  // },
		  series: yData
		};
		viz.chart.setOption(options);
	  });
}