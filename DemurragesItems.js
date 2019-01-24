var DemurrageItems = {
	main: {
		siteLB: {
			qInfo: {
				qType: "ButtonGroup"
			},
			elementId: "siteLB_Demurrages",
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
		byPortfolio: {
			qInfo: {
				qType: "Table"
			},
			elementId: "demurrageTable1",
			"qHyperCubeDef": {
				"qDimensions": [{
					"qDef": {
						"qGrouping": "N",
						"qFieldDefs": ["=$(vDemurrages_PortfolioField)"],
						"qFieldLabels": [""],
						"qSortCriterias": [{
							"qSortByLoadOrder": 1,
							"qExpression": {}
						}],
						"qNumberPresentations": [],
						"qActiveField": 0,
						"qLabelExpression": "= ' '",
						"autoSort": true,
						"cId": "YgCZvW",
						"othersLabel": "Others",
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"representation": {
							"type": "text",
							"urlLabel": ""
						}
					},
					"qOtherTotalSpec": {
						"qOtherMode": "OTHER_OFF",
						"qOtherCounted": {
							"qv": "10"
						},
						"qOtherLimit": {
							"qv": "0"
						},
						"qOtherLimitMode": "OTHER_GE_LIMIT",
						"qForceBadValueKeeping": true,
						"qApplyEvenWhenPossiblyWrongResult": true,
						"qOtherSortMode": "OTHER_SORT_DESCENDING",
						"qTotalMode": "TOTAL_OFF",
						"qReferencedExpression": {}
					},
					"qOtherLabel": {
						"qv": "Others"
					},
					"qTotalLabel": {},
					"qCalcCond": {},
					"qAttributeExpressions": [],
					"qAttributeDimensions": [],
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}],
				"qMeasures": [{
					"qDef": {
						"qTags": [],
						"qGrouping": "N",
						"qDef": "sum({<$(vDemurrages_saOutStdBaseR)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0.0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"qLabelExpression": "='Budgeted'",
						"autoSort": true,
						"cId": "LuhvbMU",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "right",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": true,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": false,
						"borderColor": "#F2F2F2",
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"color": "#F2F2F2",
							"index": -1
						},
						"isCustomFormatted": false
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}, {
					"qDef": {
						"qLabel": "Net\ninvoiced",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0.0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"autoSort": true,
						"cId": "HjmTe",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "right",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": false,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": false,
						"borderColor": "#F2F2F2",
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"color": "#F2F2F2",
							"index": -1
						},
						"isCustomFormatted": false
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}, {
					"qDef": {
						"qLabel": "Provision",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "sum({<$(vDemurrages_saOutStdBaseR)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0.0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"autoSort": true,
						"cId": "BFMQmzT",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "right",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "=vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": false,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": false,
						"borderColor": "#F2F2F2",
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"color": "#F2F2F2",
							"index": -1
						},
						"isCustomFormatted": false
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [{
						"qExpression": "=if(Column(3)<0, 'red')",
						"id": "textColour"
					}],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}, {
					"qDef": {
						"qLabel": "Claim\nBE aft. prov.",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "\"Budgeted\"+\"Net invoiced\"+\"Provision\"",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0.0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"autoSort": true,
						"cId": "ppjLVzD",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "right",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": false,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": false,
						"borderColor": "#F2F2F2",
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"color": "#F2F2F2",
							"index": -1
						},
						"isCustomFormatted": false
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [{
						"qExpression": "'rgb(243,243,246)'",
						"id": "cellColour"
					}],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}, {
					"qDef": {
						"qLabel": "Age\n(mths)",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Weighted Age Months])/\"Net invoiced\"/vDividerAmount",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"autoSort": true,
						"cId": "JaLjSvK",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "right",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": false,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": true,
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"index": -1,
							"color": "#F2F2F2"
						},
						"isCustomFormatted": false,
						"borderColor": "#F2F2F2"
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [{
						"qExpression": "='#595959'"
					}, {
						"qExpression": "='#none'"
					}, {}, {
						"qExpression": "='#657dbb'"
					}, {
						"qExpression": "='#ec5656'"
					}, {
						"qExpression": "0"
					}, {
						"qExpression": "0"
					}, {
						"qExpression": "0"
					}, {
						"qExpression": "0"
					}, {}, {
						"qExpression": "='#657dbc'"
					}],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}, {
					"qDef": {
						"qLabel": "Budgeted",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "sum({<$(vDemurrages_saOutStdBaseP)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount*-1",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0.0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"autoSort": true,
						"cId": "vUnPjS",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "center",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "=vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": false,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": false,
						"borderColor": "#F2F2F2",
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"color": "#F2F2F2",
							"index": -1
						},
						"isCustomFormatted": false
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [{
						"qExpression": "='#595959'"
					}, {
						"qExpression": "='#none'"
					}, {}, {
						"qExpression": "='#657dbb'"
					}, {
						"qExpression": "='#ec5656'"
					}, {
						"qExpression": "0"
					}, {
						"qExpression": "0"
					}, {
						"qExpression": "0"
					}, {
						"qExpression": "0"
					}, {}, {
						"qExpression": "='#657dbc'"
					}],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}, {
					"qDef": {
						"qLabel": "Net\ninvoiced",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount*-1",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0.0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"autoSort": true,
						"cId": "YXjJWgh",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "right",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "=vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": false,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": false,
						"borderColor": "#F2F2F2",
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"color": "#F2F2F2",
							"index": -1
						},
						"isCustomFormatted": false
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [{
						"qExpression": "='#595959'"
					}, {
						"qExpression": "='#none'"
					}, {}, {
						"qExpression": "='#657dbb'"
					}, {
						"qExpression": "='#ec5656'"
					}, {
						"qExpression": "0"
					}, {
						"qExpression": "0"
					}, {
						"qExpression": "0"
					}, {
						"qExpression": "0"
					}, {}, {
						"qExpression": "='#657dbc'"
					}],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}, {
					"qDef": {
						"qLabel": "Provision",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "sum({<$(vDemurrages_saOutStdBaseP)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount*-1",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0.0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"autoSort": true,
						"cId": "LfCnyk",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "right",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "=vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": false,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": false,
						"borderColor": "#F2F2F2",
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"color": "#F2F2F2",
							"index": -1
						},
						"isCustomFormatted": false
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [{
						"qExpression": "=if(Column(8)<0, 'red')",
						"id": "textColour"
					}],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}, {
					"qDef": {
						"qLabel": "Claim BE\naft. prov.",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "Column(6)+Column(7)+Column(8)\n//\"Budgeted \"+\"Net invoiced \"+\"Provision \"",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0.0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"autoSort": true,
						"cId": "FACydJ",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "right",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": false,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": false,
						"borderColor": "#F2F2F2",
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"color": "#F2F2F2",
							"index": -1
						},
						"isCustomFormatted": false
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [{
						"qExpression": "'rgb(243,243,246)'",
						"id": "cellColour"
					}],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}, {
					"qDef": {
						"qLabel": "Age\n(mths)",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Weighted Age Months])/Column(7)*-1/vDividerAmount",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"autoSort": true,
						"cId": "cRF",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "right",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": false,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": true,
						"borderColor": "#F2F2F2",
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"color": "#F2F2F2",
							"index": -1
						},
						"isCustomFormatted": false
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}, {
					"qDef": {
						"qLabel": "Net\ninvoiced",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "=Column(2)-Column(7)\n//\"Net invoiced\"-\"Net invoiced \"",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "#,##0.0",
							"qDec": ".",
							"qThou": ","
						},
						"qAggrFunc": "Expr",
						"qAccumulate": 0,
						"qActiveExpression": 0,
						"qExpressions": [],
						"autoSort": true,
						"cId": "NMMgG",
						"numFormatFromTemplate": true,
						"textAlign": {
							"auto": true,
							"align": "left"
						},
						"showMeasure": false,
						"qShowHide": "",
						"labelExpression": {
							"qStringExpression": {
								"qExpr": "='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Net</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"
							}
						},
						"showIcons": false,
						"icon": "",
						"iconColor": "#000000",
						"iconPosition": 0,
						"titleTextAlignment": "right",
						"adjustColumnWidth": true,
						"columnWidth": {
							"qValueExpression": {
								"qExpr": "vTableMeasureWidth"
							}
						},
						"columnWidthSlider": 200,
						"fontStyle": "",
						"dropshadow": false,
						"textAlignment": "right",
						"useCellCustomCSS": false,
						"cellRepresentation": "text",
						"useHTML": false,
						"useURL": false,
						"useIndicators": false,
						"iconPositive": "fa-arrow-up",
						"iconPositiveColor": "#657dbb",
						"iconNegative": "fa-arrow-down",
						"iconNegativeColor": "#F93F17",
						"iconZero": "fa-arrow-left",
						"iconZeroColor": "#898989",
						"indicatorShowValue": true,
						"indicatorvalue": 0,
						"progressMaxIsDynamic": true,
						"progressMinFixedValue": -100,
						"progressMaxFixedValue": 100,
						"supportNegativeBars": true,
						"progressBarUseRemainingColor": false,
						"progressBarRemainingColor": "#000000",
						"progressBarShowValue": false,
						"useBulletchart": false,
						"showDataLabel": false,
						"bulletTargetWidth": 3,
						"bulletTargetColor": "#706f6f",
						"bulletRange1Color": "#c4c4c4",
						"bulletRange2Color": "#dddddd",
						"bulletRange3Color": "#f1f1f1",
						"useSparkline": false,
						"sparklineDimension": "Date",
						"sparklineTimeaware": false,
						"sparklineTimestretch": false,
						"sparklineType": "line",
						"sparklineUseCustomStyling": false,
						"sparklineColor": "#657dbb",
						"sparklineFillAreaColor": "#657dbb",
						"sparklineLineWidth": 1,
						"sparklineUseDataPoints": false,
						"sparklineDataPointRadius": 1.5,
						"sparklineDataPointColoringType": "single",
						"sparklineDataPointsColor": "#F93F17",
						"sparklineDataPointColoring": {
							"qStringExpression": {
								"qExpr": "='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"
							}
						},
						"sparklineUseHighlights": true,
						"sparklineHighlightSpotRadius": 1.5,
						"sparklineHighlightUseLast": false,
						"sparklineHighglightLastColor": "#F93F17",
						"sparklineHighlightUseMax": true,
						"sparklineHighglightMaxColor": "#657dbb",
						"sparklineHighlightUseMin": true,
						"sparklineHighglightMinColor": "#F93F17",
						"minichartBarColor": "#657dbb",
						"minichartNegativeBarColor": "#F93F17",
						"minichartMaxBars": 50,
						"minichartFirstBars": true,
						"minichartBarWidth": 4,
						"minichartBarSpacing": 1,
						"minichartZeroAxis": true,
						"showBorder": false,
						"borderColor": "#F2F2F2",
						"Showtotal": true,
						"totalMode": "Expr",
						"iconColorPicker": {
							"color": "#000000",
							"index": -1
						},
						"textColorPicker": {
							"color": "#595959",
							"index": -1
						},
						"backgroundColorPicker": {
							"color": "#none",
							"index": -1
						},
						"bulletActualColorPicker": {
							"color": "#657dbc",
							"index": -1
						},
						"bulletRange1ColorPicker": {
							"color": "#c4c4c4",
							"index": -1
						},
						"bulletRange2ColorPicker": {
							"color": "#dddddd",
							"index": -1
						},
						"bulletRange3ColorPicker": {
							"color": "#f1f1f1",
							"index": -1
						},
						"borderColorPicker": {
							"color": "#F2F2F2",
							"index": -1
						},
						"isCustomFormatted": false
					},
					"qSortBy": {
						"qSortByNumeric": -1,
						"qSortByLoadOrder": 1,
						"qExpression": {}
					},
					"qAttributeExpressions": [{
						"qExpression": "'rgb(243,243,246)'",
						"id": "cellColour"
					}, {
						"qExpression": "=if(Column(11)<0, 'red')",
						"id": "textColour"
					}],
					"qAttributeDimensions": [],
					"qCalcCond": {},
					"qCalcCondition": {
						"qCond": {},
						"qMsg": {}
					}
				}],
				"qInterColumnSortOrder": [2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0],
				"qSuppressMissing": true,
				"qInitialDataFetch": [{
					"qLeft": 0,
					"qTop": 0,
					"qWidth": 0,
					"qHeight": 0
				}],
				"qReductionMode": "N",
				"qMode": "S",
				"qPseudoDimPos": -1,
				"qNoOfLeftDims": -1,
				"qMaxStackedCells": 5000,
				"qCalcCond": {},
				"qTitle": {},
				"qCalcCondition": {
					"qCond": {},
					"qMsg": {}
				},
				"customErrorMessage": {
					"calcCond": ""
				},
				"columnOrder": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
				"columnWidths": [89, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
				"qLayoutExclude": {
					"qHyperCubeDef": {
						"qDimensions": [],
						"qMeasures": [],
						"qInterColumnSortOrder": [],
						"qInitialDataFetch": [],
						"qReductionMode": "N",
						"qMode": "S",
						"qPseudoDimPos": -1,
						"qNoOfLeftDims": -1,
						"qMaxStackedCells": 5000,
						"qCalcCond": {},
						"qTitle": {},
						"qCalcCondition": {
							"qCond": {},
							"qMsg": {}
						}
					}
				}
			},
			"showTitles": false,
			"title": "By portfolio",
			"subtitle": "",
			"footnote": "",
			"showDetails": false,
			"visualization": "table",
			"totals": {
				"show": false,
				"position": "bottom",
				"label": "Total"
			},
			"scrolling": {
				"keepFirstColumnInView": true
			},
			"multiline": {
				"wrapTextInHeaders": true,
				"wrapTextInCells": false
			},
			"qLayoutExclude": {
				"disabled": {
					"props": {
						"showHeader": true,
						"header": {
							"fontColor": "#808080",
							"fontsizeslider": {
								"qValueExpression": {
									"qExpr": "=vTableHeaderFontSize"
								}
							},
							"fontsize": {
								"qValueExpression": {
									"qExpr": "=vTableHeaderFontSize"
								}
							},
							"fontfamily": "\"QlikView Sans\", sans-serif",
							"customfontfamily": "<Type in your Font Name>",
							"fontStyle": "",
							"dropshadow": false,
							"textalignment": "center",
							"headerBackgroundColor": "#none",
							"fontColorPicker": {
								"color": "#808080",
								"index": -1
							},
							"headerBackgroundColorPicker": {
								"color": "#none",
								"index": -1
							}
						},
						"rows": {
							"useAutoHeight": false,
							"height": {
								"qValueExpression": {
									"qExpr": "vTableRowHeight"
								}
							},
							"fontsize": {
								"qValueExpression": {
									"qExpr": "vTableFontSize"
								}
							},
							"fontsizeslider": {
								"qValueExpression": {
									"qExpr": "vTableFontSize"
								}
							},
							"fontfamily": "\"QlikView Sans\", sans-serif",
							"customfontfamily": "<Type in your Font Name>",
							"fontstyle": "",
							"dropshadow": false,
							"useStripes": false,
							"rowsBackgroundColor": "#none",
							"rowsStripBackground1Color": "#none",
							"rowsStripBackground2Color": "#D3D6D6",
							"showBorder": true,
							"rowsBackgroundColorPicker": {
								"color": "#none",
								"index": -1
							}
						},
						"totals": {
							"showTotals": true,
							"totalsLabel": "Totals",
							"totalsFontColor": "#808080",
							"totalsBackgroundColor": "#F5F5F5",
							"position": "bottom",
							"totalsFontColorPicker": {
								"color": "#808080",
								"index": -1
							},
							"totalsBackgroundColorPicker": {
								"color": "#F5F5F5",
								"index": -1
							}
						},
						"sizetodata": true,
						"splitAvailableSize": true,
						"pagination": {
							"moreDataButtonText": "Show more data...",
							"moreDataButtonPosition": 0,
							"pagesize": 100,
							"showMoreDataButton": true
						},
						"nullcellColour": "#e9e9e9",
						"nullsymbol": "-",
						"icons": {
							"showmaximize": true,
							"showsnapshot": false
						},
						"about": "",
						"nullcellColourPicker": {
							"color": "='#e9e9e9'",
							"index": -1
						}
					},
					"highlightrows": true,
					"rowhighlight_bgcolor": "#696969",
					"rowhighlight_color": "#FFFFFF",
					"highlightcolumns": true,
					"exportFilename": "VizlibTable",
					"allowselections": true,
					"multiselect": true,
					"dragselect": "false",
					"interactivesorting": true,
					"searchenabled": true,
					"version": 1,
					"extensionMeta": {
						"translationKey": "",
						"icon": "table",
						"iconChar": "g",
						"isLibraryItem": true,
						"name": " Vizlib Table",
						"description": "Classic Table which includes majority of QlikView functionality with extended formatting options.",
						"template": "VizlibTable",
						"isThirdParty": true,
						"type": "visualization",
						"preview": "VizlibTable.png",
						"version": "1.5.2",
						"author": "Ralf Becher & Vizlib ltd.",
						"homepage": "Vizlib.com",
						"email": "support@vizlib.com",
						"keywords": "qlik-sense, visualization",
						"license": "2017 © Vizlib Ltd. - All rights reserved.",
						"tc": "http://www.vizlib.com/termsandconditions/",
						"repository": "",
						"dependencies": {
							"qlik-sense": ">=3.0.x"
						},
						"previewIconURL": "../extensions/VizlibTable/VizlibTable.png"
					},
					"rowhighlight_bgcolorpicker": {
						"color": "#696969",
						"index": -1
					},
					"rowhighlight_colorpicker": {
						"color": "#FFFFFF",
						"index": -1
					}
				},
				"quarantine": {}
			}			
		},
		byParent: {"qInfo":{"qType":"Table"},"qMetaDef":{},elementId:"demurrageTable2", "qHyperCubeDef":{"qDimensions":[{"qDef":{"qGrouping":"N","qFieldDefs":["=$(vDemurrages_CompanyField)"],"qFieldLabels":[""],"qSortCriterias":[{"qSortByLoadOrder":1,"qExpression":{}}],"qNumberPresentations":[],"qActiveField":0,"qLabelExpression":"= ' '","autoSort":true,"cId":"YgCZvW","othersLabel":"Others","textAlign":{"auto":true,"align":"left"},"representation":{"type":"text","urlLabel":""}},"qOtherTotalSpec":{"qOtherMode":"OTHER_OFF","qOtherCounted":{"qv":"10"},"qOtherLimit":{"qv":"0"},"qOtherLimitMode":"OTHER_GE_LIMIT","qForceBadValueKeeping":true,"qApplyEvenWhenPossiblyWrongResult":true,"qOtherSortMode":"OTHER_SORT_DESCENDING","qTotalMode":"TOTAL_OFF","qReferencedExpression":{}},"qOtherLabel":{"qv":"Others"},"qTotalLabel":{},"qCalcCond":{},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCondition":{"qCond":{},"qMsg":{}}}],"qMeasures":[{"qDef":{"qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"qLabelExpression":"='Budgeted'","autoSort":true,"cId":"LuhvbMU","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":true,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"HjmTe","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Provision","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"BFMQmzT","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=if(Column(3)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Claim BE aft. prov.","qTags":[],"qGrouping":"N","qDef":"\"Budgeted\"+\"Net invoiced\"+\"Provision\"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"ppjLVzD","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=vDemurrages_ClaimBackgroundColor","id":"cellColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Age (mths)","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Weighted Age Months])/\"Net invoiced\"/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"JaLjSvK","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":true,"Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"index":-1,"color":"#F2F2F2"},"isCustomFormatted":false,"borderColor":"#F2F2F2"},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Budgeted","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"vUnPjS","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"center","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"YXjJWgh","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Provision","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"LfCnyk","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=if(Column(8)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Claim BE aft. prov.","qTags":[],"qGrouping":"N","qDef":"Column(6)+Column(7)+Column(8)\n//\"Budgeted \"+\"Net invoiced \"+\"Provision \"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"FACydJ","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=vDemurrages_ClaimBackgroundColor","id":"cellColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Age (mths)","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Weighted Age Months])/Column(7)*-1/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"cRF","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":true,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"=Column(2)-Column(7)\n//\"Net invoiced\"-\"Net invoiced \"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"NMMgG","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Net</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"'rgb(243,243,246)'","id":"cellColour"},{"qExpression":"=if(Column(11)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}}],"qInterColumnSortOrder":[2,1,3,4,5,6,7,8,9,10,11,0],"qSuppressMissing":true,"qInitialDataFetch":[{"qLeft":0,"qTop":0,"qWidth":0,"qHeight":0}],"qReductionMode":"N","qMode":"S","qPseudoDimPos":-1,"qNoOfLeftDims":-1,"qMaxStackedCells":5000,"qCalcCond":{},"qTitle":{},"qCalcCondition":{"qCond":{},"qMsg":{}},"columnOrder":[0,1,2,3,4,5,6,7,8,9,10,11],"columnWidths":[89,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"customErrorMessage":{"calcCond":""},"qLayoutExclude":{"qHyperCubeDef":{"qDimensions":[],"qMeasures":[],"qInterColumnSortOrder":[],"qInitialDataFetch":[],"qReductionMode":"N","qMode":"S","qPseudoDimPos":-1,"qNoOfLeftDims":-1,"qMaxStackedCells":5000,"qCalcCond":{},"qTitle":{},"qCalcCondition":{"qCond":{},"qMsg":{}}}}},"showTitles":false,"title":"By parent counterparty","subtitle":"","footnote":"","showDetails":false,"totals":{"show":false,"position":"bottom","label":"Total"},"scrolling":{"keepFirstColumnInView":true},"multiline":{"wrapTextInHeaders":true,"wrapTextInCells":false},"visualization":"table","qLayoutExclude":{"disabled":{"props":{"showHeader":true,"header":{"fontColor":"#808080","fontsizeslider":{"qValueExpression":{"qExpr":"=vTableHeaderFontSize"}},"fontsize":{"qValueExpression":{"qExpr":"=vTableHeaderFontSize"}},"fontfamily":"\"QlikView Sans\", sans-serif","customfontfamily":"<Type in your Font Name>","fontStyle":"","dropshadow":false,"textalignment":"center","headerBackgroundColor":"#none","fontColorPicker":{"color":"#808080","index":-1},"headerBackgroundColorPicker":{"color":"#none","index":-1}},"rows":{"useAutoHeight":false,"height":{"qValueExpression":{"qExpr":"vTableRowHeight"}},"fontsize":{"qValueExpression":{"qExpr":"vTableFontSize"}},"fontsizeslider":{"qValueExpression":{"qExpr":"vTableFontSize"}},"fontfamily":"\"QlikView Sans\", sans-serif","customfontfamily":"<Type in your Font Name>","fontstyle":"","dropshadow":false,"useStripes":false,"rowsBackgroundColor":"#none","rowsStripBackground1Color":"#none","rowsStripBackground2Color":"#D3D6D6","showBorder":true,"rowsBackgroundColorPicker":{"color":"#none","index":-1}},"totals":{"showTotals":true,"totalsLabel":"Totals","totalsFontColor":"#808080","totalsBackgroundColor":"#F5F5F5","position":"bottom","totalsFontColorPicker":{"color":"#808080","index":-1},"totalsBackgroundColorPicker":{"color":"#F5F5F5","index":-1}},"sizetodata":true,"splitAvailableSize":true,"pagination":{"moreDataButtonText":"Show more data...","moreDataButtonPosition":0,"pagesize":100,"showMoreDataButton":true},"nullcellColour":"#e9e9e9","nullsymbol":"-","icons":{"showmaximize":true,"showsnapshot":false},"about":"","nullcellColourPicker":{"color":"='#e9e9e9'","index":-1}},"highlightrows":true,"rowhighlight_bgcolor":"#696969","rowhighlight_color":"#FFFFFF","highlightcolumns":true,"exportFilename":"VizlibTable","allowselections":true,"multiselect":true,"dragselect":"false","interactivesorting":true,"searchenabled":true,"version":1,"extensionMeta":{"translationKey":"","icon":"table","iconChar":"g","isLibraryItem":true,"name":" Vizlib Table","description":"Classic Table which includes majority of QlikView functionality with extended formatting options.","template":"VizlibTable","isThirdParty":true,"type":"visualization","preview":"VizlibTable.png","version":"1.5.2","author":"Ralf Becher & Vizlib ltd.","homepage":"Vizlib.com","email":"support@vizlib.com","keywords":"qlik-sense, visualization","license":"2017 © Vizlib Ltd. - All rights reserved.","tc":"http://www.vizlib.com/termsandconditions/","repository":"","dependencies":{"qlik-sense":">=3.0.x"},"previewIconURL":"../extensions/VizlibTable/VizlibTable.png"},"rowhighlight_bgcolorpicker":{"color":"#696969","index":-1},"rowhighlight_colorpicker":{"color":"#FFFFFF","index":-1}},"quarantine":{}}},
		byRegion: {"qInfo":{"qType":"Table"},"qMetaDef":{},elementId:"demurrageTable3","qHyperCubeDef":{"qDimensions":[{"qDef":{"qGrouping":"N","qFieldDefs":["=$(vDemurrages_RegionField)"],"qFieldLabels":[""],"qSortCriterias":[{"qSortByLoadOrder":1,"qExpression":{}}],"qNumberPresentations":[],"qActiveField":0,"qLabelExpression":"= ' '","autoSort":true,"cId":"YgCZvW","othersLabel":"Others","textAlign":{"auto":true,"align":"left"},"representation":{"type":"text","urlLabel":""}},"qOtherTotalSpec":{"qOtherMode":"OTHER_OFF","qOtherCounted":{"qv":"10"},"qOtherLimit":{"qv":"0"},"qOtherLimitMode":"OTHER_GE_LIMIT","qForceBadValueKeeping":true,"qApplyEvenWhenPossiblyWrongResult":true,"qOtherSortMode":"OTHER_SORT_DESCENDING","qTotalMode":"TOTAL_OFF","qReferencedExpression":{}},"qOtherLabel":{"qv":"Others"},"qTotalLabel":{},"qCalcCond":{},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCondition":{"qCond":{},"qMsg":{}}}],"qMeasures":[{"qDef":{"qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"qLabelExpression":"='Budgeted'","autoSort":true,"cId":"LuhvbMU","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":true,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"HjmTe","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Provision","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"BFMQmzT","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=if(Column(3)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Claim BE aft. prov.","qTags":[],"qGrouping":"N","qDef":"\"Budgeted\"+\"Net invoiced\"+\"Provision\"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"ppjLVzD","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=vDemurrages_ClaimBackgroundColor","id":"cellColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Age (mths)","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Weighted Age Months])/\"Net invoiced\"/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"JaLjSvK","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":true,"Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"index":-1,"color":"#F2F2F2"},"isCustomFormatted":false,"borderColor":"#F2F2F2"},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Budgeted","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"vUnPjS","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"center","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"YXjJWgh","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Provision","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"LfCnyk","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=if(Column(8)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Claim BE aft. prov.","qTags":[],"qGrouping":"N","qDef":"Column(6)+Column(7)+Column(8)\n//\"Budgeted \"+\"Net invoiced \"+\"Provision \"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"FACydJ","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=vDemurrages_ClaimBackgroundColor","id":"cellColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Age (mths)","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Weighted Age Months])/Column(7)*-1/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"cRF","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":true,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"=Column(2)-Column(7)\n//\"Net invoiced\"-\"Net invoiced \"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"NMMgG","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Net</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"'rgb(243,243,246)'","id":"cellColour"},{"qExpression":"=if(Column(11)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}}],"qInterColumnSortOrder":[2,1,3,4,5,6,7,8,9,10,11,0],"qSuppressMissing":true,"qInitialDataFetch":[{"qLeft":0,"qTop":0,"qWidth":0,"qHeight":0}],"qReductionMode":"N","qMode":"S","qPseudoDimPos":-1,"qNoOfLeftDims":-1,"qMaxStackedCells":5000,"qCalcCond":{},"qTitle":{},"qCalcCondition":{"qCond":{},"qMsg":{}},"columnOrder":[0,1,2,3,4,5,6,7,8,9,10,11],"columnWidths":[89,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"customErrorMessage":{"calcCond":""},"qLayoutExclude":{"qHyperCubeDef":{"qDimensions":[],"qMeasures":[],"qInterColumnSortOrder":[],"qInitialDataFetch":[],"qReductionMode":"N","qMode":"S","qPseudoDimPos":-1,"qNoOfLeftDims":-1,"qMaxStackedCells":5000,"qCalcCond":{},"qTitle":{},"qCalcCondition":{"qCond":{},"qMsg":{}}}}},"showTitles":false,"title":"By region","subtitle":"","footnote":"","showDetails":false,"totals":{"show":false,"position":"bottom","label":"Total"},"scrolling":{"keepFirstColumnInView":true},"multiline":{"wrapTextInHeaders":true,"wrapTextInCells":false},"visualization":"table","qLayoutExclude":{"disabled":{"props":{"showHeader":true,"header":{"fontColor":"#808080","fontsizeslider":{"qValueExpression":{"qExpr":"=vTableHeaderFontSize"}},"fontsize":{"qValueExpression":{"qExpr":"=vTableHeaderFontSize"}},"fontfamily":"\"QlikView Sans\", sans-serif","customfontfamily":"<Type in your Font Name>","fontStyle":"","dropshadow":false,"textalignment":"center","headerBackgroundColor":"#none","fontColorPicker":{"color":"#808080","index":-1},"headerBackgroundColorPicker":{"color":"#none","index":-1}},"rows":{"useAutoHeight":false,"height":{"qValueExpression":{"qExpr":"vTableRowHeight"}},"fontsize":{"qValueExpression":{"qExpr":"vTableFontSize"}},"fontsizeslider":{"qValueExpression":{"qExpr":"vTableFontSize"}},"fontfamily":"\"QlikView Sans\", sans-serif","customfontfamily":"<Type in your Font Name>","fontstyle":"","dropshadow":false,"useStripes":false,"rowsBackgroundColor":"#none","rowsStripBackground1Color":"#none","rowsStripBackground2Color":"#D3D6D6","showBorder":true,"rowsBackgroundColorPicker":{"color":"#none","index":-1}},"totals":{"showTotals":true,"totalsLabel":"Totals","totalsFontColor":"#808080","totalsBackgroundColor":"#F5F5F5","position":"bottom","totalsFontColorPicker":{"color":"#808080","index":-1},"totalsBackgroundColorPicker":{"color":"#F5F5F5","index":-1}},"sizetodata":true,"splitAvailableSize":true,"pagination":{"moreDataButtonText":"Show more data...","moreDataButtonPosition":0,"pagesize":100,"showMoreDataButton":true},"nullcellColour":"#e9e9e9","nullsymbol":"-","icons":{"showmaximize":true,"showsnapshot":false},"about":"","nullcellColourPicker":{"color":"='#e9e9e9'","index":-1}},"highlightrows":true,"rowhighlight_bgcolor":"#696969","rowhighlight_color":"#FFFFFF","highlightcolumns":true,"exportFilename":"VizlibTable","allowselections":true,"multiselect":true,"dragselect":"false","interactivesorting":true,"searchenabled":true,"version":1,"extensionMeta":{"translationKey":"","icon":"table","iconChar":"g","isLibraryItem":true,"name":" Vizlib Table","description":"Classic Table which includes majority of QlikView functionality with extended formatting options.","template":"VizlibTable","isThirdParty":true,"type":"visualization","preview":"VizlibTable.png","version":"1.5.2","author":"Ralf Becher & Vizlib ltd.","homepage":"Vizlib.com","email":"support@vizlib.com","keywords":"qlik-sense, visualization","license":"2017 © Vizlib Ltd. - All rights reserved.","tc":"http://www.vizlib.com/termsandconditions/","repository":"","dependencies":{"qlik-sense":">=3.0.x"},"previewIconURL":"../extensions/VizlibTable/VizlibTable.png"},"rowhighlight_bgcolorpicker":{"color":"#696969","index":-1},"rowhighlight_colorpicker":{"color":"#FFFFFF","index":-1}},"quarantine":{}}},
		byCost: {"qInfo":{"qType":"Table"},"qMetaDef":{},elementId:"demurrageTable4","qHyperCubeDef":{"qDimensions":[{"qDef":{"qGrouping":"N","qFieldDefs":["DEMURRAGES Cost Age"],"qFieldLabels":[""],"qSortCriterias":[{"qSortByLoadOrder":1,"qExpression":{}}],"qNumberPresentations":[],"qActiveField":0,"qLabelExpression":"= ' '","autoSort":true,"cId":"YgCZvW","othersLabel":"Others","textAlign":{"auto":true,"align":"left"},"representation":{"type":"text","urlLabel":""}},"qOtherTotalSpec":{"qOtherMode":"OTHER_OFF","qOtherCounted":{"qv":"10"},"qOtherLimit":{"qv":"0"},"qOtherLimitMode":"OTHER_GE_LIMIT","qForceBadValueKeeping":true,"qApplyEvenWhenPossiblyWrongResult":true,"qOtherSortMode":"OTHER_SORT_DESCENDING","qTotalMode":"TOTAL_OFF","qReferencedExpression":{}},"qOtherLabel":{"qv":"Others"},"qTotalLabel":{},"qCalcCond":{},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCondition":{"qCond":{},"qMsg":{}}}],"qMeasures":[{"qDef":{"qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"qLabelExpression":"='Budgeted'","autoSort":true,"cId":"LuhvbMU","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":true,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"HjmTe","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Provision","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"BFMQmzT","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=if(Column(3)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Claim BE aft. prov.","qTags":[],"qGrouping":"N","qDef":"\"Budgeted\"+\"Net invoiced\"+\"Provision\"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"ppjLVzD","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=vDemurrages_ClaimBackgroundColor","id":"cellColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Age (mths)","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Weighted Age Months])/\"Net invoiced\"/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"JaLjSvK","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":true,"Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"index":-1,"color":"#F2F2F2"},"isCustomFormatted":false,"borderColor":"#F2F2F2"},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Budgeted","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"vUnPjS","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"center","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"YXjJWgh","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Provision","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"LfCnyk","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=if(Column(8)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Claim BE aft. prov.","qTags":[],"qGrouping":"N","qDef":"Column(6)+Column(7)+Column(8)\n//\"Budgeted \"+\"Net invoiced \"+\"Provision \"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"FACydJ","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=vDemurrages_ClaimBackgroundColor","id":"cellColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Age (mths)","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Weighted Age Months])/Column(7)*-1/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"cRF","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":true,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"=Column(2)-Column(7)\n//\"Net invoiced\"-\"Net invoiced \"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"NMMgG","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Net</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"'rgb(243,243,246)'","id":"cellColour"},{"qExpression":"=if(Column(11)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}}],"qInterColumnSortOrder":[2,1,3,4,5,6,7,8,9,10,11,0],"qSuppressMissing":true,"qInitialDataFetch":[{"qLeft":0,"qTop":0,"qWidth":0,"qHeight":0}],"qReductionMode":"N","qMode":"S","qPseudoDimPos":-1,"qNoOfLeftDims":-1,"qMaxStackedCells":5000,"qCalcCond":{},"qTitle":{},"qCalcCondition":{"qCond":{},"qMsg":{}},"columnOrder":[0,1,2,3,4,5,6,7,8,9,10,11],"columnWidths":[89,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"customErrorMessage":{"calcCond":""},"qLayoutExclude":{"qHyperCubeDef":{"qDimensions":[],"qMeasures":[],"qInterColumnSortOrder":[],"qInitialDataFetch":[],"qReductionMode":"N","qMode":"S","qPseudoDimPos":-1,"qNoOfLeftDims":-1,"qMaxStackedCells":5000,"qCalcCond":{},"qTitle":{},"qCalcCondition":{"qCond":{},"qMsg":{}}}}},"showTitles":false,"title":"By cost age","subtitle":"","footnote":"","showDetails":false,"totals":{"show":false,"position":"bottom","label":"Total"},"scrolling":{"keepFirstColumnInView":true},"multiline":{"wrapTextInHeaders":true,"wrapTextInCells":false},"visualization":"table","qLayoutExclude":{"disabled":{"props":{"showHeader":true,"header":{"fontColor":"#808080","fontsizeslider":{"qValueExpression":{"qExpr":"=vTableHeaderFontSize"}},"fontsize":{"qValueExpression":{"qExpr":"=vTableHeaderFontSize"}},"fontfamily":"\"QlikView Sans\", sans-serif","customfontfamily":"<Type in your Font Name>","fontStyle":"","dropshadow":false,"textalignment":"center","headerBackgroundColor":"#none","fontColorPicker":{"color":"#808080","index":-1},"headerBackgroundColorPicker":{"color":"#none","index":-1}},"rows":{"useAutoHeight":false,"height":{"qValueExpression":{"qExpr":"vTableRowHeight"}},"fontsize":{"qValueExpression":{"qExpr":"vTableFontSize"}},"fontsizeslider":{"qValueExpression":{"qExpr":"vTableFontSize"}},"fontfamily":"\"QlikView Sans\", sans-serif","customfontfamily":"<Type in your Font Name>","fontstyle":"","dropshadow":false,"useStripes":false,"rowsBackgroundColor":"#none","rowsStripBackground1Color":"#none","rowsStripBackground2Color":"#D3D6D6","showBorder":true,"rowsBackgroundColorPicker":{"color":"#none","index":-1}},"totals":{"showTotals":true,"totalsLabel":"Totals","totalsFontColor":"#808080","totalsBackgroundColor":"#F5F5F5","position":"bottom","totalsFontColorPicker":{"color":"#808080","index":-1},"totalsBackgroundColorPicker":{"color":"#F5F5F5","index":-1}},"sizetodata":true,"splitAvailableSize":true,"pagination":{"moreDataButtonText":"Show more data...","moreDataButtonPosition":0,"pagesize":100,"showMoreDataButton":true},"nullcellColour":"#e9e9e9","nullsymbol":"-","icons":{"showmaximize":true,"showsnapshot":false},"about":"","nullcellColourPicker":{"color":"='#e9e9e9'","index":-1}},"highlightrows":true,"rowhighlight_bgcolor":"#696969","rowhighlight_color":"#FFFFFF","highlightcolumns":true,"exportFilename":"VizlibTable","allowselections":true,"multiselect":true,"dragselect":"false","interactivesorting":true,"searchenabled":true,"version":1,"extensionMeta":{"translationKey":"","icon":"table","iconChar":"g","isLibraryItem":true,"name":" Vizlib Table","description":"Classic Table which includes majority of QlikView functionality with extended formatting options.","template":"VizlibTable","isThirdParty":true,"type":"visualization","preview":"VizlibTable.png","version":"1.5.2","author":"Ralf Becher & Vizlib ltd.","homepage":"Vizlib.com","email":"support@vizlib.com","keywords":"qlik-sense, visualization","license":"2017 © Vizlib Ltd. - All rights reserved.","tc":"http://www.vizlib.com/termsandconditions/","repository":"","dependencies":{"qlik-sense":">=3.0.x"},"previewIconURL":"../extensions/VizlibTable/VizlibTable.png"},"rowhighlight_bgcolorpicker":{"color":"#696969","index":-1},"rowhighlight_colorpicker":{"color":"#FFFFFF","index":-1}},"quarantine":{}}},
		byCostType: {"qInfo":{"qType":"Table"},"qMetaDef":{},elementId:"demurrageTable5","qHyperCubeDef":{"qDimensions":[{"qDef":{"qGrouping":"N","qFieldDefs":["DEMURRAGES Cost Type"],"qFieldLabels":[""],"qSortCriterias":[{"qSortByLoadOrder":1,"qExpression":{}}],"qNumberPresentations":[],"qActiveField":0,"qLabelExpression":"= ' '","autoSort":true,"cId":"YgCZvW","othersLabel":"Others","textAlign":{"auto":true,"align":"left"},"representation":{"type":"text","urlLabel":""}},"qOtherTotalSpec":{"qOtherMode":"OTHER_OFF","qOtherCounted":{"qv":"10"},"qOtherLimit":{"qv":"0"},"qOtherLimitMode":"OTHER_GE_LIMIT","qForceBadValueKeeping":true,"qApplyEvenWhenPossiblyWrongResult":true,"qOtherSortMode":"OTHER_SORT_DESCENDING","qTotalMode":"TOTAL_OFF","qReferencedExpression":{}},"qOtherLabel":{"qv":"Others"},"qTotalLabel":{},"qCalcCond":{},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCondition":{"qCond":{},"qMsg":{}}}],"qMeasures":[{"qDef":{"qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"qLabelExpression":"='Budgeted'","autoSort":true,"cId":"LuhvbMU","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":true,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"HjmTe","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Provision","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"BFMQmzT","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=if(Column(3)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Claim BE aft. prov.","qTags":[],"qGrouping":"N","qDef":"\"Budgeted\"+\"Net invoiced\"+\"Provision\"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"ppjLVzD","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=vDemurrages_ClaimBackgroundColor","id":"cellColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Age (mths)","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Weighted Age Months])/\"Net invoiced\"/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"JaLjSvK","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":true,"Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"index":-1,"color":"#F2F2F2"},"isCustomFormatted":false,"borderColor":"#F2F2F2"},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Budgeted","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"vUnPjS","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"center","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"YXjJWgh","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Provision","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"LfCnyk","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=if(Column(8)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Claim BE aft. prov.","qTags":[],"qGrouping":"N","qDef":"Column(6)+Column(7)+Column(8)\n//\"Budgeted \"+\"Net invoiced \"+\"Provision \"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"FACydJ","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=vDemurrages_ClaimBackgroundColor","id":"cellColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Age (mths)","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Weighted Age Months])/Column(7)*-1/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"cRF","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":true,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"=Column(2)-Column(7)\n//\"Net invoiced\"-\"Net invoiced \"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"NMMgG","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Net</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"'rgb(243,243,246)'","id":"cellColour"},{"qExpression":"=if(Column(11)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}}],"qInterColumnSortOrder":[2,1,3,4,5,6,7,8,9,10,11,0],"qSuppressMissing":true,"qInitialDataFetch":[{"qLeft":0,"qTop":0,"qWidth":0,"qHeight":0}],"qReductionMode":"N","qMode":"S","qPseudoDimPos":-1,"qNoOfLeftDims":-1,"qMaxStackedCells":5000,"qCalcCond":{},"qTitle":{},"qCalcCondition":{"qCond":{},"qMsg":{}},"columnOrder":[0,1,2,3,4,5,6,7,8,9,10,11],"columnWidths":[89,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"customErrorMessage":{"calcCond":""},"qLayoutExclude":{"qHyperCubeDef":{"qDimensions":[],"qMeasures":[],"qInterColumnSortOrder":[],"qInitialDataFetch":[],"qReductionMode":"N","qMode":"S","qPseudoDimPos":-1,"qNoOfLeftDims":-1,"qMaxStackedCells":5000,"qCalcCond":{},"qTitle":{},"qCalcCondition":{"qCond":{},"qMsg":{}}}}},"showTitles":false,"title":"By cost type","subtitle":"","footnote":"","showDetails":false,"totals":{"show":false,"position":"bottom","label":"Total"},"scrolling":{"keepFirstColumnInView":true},"multiline":{"wrapTextInHeaders":true,"wrapTextInCells":false},"visualization":"table","qLayoutExclude":{"disabled":{"props":{"showHeader":true,"header":{"fontColor":"#808080","fontsizeslider":{"qValueExpression":{"qExpr":"=vTableHeaderFontSize"}},"fontsize":{"qValueExpression":{"qExpr":"=vTableHeaderFontSize"}},"fontfamily":"\"QlikView Sans\", sans-serif","customfontfamily":"<Type in your Font Name>","fontStyle":"","dropshadow":false,"textalignment":"center","headerBackgroundColor":"#none","fontColorPicker":{"color":"#808080","index":-1},"headerBackgroundColorPicker":{"color":"#none","index":-1}},"rows":{"useAutoHeight":false,"height":{"qValueExpression":{"qExpr":"vTableRowHeight"}},"fontsize":{"qValueExpression":{"qExpr":"vTableFontSize"}},"fontsizeslider":{"qValueExpression":{"qExpr":"vTableFontSize"}},"fontfamily":"\"QlikView Sans\", sans-serif","customfontfamily":"<Type in your Font Name>","fontstyle":"","dropshadow":false,"useStripes":false,"rowsBackgroundColor":"#none","rowsStripBackground1Color":"#none","rowsStripBackground2Color":"#D3D6D6","showBorder":true,"rowsBackgroundColorPicker":{"color":"#none","index":-1}},"totals":{"showTotals":true,"totalsLabel":"Totals","totalsFontColor":"#808080","totalsBackgroundColor":"#F5F5F5","position":"bottom","totalsFontColorPicker":{"color":"#808080","index":-1},"totalsBackgroundColorPicker":{"color":"#F5F5F5","index":-1}},"sizetodata":true,"splitAvailableSize":true,"pagination":{"moreDataButtonText":"Show more data...","moreDataButtonPosition":0,"pagesize":100,"showMoreDataButton":true},"nullcellColour":"#e9e9e9","nullsymbol":"-","icons":{"showmaximize":true,"showsnapshot":false},"about":"","nullcellColourPicker":{"color":"='#e9e9e9'","index":-1}},"highlightrows":true,"rowhighlight_bgcolor":"#696969","rowhighlight_color":"#FFFFFF","highlightcolumns":true,"exportFilename":"VizlibTable","allowselections":true,"multiselect":true,"dragselect":"false","interactivesorting":true,"searchenabled":true,"version":1,"extensionMeta":{"translationKey":"","icon":"table","iconChar":"g","isLibraryItem":true,"name":" Vizlib Table","description":"Classic Table which includes majority of QlikView functionality with extended formatting options.","template":"VizlibTable","isThirdParty":true,"type":"visualization","preview":"VizlibTable.png","version":"1.5.2","author":"Ralf Becher & Vizlib ltd.","homepage":"Vizlib.com","email":"support@vizlib.com","keywords":"qlik-sense, visualization","license":"2017 © Vizlib Ltd. - All rights reserved.","tc":"http://www.vizlib.com/termsandconditions/","repository":"","dependencies":{"qlik-sense":">=3.0.x"},"previewIconURL":"../extensions/VizlibTable/VizlibTable.png"},"rowhighlight_bgcolorpicker":{"color":"#696969","index":-1},"rowhighlight_colorpicker":{"color":"#FFFFFF","index":-1}},"quarantine":{}}},
		byVitol: {"qInfo":{"qType":"Table"},"qMetaDef":{},elementId:"demurrageTable6","qHyperCubeDef":{"qDimensions":[{"qDef":{"qGrouping":"N","qFieldDefs":["D Vitol Company Code"],"qFieldLabels":[""],"qSortCriterias":[{"qSortByLoadOrder":1,"qExpression":{}}],"qNumberPresentations":[],"qActiveField":0,"qLabelExpression":"= ' '","autoSort":true,"cId":"YgCZvW","othersLabel":"Others","textAlign":{"auto":true,"align":"left"},"representation":{"type":"text","urlLabel":""}},"qOtherTotalSpec":{"qOtherMode":"OTHER_OFF","qOtherCounted":{"qv":"10"},"qOtherLimit":{"qv":"0"},"qOtherLimitMode":"OTHER_GE_LIMIT","qForceBadValueKeeping":true,"qApplyEvenWhenPossiblyWrongResult":true,"qOtherSortMode":"OTHER_SORT_DESCENDING","qTotalMode":"TOTAL_OFF","qReferencedExpression":{}},"qOtherLabel":{"qv":"Others"},"qTotalLabel":{},"qCalcCond":{},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCondition":{"qCond":{},"qMsg":{}}}],"qMeasures":[{"qDef":{"qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"qLabelExpression":"='Budgeted'","autoSort":true,"cId":"LuhvbMU","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":true,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"HjmTe","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Provision","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"BFMQmzT","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=if(Column(3)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Claim BE aft. prov.","qTags":[],"qGrouping":"N","qDef":"\"Budgeted\"+\"Net invoiced\"+\"Provision\"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"ppjLVzD","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=vDemurrages_ClaimBackgroundColor","id":"cellColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Age (mths)","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseR)>} [DEMURRAGES Weighted Age Months])/\"Net invoiced\"/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"JaLjSvK","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Receivable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":true,"Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"index":-1,"color":"#F2F2F2"},"isCustomFormatted":false,"borderColor":"#F2F2F2"},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Budgeted","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>}  [DEMURRAGES Budgeted Amount USD])/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"vUnPjS","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Budgeted</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"center","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Net Invoiced Amount USD])/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"YXjJWgh","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"='#595959'"},{"qExpression":"='#none'"},{},{"qExpression":"='#657dbb'"},{"qExpression":"='#ec5656'"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{"qExpression":"0"},{},{"qExpression":"='#657dbc'"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Provision","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} rangesum([DEMURRAGES Manually Provisioned Amount USD],[DEMURRAGES Automaticaly Provisioned Amount USD],[DEMURRAGES Corporate Share Amount USD]))/vDividerAmount*-1","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"LfCnyk","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Provision</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"=vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=if(Column(8)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Claim BE aft. prov.","qTags":[],"qGrouping":"N","qDef":"Column(6)+Column(7)+Column(8)\n//\"Budgeted \"+\"Net invoiced \"+\"Provision \"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"FACydJ","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Claim BE aft. prov.</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"=vDemurrages_ClaimBackgroundColor","id":"cellColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Age (mths)","qTags":[],"qGrouping":"N","qDef":"sum({<$(vDemurrages_saOutStdBaseP)>} [DEMURRAGES Weighted Age Months])/Column(7)*-1/vDividerAmount","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"cRF","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline; color: #ffffff;\"><strong>Payable</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Age (months)</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":true,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}},{"qDef":{"qLabel":"Net invoiced","qTags":[],"qGrouping":"N","qDef":"=Column(2)-Column(7)\n//\"Net invoiced\"-\"Net invoiced \"","qNumFormat":{"qType":"F","qnDec":2,"qUseThou":0,"qFmt":"#,##0.0","qDec":".","qThou":","},"qAggrFunc":"Expr","qAccumulate":0,"qActiveExpression":0,"qExpressions":[],"autoSort":true,"cId":"NMMgG","numFormatFromTemplate":true,"textAlign":{"auto":true,"align":"left"},"showMeasure":false,"qShowHide":"","labelExpression":{"qStringExpression":{"qExpr":"='<p style=\"text-align: center;\"><span style=\"text-decoration: underline;\"><strong>Net</strong></span></p>\n<p style=\"text-align: center;\"><br><span style=\"text-decoration: underline;\">Net invoiced</span></p>'"}},"showIcons":false,"icon":"","iconColor":"#000000","iconPosition":0,"titleTextAlignment":"right","adjustColumnWidth":true,"columnWidth":{"qValueExpression":{"qExpr":"vTableMeasureWidth"}},"columnWidthSlider":200,"fontStyle":"","dropshadow":false,"textAlignment":"right","useCellCustomCSS":false,"cellRepresentation":"text","useHTML":false,"useURL":false,"useIndicators":false,"iconPositive":"fa-arrow-up","iconPositiveColor":"#657dbb","iconNegative":"fa-arrow-down","iconNegativeColor":"#F93F17","iconZero":"fa-arrow-left","iconZeroColor":"#898989","indicatorShowValue":true,"indicatorvalue":0,"progressMaxIsDynamic":true,"progressMinFixedValue":-100,"progressMaxFixedValue":100,"supportNegativeBars":true,"progressBarUseRemainingColor":false,"progressBarRemainingColor":"#000000","progressBarShowValue":false,"useBulletchart":false,"showDataLabel":false,"bulletTargetWidth":3,"bulletTargetColor":"#706f6f","bulletRange1Color":"#c4c4c4","bulletRange2Color":"#dddddd","bulletRange3Color":"#f1f1f1","useSparkline":false,"sparklineDimension":"Date","sparklineTimeaware":false,"sparklineTimestretch":false,"sparklineType":"line","sparklineUseCustomStyling":false,"sparklineColor":"#657dbb","sparklineFillAreaColor":"#657dbb","sparklineLineWidth":1,"sparklineUseDataPoints":false,"sparklineDataPointRadius":1.5,"sparklineDataPointColoringType":"single","sparklineDataPointsColor":"#F93F17","sparklineDataPointColoring":{"qStringExpression":{"qExpr":"='[{\"from\": -1000, \"to\": 0, \"color\": \"#ff0000\"}, {\"from\": 0, \"to\": 1000000, \"color\": \"#00ff00\"}]'"}},"sparklineUseHighlights":true,"sparklineHighlightSpotRadius":1.5,"sparklineHighlightUseLast":false,"sparklineHighglightLastColor":"#F93F17","sparklineHighlightUseMax":true,"sparklineHighglightMaxColor":"#657dbb","sparklineHighlightUseMin":true,"sparklineHighglightMinColor":"#F93F17","minichartBarColor":"#657dbb","minichartNegativeBarColor":"#F93F17","minichartMaxBars":50,"minichartFirstBars":true,"minichartBarWidth":4,"minichartBarSpacing":1,"minichartZeroAxis":true,"showBorder":false,"borderColor":"#F2F2F2","Showtotal":true,"totalMode":"Expr","iconColorPicker":{"color":"#000000","index":-1},"textColorPicker":{"color":"#595959","index":-1},"backgroundColorPicker":{"color":"#none","index":-1},"bulletActualColorPicker":{"color":"#657dbc","index":-1},"bulletRange1ColorPicker":{"color":"#c4c4c4","index":-1},"bulletRange2ColorPicker":{"color":"#dddddd","index":-1},"bulletRange3ColorPicker":{"color":"#f1f1f1","index":-1},"borderColorPicker":{"color":"#F2F2F2","index":-1},"isCustomFormatted":false},"qSortBy":{"qSortByNumeric":-1,"qSortByLoadOrder":1,"qExpression":{}},"qAttributeExpressions":[{"qExpression":"'rgb(243,243,246)'","id":"cellColour"},{"qExpression":"=if(Column(11)<0, 'red')","id":"textColour"}],"qAttributeDimensions":[],"qCalcCond":{},"qCalcCondition":{"qCond":{},"qMsg":{}}}],"qInterColumnSortOrder":[2,1,3,4,5,6,7,8,9,10,11,0],"qSuppressMissing":true,"qInitialDataFetch":[{"qLeft":0,"qTop":0,"qWidth":0,"qHeight":0}],"qReductionMode":"N","qMode":"S","qPseudoDimPos":-1,"qNoOfLeftDims":-1,"qMaxStackedCells":5000,"qCalcCond":{},"qTitle":{},"qCalcCondition":{"qCond":{},"qMsg":{}},"columnOrder":[0,1,2,3,4,5,6,7,8,9,10,11],"columnWidths":[89,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"customErrorMessage":{"calcCond":""},"qLayoutExclude":{"qHyperCubeDef":{"qDimensions":[],"qMeasures":[],"qInterColumnSortOrder":[],"qInitialDataFetch":[],"qReductionMode":"N","qMode":"S","qPseudoDimPos":-1,"qNoOfLeftDims":-1,"qMaxStackedCells":5000,"qCalcCond":{},"qTitle":{},"qCalcCondition":{"qCond":{},"qMsg":{}}}}},"showTitles":false,"title":"By Vitol co.","subtitle":"","footnote":"","showDetails":false,"totals":{"show":false,"position":"bottom","label":"Total"},"scrolling":{"keepFirstColumnInView":true},"multiline":{"wrapTextInHeaders":true,"wrapTextInCells":false},"visualization":"table","qLayoutExclude":{"disabled":{"props":{"showHeader":true,"header":{"fontColor":"#808080","fontsizeslider":{"qValueExpression":{"qExpr":"=vTableHeaderFontSize"}},"fontsize":{"qValueExpression":{"qExpr":"=vTableHeaderFontSize"}},"fontfamily":"\"QlikView Sans\", sans-serif","customfontfamily":"<Type in your Font Name>","fontStyle":"","dropshadow":false,"textalignment":"center","headerBackgroundColor":"#none","fontColorPicker":{"color":"#808080","index":-1},"headerBackgroundColorPicker":{"color":"#none","index":-1}},"rows":{"useAutoHeight":false,"height":{"qValueExpression":{"qExpr":"vTableRowHeight"}},"fontsize":{"qValueExpression":{"qExpr":"vTableFontSize"}},"fontsizeslider":{"qValueExpression":{"qExpr":"vTableFontSize"}},"fontfamily":"\"QlikView Sans\", sans-serif","customfontfamily":"<Type in your Font Name>","fontstyle":"","dropshadow":false,"useStripes":false,"rowsBackgroundColor":"#none","rowsStripBackground1Color":"#none","rowsStripBackground2Color":"#D3D6D6","showBorder":true,"rowsBackgroundColorPicker":{"color":"#none","index":-1}},"totals":{"showTotals":true,"totalsLabel":"Totals","totalsFontColor":"#808080","totalsBackgroundColor":"#F5F5F5","position":"bottom","totalsFontColorPicker":{"color":"#808080","index":-1},"totalsBackgroundColorPicker":{"color":"#F5F5F5","index":-1}},"sizetodata":true,"splitAvailableSize":true,"pagination":{"moreDataButtonText":"Show more data...","moreDataButtonPosition":0,"pagesize":100,"showMoreDataButton":true},"nullcellColour":"#e9e9e9","nullsymbol":"-","icons":{"showmaximize":true,"showsnapshot":false},"about":"","nullcellColourPicker":{"color":"='#e9e9e9'","index":-1}},"highlightrows":true,"rowhighlight_bgcolor":"#696969","rowhighlight_color":"#FFFFFF","highlightcolumns":true,"exportFilename":"VizlibTable","allowselections":true,"multiselect":true,"dragselect":"false","interactivesorting":true,"searchenabled":true,"version":1,"extensionMeta":{"translationKey":"","icon":"table","iconChar":"g","isLibraryItem":true,"name":" Vizlib Table","description":"Classic Table which includes majority of QlikView functionality with extended formatting options.","template":"VizlibTable","isThirdParty":true,"type":"visualization","preview":"VizlibTable.png","version":"1.5.2","author":"Ralf Becher & Vizlib ltd.","homepage":"Vizlib.com","email":"support@vizlib.com","keywords":"qlik-sense, visualization","license":"2017 © Vizlib Ltd. - All rights reserved.","tc":"http://www.vizlib.com/termsandconditions/","repository":"","dependencies":{"qlik-sense":">=3.0.x"},"previewIconURL":"../extensions/VizlibTable/VizlibTable.png"},"rowhighlight_bgcolorpicker":{"color":"#696969","index":-1},"rowhighlight_colorpicker":{"color":"#FFFFFF","index":-1}},"quarantine":{}}}
	}
	
}