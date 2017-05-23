module.exports = function(sequelize, Datatypes) {

    var Customer = sequelize.define("Customer", {

            name: Datatypes.STRING

        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models

        {
            classMethods: {
                associate: function(models) {

        Customer.hasMany(models.Burgers, {
            onDelete: "cascade"


        });

    }

}


}


    );

    return Customer;
};