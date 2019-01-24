const config = {
  url: "wss://10.211.55.4/anon/app/37165662-2122-46dd-aed8-63020f8f036c",
  schema: qlikEngineSchema
}

const session = enigma.create(config)
session.open().then(qlik=>{
  qlik.openDoc("37165662-2122-46dd-aed8-63020f8f036c").then(app=>{
    let hDef = {
      qInfo:{
        qType: "websy-table"
      },
      qHyperCubeDef: {
        qDimensions: [{
          qDef: {
            qFieldDefs: ["Case Owner"],
            qSortCriterias: [{
              qSortByAscii: 1
            }]
          }
        }],
        qMeasures: [
          {
            qDef: {
              qDef: "Count( {$<Status -={'Closed'} >} Distinct %CaseId )",
              qLabel: "Open Cases"
            },
            qAttributeExpressions: [
              {
                qExpression: `if(
                  Count( {$<Status -={'Closed'} >} Distinct %CaseId ) > 20, '#e04d4d',
                    if(Count( {$<Status -={'Closed'} >} Distinct %CaseId ) < 5, '#75c363')
                )`
              }
            ]
          },
          {
            qDef: {
              qDef: "Count( {$<[Case Is Closed] ={'True'} >} %CaseId )",
              qLabel: "Closed Cases"
            }
          },
          {
            qDef: {
              qDef: "Count(Distinct [%CaseId])",
              qLabel: "Total Cases"
            }
          }
        ],
        qInitialDataFetch: [{
          qTop: 0,
          qLeft: 0,
          qWidth: 2,
          qHeight: 100
        }]
      }
    }
    var t = new websyTable(app, hDef, "table1", {})


    let cDef1 = {
      qInfo: {
        qType: "ebar"
      },
      qHyperCubeDef: {
        qDimensions: [
          {
            qDef: {
              qFieldDefs: ["Case Owner Group"]
            },
            qNullSuppression: true,
          }
        ],
        qMeasures: [
          {
            qDef: {
              qDef: "Avg([Case Duration Time])",
              qLabel: "Avg Case Duration"
            }
          }
        ],
        qInitialDataFetch: [{
          qTop: 0,
          qLeft: 0,
          qWidth: 2,
          qHeight: 5000
        }]
      }
    }

    app.createSessionObject(cDef1).then(model=>{
      model.addListener('changed', renderEBar.bind(this, "chart1", model))
      renderEBar("chart1", model)
    })

    function renderEBar(elementId, model){
      if(!objList[elementId]){
       objList[elementId] = echarts.init(document.getElementById(elementId))
      }
      model.getLayout().then(layout=>{
        let xData = []
        let yData = []
        if(layout.qHyperCube.qDataPages[0]){
          let matrix = layout.qHyperCube.qDataPages[0].qMatrix
          for (var i = 0; i < matrix.length; i++) {
            xData.push({
              value: matrix[i][0].qText
            })
            yData.push({
              value: matrix[i][1].qNum, //The raw num will be used for the bar size
              itemStyle: {  //This sets up the default colours for the bars
                normal: {
                  color: "#f7911e"
                }
              }
            })
          }
        }
        let options = {
          backgroundColor: "white",
          xAxis: {
            data: xData,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              rotate: 45,
              interval: 0
            }
          },
          yAxis: {
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          series: [{
            type: 'bar',
            data: yData,
          }],
          grid: {
            show: false
          }
        }
        objList[elementId].setOption(options)
      })
    }


    function initializeKPIs(itemId){
      let kDef1 = {
        qInfo:{
          qType: "kpi"
        },
        kpi1: {
          label: "High Priority Cases",
          value: {
            qValueExpression: "Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )"
          },
          elementId: "varScreen"
        },
        kpi2: {
          label: "Medium Priority Cases",
          value: {
            qValueExpression: "Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId )"
          }
        },
        kpi3: {
          label: "Low Priority Cases",
          value: {
            qValueExpression: "Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId )"
          }
        }
      }

      app.createSessionObject(kDef1).then(model=>{
        model.addListener('changed', renderKPIs.bind(this, model))
        dashboardItems[itemId].models.push(model);
        renderKPIs(model)
      })
    }

    function renderKPIs(model){
      model.getLayout().then(layout=>{
        var html = '';
        let kpi1El = document.getElementById('kpi1')
        kpi1El.innerHTML = `<div class='vitol-kpi text-center vitol-navigator' data-element='varScreen'><div class='vitol-kpi-label'>${layout.kpi1.label}</div><div class='vitol-kpi-value'>${layout.kpi1.value}</div></div>`
        let kpi2El = document.getElementById('kpi2')
        kpi2El.innerHTML = `<div class='vitol-kpi text-center'><div class='vitol-kpi-label'>${layout.kpi2.label}</div><div class='vitol-kpi-value'>${layout.kpi2.value}</div></div>`
        let kpi3El = document.getElementById('kpi3')
        kpi3El.innerHTML = `<div class='vitol-kpi text-center'><div class='vitol-kpi-label'>${layout.kpi3.label}</div><div class='vitol-kpi-value'>${layout.kpi3.value}</div></div>`
      })
    }


    dashboardItems.dashboardOverview = {
      initialized: false,
      setup: initializeKPIs.bind(this, "dashboardOverview"),
      update: renderKPIs,
      active: false,
      models: []
    }
    dashboardItems.varScreen = {
      initialized: false,
      setup: function(){},
      update: renderKPIs,
      active: false,
      models: []
    }
  })
})