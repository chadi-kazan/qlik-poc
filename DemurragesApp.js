var demurrageAppId = 'a5bd7be8-539e-4940-9d4f-600b5f895cc7';
var demurragesConfig = {
  url: "wss://qlisenseserver/app/"+demurrageAppId,
  schema: qlikEngineSchema
}

var demurragesSession = enigma.create(demurragesConfig)
/*demurragesSession.open().then(qlik=>{
  qlik.openDoc(demurrageAppId).then(app=>{
	 console.log("Connected to Demurrages App")
	 appList["DemurrageApp"] = app
  })
})*/