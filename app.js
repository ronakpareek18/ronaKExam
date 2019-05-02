var expr=require('express');
var app = expr();

app.use(expr.static(__dirname + '/public'));
app.use(expr.static(__dirname + '/private'));

app.get('/',(reg, res) => {
    //res.send('<h1>This is our first!</h1>');
	var obj={
	//'name':'ronak',
	// 'Section':'100'
	'introduction':'my name is ronak',
	
}
res.send(obj);
});

app.get('/introduction',(reg,res)=>{
res.send("my course is ronak");

});

app.get('/course',(reg,res)=>{
res.send("my course is bca");

});

app.get('/grades',(reg,res)=>{
res.send("my total cgpa is 7");
});

app.get('/marks',(reg,res)=>{
res.send("english:80 python:90");
});

app.get('/attendance',(reg,res)=>{
res.send("english:80 python:90 nodejs:85 web development:88");
});

app.listen(3000);