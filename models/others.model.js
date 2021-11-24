var Promo = function(promo){

    this.promo_name       = promo.promo_name;
    this.status         = promo.status ? promo.status : 1;
  };


  Promo.findPromoById = function (id, result) {
    dbConn.query("Select * from promo where promo_id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };
    
    Promo.findAllPromos = function (result) {
    dbConn.query("Select * from promo", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('promo : ', res);
      result(null, res);
    }
    });
    };


    var Discount = function(discount){

        this.percentage       = discount.percentage;
        this.status         = discount.status ? discount.status : 1;
      };
    
    
      Discount.findDiscountById = function (id, result) {
        dbConn.query("Select * from discounts where discounts_id = ? ", id, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
        });
        };
        
        Discount.findAllDiscounts = function (result) {
        dbConn.query("Select * from discounts", function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          console.log('discounts : ', res);
          result(null, res);
        }
        });
        };

        module.exports= Promo,Discount;