define({ 
  __ascending:true,
  __prevArrow:null,
  methodNavigation:function(params){
    var ntf = new kony.mvc.Navigation("FormResponsiveDetails");
    ntf.navigate(this.view.segTable.data[params]);
  },
  sortArrowClicked:function(sorterId){
    var idNumber = sorterId[sorterId.length - 1];
    var keyToSort = null;
    switch(idNumber){
      case "1" : keyToSort = "lblHeaderName";break;
      case "2" : keyToSort = "lblHeaderModel";break;
      case "3" : keyToSort = "lblHeaderPrice";break;
      case "4" : keyToSort = "lblHeaderQuantity";break;
      default: keyToSort = null;
    }
    if(this.__prevArrow!==null){
      this.view[this.__prevArrow].src = "sort_arrows_couple_pointing_up_and_down.png";
    }
    if(this.__ascending){
      this.view["imgSorter"+idNumber].src = "down.png";
    }else{
      this.view["imgSorter"+idNumber].src = "up.png";
    }
    this.__prevArrow = sorterId;
    this.sortByKey(keyToSort);
  },
  sortByKey:function(keyToSort){
    var segData = JSON.parse(JSON.stringify(this.view.segTable.data));
    //var sortedData = segData[0][1].sort(function(a, b) {
    var sortedData = segData.sort(function(a, b) {
      var x = a[keyToSort]; var y = b[keyToSort];
      if(this.__ascending){
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }else{
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      }
    }.bind(this));
    this.__ascending = !this.__ascending;
    //segData[0][1] = sortedData;
    segData = sortedData;
    this.view.segTable.setData(segData);
    this.view.forceLayout();
  }
});