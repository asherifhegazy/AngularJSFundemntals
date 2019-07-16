var fs = require('fs');

module.exports.get = function(req, res) {
    var path = 'app/data/user/' + req.params.userName + '.json';
    fs.access(path,fs.F_OK,(err)=>{
       if(!err){
           var user = fs.readFileSync(path, 'utf8');
           res.setHeader('Content-Type', 'application/json');
           res.send(user);
           return;
       }
       else {
           res.setHeader('Content-Type', 'application/json');
           res.send();
           return;
       }
    });
};

module.exports.save = function(req, res) {
    var user = req.body;
    fs.writeFileSync('app/data/user/' + req.params.userName + '.json', JSON.stringify(user));
    res.send(user);
};
