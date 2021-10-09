import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/rabvik.jpg";
import github from "./assets/img/icons/common/internbug.jfif";
import airbnb from "./assets/img/icons/common/sparks.png";

export const greetings = {
	name: "Anupam Saini",
	title: "Hi all, I'm Anupam",
	description:
		"A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs / MongoDb / Bootstrap and some other cool libraries and frameworks.",
	resumeLink: "./resume.pdf",
};

export const openSource = {
	githubUserName: "anupam1806",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/anupam.saini.10",
	instagram: "https://www.instagram.com/anupam.1806",
	// twitter: "https://twitter.com/1hanzla100",
	github: "https://github.com/anupam1806",
	linkedin: "https://www.linkedin.com/in/anupamsaini18/",
	gmail: "anupam.saini18@gmail.com",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Developing responsive web applications"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		// {
		// 	skillName: "sass",
		// 	fontAwesomeClassname: "logos:sass",
		// },
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		// {
		// 	skillName: "TypeScript",
		// 	fontAwesomeClassname: "logos:typescript-icon",
		// },
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		// {
		// 	skillName: "flutter",
		// 	fontAwesomeClassname: "logos:flutter",
		// },
		// {
		// 	skillName: "swift",
		// 	fontAwesomeClassname: "vscode-icons:file-type-swift",
		// },
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		// {
		// 	skillName: "sql-database",
		// 	fontAwesomeClassname: "vscode-icons:file-type-sql",
		// },
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		// {
		// 	skillName: "aws",
		// 	fontAwesomeClassname: "logos:aws",
		// },
		// {
		// 	skillName: "firebase",
		// 	fontAwesomeClassname: "logos:firebase",
		// },
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		// {
		// 	skillName: "docker",
		// 	fontAwesomeClassname: "logos:docker-icon",
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "SRM Institute of Science and Technology",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "July 2019 -  Present",
		desc: "3rd year Computer Science student",
		descBullets: [
			"Worked on various minot projects in different domains like Semiconductors, Software development, Computer networks",
			"Participated in various college events like workshops and webinars",
		],
	},
	{
		schoolName: "Seedling Public School",
		subHeader: "High School",
		duration: "	April 2017 - April 2019",
		desc: "Completed my high scholling.",
		descBullets: [
			"Won a gold medal in basketball tournament",
			"Member of Science community of school",
		],
	},
	// {
	// 	schoolName: "Stanford University",
	// 	subHeader: "Bachelor of Science in Computer Science",
	// 	duration: "September 2013 - April 2017",
	// 	desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
	// 	descBullets: [
	// 		"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
	// 	],
	// },
];

export const experience = [
	{
		role: "Full Stack developer",
		company: "Rabvik Innovations",
		companylogo: googlelogo,
		date: "July 2021 – September 2021",
		desc: "Full Stack Web Developer",
		descBullets: [
			"Building a company website from scratch",
			"Creating Forms, dashboard, SignUp, Login, User profile",
		],
	},
	{
		role: "Campus Ambassador",
		company: "Internbug",
		companylogo: github,
		date: "June 2021 – June 2021",
		desc: "Promoting comapany, Creating awarness regarding covid, Helping new interns to know more about company.",
	},
	{
		role: "Web Developer",
		company: "Sparks Foundations",
		companylogo: airbnb,
		date: "April 2021 – May 2021",
		desc: "Developing a basic banking application including feature like transfer money from one bank account to another account.",
	},
];

export const projects = [
	{
		name: "StartUp Guide",
		desc: "I worked as a full stack developer here and developed a website which can manage their expenses and funding. Also a startup will be guided accordingly.",
		link: "https://thestartupguide.herokuapp.com/",
		github: "https://github.com/rabvik-innovations/Rabvik_Innovations-2",
	},
	{
		name: "Disease predictor",
		desc: "This a an ML project which can predict a disease on basis of symptoms provided with a accuracy of 98% only if all the symptoms and provided correctly",
		link: "https://prediction-disease.herokuapp.com/",
		github: "https://github.com/anupam1806/disease-predictor",
	},
	{
		name: "Todo List",
		desc: "Todo list website in which user can add and delete items.",
		link: "https://gentle-wildwood-86117.herokuapp.com/",
		github: "https://github.com/anupam1806/Todo-List",
	},
	{
		name: "Basic Banking Site",
		desc: "It contains basic banking operations such as transfer money from one account to another account.",
		link: "https://anupam1806.github.io/Sparks-Bank/",
		github: "https://github.com/anupam1806/Sparks-Bank",
	},
	{
		name: "Google keep",
		desc: "It is a note storing web application here user can store, delete notes for future reference",
		link: "https://keep-google.herokuapp.com/",
		github: "https://github.com/anupam1806/keeper",
	},
	{
		name: "Chatting App",
		desc: "It is real time chat application in which one or more users can make a room and chat with each other, send images. It also has addtional features like when a new message arrives a notification sound come, it show online status on user icon, we can see all the images in room in photos section.",
		link: "https://app-chatting.netlify.app/",
		github: "https://github.com/anupam1806/chat-app",
	},
	{
		name: "Zoom Clone",
		desc: "It is a real time video call application in which upto 5 users can join a call and communicate which each other. It also has chat section in which users can send messages.",
		link: "https://zoom-00clone.herokuapp.com/",
		github: "https://github.com/anupam1806/zoomClone",
	},
];

export const feedbacks = [
	{
		name: "Prateek Mishra",
		feedback:
			"Mr. Anupam Saini a student of SRM University, has successfully completed two months (10th July – 9th Sept, 2021) as a Web Development-Intern. He has worked on an Online Internship Project with the Development Team of our organization.We were happy with his work and found him hardworking, punctual, and diligent. He has also portrayed leadership skills and lead the team well.We wish him all the very best"
	},
	// 
];
