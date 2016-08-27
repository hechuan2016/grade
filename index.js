studentScore = {
	score: "" ,
	init: function(){
		this. getScore() ;
	},
	getScore: function(){
		var scoreValue = document. getElementById("studentScore") ;
		var scoreBtn = document. getElementById("checkScore") ;
		scoreBtn.onclick = function(){
			studentScore. score = scoreValue. value ;
			if (studentScore. score == ""){
				// 尚未输入成绩的情况；
				studentScore. _finalScore("你尚未输入成绩，请重新输入！") ;
				return 0 ;
			}else{
				// studentScore. _calculate() ;
				// studentScore. _calculateTwo() ;
				studentScore. _calculateThree() ;
			}
		};
	},
	//方法一：switch语句来实现；
	_calculate: function(){
		var score = studentScore. score ; // 输入参数，用switch语句来做判断；
		switch(true){
			case score>90 && score<=100 :
			studentScore. _finalScore("一等生") ;
			break ;
			case score>80 && score <= 90 :
			studentScore. _finalScore("二等生") ;
			break ;
			case score>70 && score <= 80 :
			studentScore. _finalScore("三等生") ;
			break ;
			case score>60 && score <= 70 :
			studentScore. _finalScore("四等生") ;
			break ;
			case score>50 && score <= 60 :
			studentScore. _finalScore("五等生") ;
			break ;
			case score>40 && score <= 50 :
			studentScore. _finalScore("六等生") ;
			break ;
			case score>30 && score <= 40 :
			studentScore. _finalScore("七等生") ;
			break ;
			case score>20 && score <= 30 :
			studentScore. _finalScore("八等生") ;
			break ;
			case score>10 && score <= 20 :
			studentScore. _finalScore("九等生") ;
			break ;
			case score>0 && score <= 10 :
			studentScore. _finalScore("差生") ;
			break ;
			default: 
			studentScore. _finalScore("请输入0到100的数字！") ;
			break ;
		}
	},
	// 方法二：用if语句来实现；
	_calculateTwo: function(){
		var score = studentScore. score ; 
		if (score>90 && score<=100){
			studentScore. _finalScore("一等生") ;
		}else if(score>80 && score<=90){
			studentScore. _finalScore("二等生") ;
		}else if(score>70 && score<=80){
			studentScore. _finalScore("三等生") ;
		}else if(score>60 && score<=70){
			studentScore. _finalScore("四等生") ;
		}else if(score>50 && score<=60){
			studentScore. _finalScore("五等生") ;
		}else if(score>40 && score<=50){
			studentScore. _finalScore("六等生") ;
		}else if(score>30 && score<=40){
			studentScore. _finalScore("七等生") ;
		}else if(score>20 && score<=30){
			studentScore. _finalScore("八等生") ;
		}else if(score>10 && score<=20){
			studentScore. _finalScore("九等生") ;
		}else if(score>0 && score<=10){
			studentScore. _finalScore("差生") ;
		}else{
			studentScore. _finalScore("请输入0到100的数字！") ;
		}
	},
	// 方法三：
	_calculateThree: function(){
		var score = studentScore. score ; 
		var rank = null ;
		if (score>=0 && score<=100) {
			rank = 10 - Math. floor(score/10) ;
			rank +="等生" ;
		}else{
			rank = "请输入0到100的数字！" ;
		}
		this. _finalScore(rank) ;
	},

	_finalScore: function(str){
		var finalScore = document. getElementById("finalScore") ;
		finalScore. innerHTML = str ;
	}
};

(function(){
	studentScore. init() ;
})() ;