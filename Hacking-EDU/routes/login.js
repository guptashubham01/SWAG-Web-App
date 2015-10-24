
exports.login = function(req, res){
  //res.send("respond with a resource");
	var u=req.param("email");
     var p=req.param("password");

		var m=require("mysql");
	
	var c=m.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		socketPath : '/tmp/mysql.sock',
		database: 'swag',
		multipleStatements :true
	});
	
	
	c.connect();
 var t=c.query("select count(*) as count from student where s_email='"+(u)+"' and s_password='"+(p)+"'",function(err,result){
	//console.log(t.sql);	

		if(err){
			console.error(err);
	}
		else{
	 if((result[0].count)>0)
	  console.log('success');
	 
	 else
		 console.log('user not defined');
	 	 
	 }
 });
};

