
var allQuestions = [
	{
		 question: "Who is Prime Minister of the United Kingdom?",
     choices: [
        "David Cameron",
        "Gordon Brown",
        "Winston Churchill",
        "Tony Blair"
      ],
     correctAnswer: 0
	},
	{
		question: "希腊政府2月21日发布消息说，在该国北方地区的死野天鹅体内又发现了7个感染了H5N1型禽流感病毒的病例。根据世界卫生组织截至22日的统计，自本月1日起，欧、亚、非三大洲13个国家首次报告在其境内发生禽流感，该组织就此发出警告，禽流感病毒随候鸟迁徙正在全球扩散，防控形势严峻。  禽流感的传播现状一直是所有人关注的事情。经研究发现由禽鸟带给人类的禽流感病毒有三种类型：甲型H5N1、甲型H7N7、甲型H9N2。下列说法不正确的是",
		choices: [
				"细胞免疫对消灭禽流感病毒有一定作用",
				"体液免疫对消灭禽流感病毒有一定作用",
				"人体通过效应B细胞和效应T细胞产生抗体抵抗病原体",
				"禽流感病毒的抗原特异性由衣壳粒直接决定",
				"None"
			],
		correctAnswer: 1
	},
	{
		question: "下列细胞器在其生命活动过程中均可产生水的是 \
		①核糖体  ②叶绿体  ③中心体  ④线粒体 ",
		choices: [
			"①②④",
			"④",
			"②④",
			"③④"
		],
		correctAnswer:3
	},
	{
		question: "下列实验操作中错误的是（  ） ",
		choices: [
			"分液时，分液漏斗中下层液体从下口放出，上层液体从上口倒出",
			"蒸馏时，应使温度计水银球靠近蒸馏烧瓶支管口 ",
			"滴定时，左手控制滴定管活塞，右手握持锥形瓶，边滴边振荡，眼睛注视滴定管中的液面",
			"称量时，称量物置于托盘天平的左盘，砝码放在托盘天平的右盘中"
		],
		correctAnswer: 2
	},
	{
		question: "下列各组溶液，只要用试管和胶头滴管，不用任何其他试剂就可以鉴别的是（ ）",
		choices: [
			"KOH和Al2(SO4)3",
			"稀H2SO4和NaHCO3",
			"CaCl2和Na2CO3",
			"Ba(OH)2和NaHSO4"
		],
		correctAnswer: 3
	}
];

//add question
var question_tag = document.getElementById("question");
var now_stuff = allQuestions[0];
question_tag.innerHTML = now_stuff.question;

//add answer
var answer = document.getElementById("choices");
var input = new Array(null);
for(var i=0; i<now_stuff.choices.length; i++){
	input[i] = document.createElement("input");
	input[i].type = "radio";
	input[i].name = "choice";
	input[i].value = "test";
	input[i].id = "radio" + i.toString();
	var lable = document.createElement("lable");
	lable.htmlFor = input[i].id;
	lable.innerHTML = now_stuff.choices[i];
	answer.appendChild(input[i]);
	var br = document.createElement("br");
	answer.appendChild(lable);
	answer.appendChild(br);
}

var j = 1;
function showNext(){
	if (j < allQuestions.length) {
		//remove child
		var answer = document.getElementById("choices");
		while(answer.firstChild){
			answer.removeChild(answer.firstChild);
		}

		if (j < allQuestions.length) {
			//add question
			var question_tag = document.getElementById("question");
			var now_stuff = allQuestions[j];
			question_tag.innerHTML = now_stuff.question;

			//add answer
			//var answer = document.getElementById("choices");
			var input = new Array(null);
			for(var i=0; i<now_stuff.choices.length; i++){
				input[i] = document.createElement("input");
				input[i].type = "radio";
				input[i].name = "choice";
				input[i].value = "test";
				input[i].id = "radio" + i.toString();
				var lable = document.createElement("lable");
				lable.htmlFor = input[i].id;
				lable.innerHTML = now_stuff.choices[i];
				answer.appendChild(input[i]);
				var br = document.createElement("br");
				answer.appendChild(lable);
				answer.appendChild(br);
			}
		}
		j++;
		if (j == allQuestions.length) {
			var next_button = document.getElementById("next");
			next_button.value = "submit";
		}
	}
}





