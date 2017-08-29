//Requerimos el modelo  de usuarios
var User = require('./user.model.js');

module.exports.save = function(req,res){ //exporta el controlador
        var newUser = new User({
          playerID:req.body.playerID,
          name:req.body.name,
          alias:req.body.alias,
          money:req.body.money,
          photo:req.body.photo,
          property:req.body.property,
          bio:req.body.bio
        });

        newUser.save(function(err){
          if(err){
            res.json({success:false,msg:'El correo electrónico ya ha sido utilizado.'});
          }else {
            res.json({success:true,msg:'Registro exitoso.'});
          }
        });
}

module.exports.findAll = function(req,res){
  User.find().then(function(users){
    res.send(users);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  User.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){

  User.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, user) {
    if (err){
      res.json({success:true,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });



}
