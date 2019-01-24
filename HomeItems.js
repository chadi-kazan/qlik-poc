const homeItems = {
	dashboardKPIs: {
		qInfo: {
			qType: "dashboard-items"
		},
		KPIs: [
			{
				elementId: "kpi1",
				customClasses: "vitol-navigator",
				customAttributes: "data-element='varScreen'",				
				label: "USD mn",
				trendLabel: "02-Jan-18",
				kpi: {
					qStringExpression: "num($(vVar95_Cob) / v_Divider,'#,##0.0')"
				},
				trend1: {
					qStringExpression: "num($(vVar95_Cob) / v_Divider,'#,##0.0')"
				},
				trend1Icon: {
					qStringExpression: "=if($(vVar95_Cob_1dChange)>=0, 'vitol-icon-kpi-up', 'vitol-icon-kpi-down')"
				},
				trend2: {
					qStringExpression: "num($(vVar95_Cob) / v_Divider,'#,##0.0')"
				},
				trend2Icon: {
					qStringExpression: "=if($(vVar95_Cob_5dChange)>=0, 'vitol-icon-kpi-up', 'vitol-icon-kpi-down')"
				}
			},
			{
				elementId: "kpi2",
				customClasses: "vitol-navigator",
				customAttributes: "data-element='demurrageMainScreen'",				
				label: "USD mn",
				trendLabel: "03-Jan-18",
				kpi: {
					qStringExpression: "=vDemurrages_HomePage_Value"
				},
				trend1: {
					qStringExpression: "=vDemurrages_HomePage_TopVariation"
				},
				trend1Icon: {
					qStringExpression: "=if($(vDemurrages_HomePage_TopVariation)>=0, 'vitol-icon-kpi-up', 'vitol-icon-kpi-down')"
				},
				trend2: {
					qStringExpression: "=vDemurrages_HomePage_BottomVariation"
				},
				trend2Icon: {
					qStringExpression: "=if($(vDemurrages_HomePage_BottomVariation)>=0, 'vitol-icon-kpi-up', 'vitol-icon-kpi-down')"
				}
			}
		]
	}
}