define({ 

  onNavigate(context,isBackNavigation){
    try
      {
        this.view.lblModel.text = context.lblHeaderModel;
    this.view.lblProductName.text = context.lblHeaderName;
    this.view.lblQuantityValue.text = context.lblHeaderQuantity;
    this.view.lblPriceValue.text = context.lblHeaderPrice;
    this.shuffle(this.view.Segment0bc1f1082ab6946.data);
      }
    catch(exception)
      {
        
      }
  },
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  } });