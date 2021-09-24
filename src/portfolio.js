import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/rabvik.jpg";
import github from "./assets/img/icons/common/internbug.jfif";
import airbnb from "./assets/img/icons/common/sparks.png";

export const greetings = {
	name: "Anupam Saini",
	title: "Hi all, I'm Anupam",
	description:
		"A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs / MongoDb / Bootstrap and some other cool libraries and frameworks.",
	resumeLink: "",
};

export const openSource = {
	githubUserName: "anupam1806",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/anupam.saini.10",
	instagram: "https://www.instagram.com/anupam18",
	// twitter: "https://twitter.com/1hanzla100",
	github: "https://github.com/anupam1806",
	linkedin: "https://www.linkedin.com/in/anupamsaini18/",
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
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "h",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
