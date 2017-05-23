module.exports=function(sequelize,Datatypes){
    var burgers = sequelize.define("burgers",{
        burger_name:{
            type:Datatypes.STRING,
            allownull:false
        },
        devoured:{
            type:Datatypes.BOOLEAN,
            defaultValue:false
        }

    })
    return burgers;
};