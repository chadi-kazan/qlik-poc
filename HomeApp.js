var appId = 'd58f9f96-cfe2-40db-933b-10a28ae4b376';
var homeConfig = {
  url: senseUtilities.buildUrl({ host: 'qlisenseserver/proxyapi', appId }),
  schema: qlikEngineSchema
}

let homeApp;
function connectToApp() {
	let config = Object.assign({}, homeConfig);
	var homeSession = enigma.create(config);
	homeSession.on('opened', () => console.log('We are connected'));
	homeSession.on('closed', () => console.log('The session was closed'));
	homeSession.on('suspended', (evt) => {
		console.log('The session was suspended');
		console.log(evt.initiator);
	});
	homeSession.on('notification:OnConnected', (data) => {
		console.log('onConnected event');
		console.log(data);
	});
	homeSession.on('notification:*', (eventName, data) => {
		console.log('event : ' + eventName);
		console.log(data);
	});
	homeSession.on('traffic:*', (direction, msg) => {
		console.log('trafic : ' + direction);
		console.log(direction, msg);
	});
	homeSession.open().then(qlik=>{
		console.log('socket open');
	  qlik.openDoc(appId).then(app=>{
		 console.log("Connected to Home App");
		 homeApp = app;
	  })
	})
}


function initializeDashboardKPIs(itemId, def){
	console.log(def);
	connectToApp();
	if(homeApp){
		homeApp.createSessionObject(def).then(function(model){
			model.addListener("changed", renderDashboardKPIs.bind(this, model))
			dashboardItems[itemId].models.push(model)
			renderDashboardKPIs(model)
		})
	}
}

function renderDashboardKPIs(model){
	model.getLayout().then(function(layout){
		for(var i=0;i<layout.KPIs.length;i++){
			var kpi = new WebsyKPI(layout.KPIs[i].elementId)
			kpi.render(layout.KPIs[i])
		}
	})
}





