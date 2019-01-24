const VaRItems = {
	main: {
		siteLB: {
			qInfo: {
				qType: "ButtonGroup"
			},
			elementId: "siteLB",
			allValue: "WW",
			qListObjectDef: {							
				qDef: {
					qFieldDefs: ["D Site"],
					qFieldLabels: ["Site"]
				},
				qInitialDataFetch: [{
					qTop: 0,
					qLeft: 0,
					qWidth: 1,
					qHeight: 1000
				}]								
			}
		},
		table1: {
			qInfo: {
				qType: "Table"
			},
			elementId: "VaRTable",
			qHyperCubeDef: {
				qDimensions: [
					{
						qLibraryId: "YGaJVRM",
						qDef: {
							qSortCriterias: [{
								qSortByAscii: 1
							}],
							qLabels: [""]
						},
						qNullSuppression: true
					}
				],
				qMeasures: [
					{
						qDef: {
							qDef: "=Column(2)- if(Dimensionality() = 1, $(=replace(vVar95_Cob_1d_ByTradingPortfolio,'RSK_VAR',vVar_Source&'RSK_VAR')),\n\t\t$(=replace(vVar95_Cob_1d,'RSK_VAR',vVar_Source&'RSK_VAR'))\n\t) / v_Divider",
							qLabel: "1-d Δ",
							qNumFormat: {
								qType: "F",
								qnDec: 2,
								qUseThou: 0,
								qFmt: "#,##0.0",
								qDec: ".",
								qThou: ","
							},
							group: "VaR 95"
						},
						qSortBy:{
							qSortByNumeric: -1
						},
						qAttributeExpressions: [{
							qExpression: "if(Column(1)<0, 'red')",
							id: "textColour"
						}]
					},
					{
						qDef: {
							qDef: "if(Dimensionality() = 1, \n\t\t$(=replace(vVar95_Cob_ByTradingPortfolio,'RSK_VAR',vVar_Source&'RSK_VAR')),\n\t\t$(=replace(vVar95_Cob,'RSK_VAR',vVar_Source&'RSK_VAR'))\n\t) / v_Divider\n",
							qLabel: "Total",
							qNumFormat: {
								qType: "F",
								qnDec: 2,
								qUseThou: 0,
								qFmt: "#,##0.0",
								qDec: ".",
								qThou: ","
							},
							group: "VaR 95"
						},
						qSortBy:{
							qSortByNumeric: -1
						},
						qAttributeExpressions: [{
							qExpression: "if(Column(2)<0, 'red')",
							id: "textColour"
						}, {
							qExpression: "'rgb(220,220,220)'",
							id: "cellColour"
						}]
					},
					{
						qDef: {
							qDef: "Column(4)- if(Dimensionality() = 1, \n\t\t$(=replace(vVar99_Cob_1d_ByTradingPortfolio,'RSK_VAR',vVar_Source&'RSK_VAR')),\n\t\t$(=replace(vVar99_Cob_1d,'RSK_VAR',vVar_Source&'RSK_VAR'))\n\t) / v_Divider",
							qLabel: "1-d Δ",
							qNumFormat: {
								qType: "F",
								qnDec: 2,
								qUseThou: 0,
								qFmt: "#,##0.0",
								qDec: ".",
								qThou: ","
							},
							group: "VaR 99"
						},
						qSortBy:{
							qSortByNumeric: -1
						},
						qAttributeExpressions: [{
							qExpression: "if(Column(3)<0, 'red')",
							id: "textColour"
						}]
					},
					{
						qDef: {
							qDef: "if(Dimensionality() = 1, \n\t\t$(=replace(vVar99_Cob_ByTradingPortfolio,'RSK_VAR',vVar_Source&'RSK_VAR')),\n\t\t$(=replace(vVar99_Cob,'RSK_VAR',vVar_Source&'RSK_VAR'))\n\t) / v_Divider\n",
							qLabel: "Total",
							qNumFormat: {
								qType: "F",
								qnDec: 2,
								qUseThou: 0,
								qFmt: "#,##0.0",
								qDec: ".",
								qThou: ","
							},
							group: "VaR 99"
						},
						qSortBy:{
							qSortByNumeric: -1
						},
						qAttributeExpressions: [{
							qExpression: "if(Column(4)<0, 'red')",
							id: "textColour"
						}, {
							qExpression: "'rgb(220,220,220)'",
							id: "cellColour"
						}]
					},
					{
						qDef: {
							qDef: "Column(6) - if(Dimensionality() = 1, \n\t\t$(=replace(vVar95_Contrib_Cob_1d_ByTradingPortfolio,'RSK_VAR',vVar_Source&'RSK_VAR')),\n\t\t$(=replace(vVar95_Contrib_Cob_1d,'RSK_VAR',vVar_Source&'RSK_VAR'))\n\t) / v_Divider",
							qLabel: "1-d Δ",
							qNumFormat: {
								qType: "F",
								qnDec: 2,
								qUseThou: 0,
								qFmt: "#,##0.0",
								qDec: ".",
								qThou: ","
							},
							group: "Contrib to VaR 95"
						},
						qSortBy:{
							qSortByNumeric: -1
						},
						qAttributeExpressions: [{
							qExpression: "if(Column(5)<0, 'red')",
							id: "textColour"
						}]
					},
					{
						qDef: {
							qDef: "if(Dimensionality() = 1, \n\t\t$(=replace(vVar95_Contrib_Cob_ByTradingPortfolio,'RSK_VAR',vVar_Source&'RSK_VAR')) ,\n\t\t$(=replace(vVar95_Contrib_Cob,'RSK_VAR',vVar_Source&'RSK_VAR')) \n\t) / v_Divider\n",
							qLabel: "Total",
							qNumFormat: {
								qType: "F",
								qnDec: 2,
								qUseThou: 0,
								qFmt: "#,##0.0",
								qDec: ".",
								qThou: ","
							},
							group: "Contrib to VaR 95"
						},
						qSortBy:{
							qSortByNumeric: -1
						},
						qAttributeExpressions: [{
							qExpression: "if(Column(6)<0, 'red')",
							id: "textColour"
						}]
					},
					{
						qDef: {
							qDef: "if(Dimensionality() = 1, \n\t\t$(=replace(vVar100_Cob_ByTradingPortfolio,'RSK_VAR',vVar_Source&'RSK_VAR')) ,\n\t\t$(=replace(vVar100_Cob,'RSK_VAR',vVar_Source&'RSK_VAR')) \n\t) / v_Divider\n",
							qLabel: "Total",
							qNumFormat: {
								qType: "F",
								qnDec: 2,
								qUseThou: 0,
								qFmt: "#,##0.0",
								qDec: ".",
								qThou: ","
							},
							group: "Max loss"
						},
						qSortBy:{
							qSortByNumeric: -1
						}
					},
					{
						qDef: {
							qDef: "if(Dimensionality() = 1, \n\t  max(Aggr(NODISTINCT\n\t\t(Rank(-sum({<[$(vVar_Source)RSK_VAR Simulation Cob Date]={'$(=date(max([$(vVar_Source)RSK_VAR Simulation Cob Date])))'}>}[$(vVar_Source)RSK_VAR Simulation Value]) , 4) = 1)*-1*  \n\t\t\t[$(vVar_Source)RSK_VAR Simulation Date]\n\t  , $(vVar_TradingPortfolioDim), [$(vVar_Source)RSK_VAR Simulation Date]))\n\t,\n\t  max(Aggr(NODISTINCT\n\t\t(Rank(-sum({<[$(vVar_Source)RSK_VAR Simulation Cob Date]={'$(=date(max([$(vVar_Source)RSK_VAR Simulation Cob Date])))'}>}[$(vVar_Source)RSK_VAR Simulation Value]) , 4) = 1)*-1*\n\t\t\t[$(vVar_Source)RSK_VAR Simulation Date]\n\t  , [$(vVar_Source)RSK_VAR Simulation Date]))\n)",
							qLabel: "At date",
							qNumFormat: {
								qType: "D",
								qnDec: 2,
								qUseThou: 0,
								qFmt: "DD-MMM-YY"
							},
							group: "Max loss"
						},
						qSortBy:{
							qSortByNumeric: 1
						}
					}
				]
			}
		},
		line1: {
			qInfo: {
				qType: "Line"
			},
			elementId: "VaRLine",
			qHyperCubeDef: {
				qDimensions: [
					{
						qDef: {
							qFieldDefs:["RSK_VAR Simulation Cob Date"],
							qFieldLabels: ["Cob"],
							qSortCriterias: [{
								qSortByNumeric: 1
							}]
						}
					}
				],
				qMeasures: [
					{
						qDef: {
							qDef: "fabs(Fractile(aggr(sum([RSK_VAR Simulation Value]),[RSK_VAR Simulation Date], [RSK_VAR Simulation Cob Date]), 0.05)) / v_Divider",
							qLabel: "VaR 95"
						},					
						qSortBy: {
							qSortByNumeric: 1
						}
					},
					{
						qDef: {
							qDef: "fabs(Fractile(aggr(sum([RSK_VAR Simulation Value]),[RSK_VAR Simulation Date], [RSK_VAR Simulation Cob Date]), 0.01)) / v_Divider",
							qLabel: "VaR 99"
						},
						qSortBy: {
							qSortByNumeric: 1
						}	
					}
					
				],
				qInitialDataFetch:[{
					qTop:0,
					qLeft:0,
					qWidth:3,
					qHeight:3000
				}],
				qSuppressZero: true,
				qSuppressMissing: true
			}
		}
	}
}