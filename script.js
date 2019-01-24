$(".nav-item").on("click", function(){
  $(".nav-item").removeClass("active")
  $(this).addClass("active")
  $(".vitol-sheet").removeClass("active")
  let sheetId = $(this).attr("data-sheet")
  $(`${sheetId}Sheet`).addClass("active")
})

var dashboardItems = {
	dashboardOverview: {
      initialized: false,
      setup: initializeDashboardKPIs.bind(this, "dashboardOverview", homeItems.dashboardKPIs),
      update: renderDashboardKPIs,
      active: false,
      models: []
    },
	varScreen: {
      initialized: false,
      setup: initializeItems.bind(this, VaRItems.main, "VaRApp"),
      update: updateItems.bind(this, "varScreen"),
      active: false
    },
	demurrageMainScreen: {
	  initialized: false,
      setup: initializeItems.bind(this, DemurrageItems.main, "DemurrageApp"),
      update: updateItems.bind(this, "demurrageMainScreen"),
      active: false,
      items: DemurrageItems.main
	}
}

var objList = {}

function getApiTicket() {
  return new Promise((resolve, reject) => {
      fetch('https://qlisenseserver/proxyapi/resources/assets/external/requirejs/require.js', {method: 'GET', mode: 'cors', redirect: 'follow'}).then(res => {
        window._apiticket = res.url.split('=')[1];
        resolve(window._apiticket);
    }).catch(err => reject(err));
  });
}

function startApp() {
  $(document).on("click", ".vitol-navigator", function(){
    $(".vitol-sheet-child").removeClass("active");
    let dashboardItem = dashboardItems[$(this).attr("data-element")]
    if(!dashboardItem.initialized){
      dashboardItem.initialized = true
      dashboardItem.setup()
    }
    else {
      for (var i = 0; i < dashboardItem.models.length; i++) {
        dashboardItems[i].update(dashboardItem.models[i])
      }
    }
    $("#"+$(this).attr("data-element")).addClass("active")
  })
  $(document).on("click", ".vitol-filter-button", function(){
    var model = objList[$(this).attr("data-elemId")]
    var elemNum = $(this).attr("data-elemno")
    if(model && elemNum){
    if(elemNum==-1){
      model.model.clearSelections()
    }
    else{
      model.model.selectListObjectValues("/qListObjectDef", [parseInt(elemNum)], false)  
    }
    }
  });
}

$(document).ready(function(){
  getApiTicket().then(apiTicket => {
    fetch('https://qlisenseserver/proxyapi/resources/img/core/dark_noise_16x16.png?qlikTicket=' + apiTicket, {
    method: 'GET',
    mode: 'cors'
  }).then(res => {
    console.log(res);
    startApp();
  });
  }).catch(err => {
    console.error(err);
  });
});



