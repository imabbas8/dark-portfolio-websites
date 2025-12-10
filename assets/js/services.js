const Services = [
	{
		name: "Full Stack Development",
		description:
			"Backend: PHP (Laravel, CodeIgniter, CakePHP), Node.js, Rust,Frontend: React.js, JavaScript, TypeScript, jQuery ,Building scalable, secure, and user‑friendly web applications",
		projectsCount: 24,
		icon: '<i class="fa-solid fa-code fa-fw icon"></i>',
	},
	{
		name: "Data Analytics & Machine Learning",
		description:
			"Python, Power BI, Excel (dashboards, reporting, predictive analytics) Customer segmentation, sales forecasting, churn prediction NLP sentiment analysis and automation pipelines",
		projectsCount: 24,
		icon: '<i class="fa-solid fa-code fa-fw icon"></i>',
	},
	{
		name: "Blockchain & Web3",
		description:
			"Solana, Web3.js, Smart Contracts dApps development and blockchain payment integrations",
		projectsCount: 24,
		icon: '<i class="fa-solid fa-code fa-fw icon"></i>',
	}
	,
	{
		name: "Business Intelligence & Automation",
		description:
			"Power BI dashboards for real‑time insights Automated Excel reporting with advanced formulas and macros Workflow automation using N8N + Python",
		projectsCount: 24,
		icon: '<i class="fa-solid fa-code fa-fw icon"></i>',
	}
	,
	{
		name: "System Design & Optimization",
		description:
			"Database management: MySQL, MongoDB Linux server administration and Git version control Performance optimization and scalable architecture",
		projectsCount: 24,
		icon: '<i class="fa-solid fa-code fa-fw icon"></i>',
	}
	
];

const servicesContainer = document.querySelector(
	"#services .services__wrapper"
);

const serviceLayout = ({ name, description, projectsCount, icon }) => `
	<h4 class="service__name">${name}</h4>
	<p class="service__description">${description}</p>
	<span class="service__projects">${projectsCount} Project${
	projectsCount > 1 ? "s" : ""
}</span>
	${icon}
`;

Services.forEach((service) => {
	const serviceElement = document.createElement("div");
	serviceElement.className = "service";
	serviceElement.innerHTML = serviceLayout(service);
	servicesContainer.appendChild(serviceElement);
});
