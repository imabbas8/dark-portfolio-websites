const TimeLines = [
	{
		date: "2018 - Internship",
		experiences: [
			{
				title: "Web Developer Intern – LogixByte",
				description: "Car Wash Web App with Google Maps Integration",
			},
			{
				title: "Front-End WordPress Developer",
				description: "Envato Market",
			},
		],
	},
	{
		date: "2019 - 2022",
		experiences: [
			{
				title: "Senior Web Developer",
				description: "POS Software & Cloud Call Center (Node.js, Twilio)",
			},
			{
				title: "Full Stack Developer & Data Analyst – Freelance",
				description: "Rust Developer (APIs & Smart Contracts) – Personal/Client Projects ,Power BI & Excel Dashboard Designer – Business Clients",
			},
			{
				title: "Full Stack Developer",
				description: "Trading Applications & SaaS Platforms (Laravel, CodeIgniter)",
			},
		],
	},

	{
		date: "2022 - Continue",
		experiences: [
			{
				title: "Rust API Prototype",
				description: "Built high‑performance REST APIs in Rust for financial data processing.",
			},
			{
				title: "Solana Smart Contracts",
				description: "Experimented with decentralized applications and blockchain payments using Rust + Web3.js",
			},
			{
				title: "Customer Analytics Dashboard",
				description: "TDesigned Power BI dashboards for retail clients, integrating Python pipelines for real‑time insights.",
			},

			{
				title: "CRM Automation",
				description: "Automated customer workflows with N8N, integrated Power BI dashboards for real‑time reporting.",
			},
			{
				title: "Logistics Optimization Tool",
				description: "Python‑based analytics system to reduce delivery times and improve fleet efficiency.",
			},

			{
				title: "Text‑to‑Speech SaaS",
				description: "Built a scalable SaaS platform in Laravel with subscription management.",
			},

		],
	},
	{
		date: "2017 - 2021",
		experiences: [
			{
				title: "Bachelor’s Degree in Computer Science  ",
				description: "The Superior College, Lahore",
			},
		],
	},
];

const TimeLinesContainer = document.querySelector("#resume .timelines");

const timeLineLayout = ({ date, experiences }) => `
    <p class="timeline__date">${date}</p>
    <ul class="timeline__experiences">
        ${experiences
					.map(
						(experience) => `
            <li class="timeline__experience experience">
                <h5 class="experience__title">${experience.title}</h5>
                <p class="experience__description">${experience.description}</p>
            </li>
        `
					)
					.join(" ")}
    </ul>
`;

TimeLines.forEach((timeLine) => {
	const timeLineElement = document.createElement("div");
	timeLineElement.className = "timeline";
	timeLineElement.innerHTML = timeLineLayout(timeLine);
	TimeLinesContainer.appendChild(timeLineElement);
});
