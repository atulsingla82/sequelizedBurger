module.exports = function (sequelize, Datatypes) {
    var Burgers = sequelize.define("Burgers", {
            burger_name: {
                type: Datatypes.STRING,
                allownull: false
            },
            devoured: {
                type: Datatypes.BOOLEAN,
                defaultValue: false
            }
        // }
        // {
        //     classMethods: {
        //
        //         associate: function (models) {
        //
        //             Burgers.belongsTo(models.Customer, {
        //                 foreignKey: {
        //
        //                     allowNull: false
        //                 }
        //
        //             });
        //         }
        //     }



}
)
return Burgers;
};