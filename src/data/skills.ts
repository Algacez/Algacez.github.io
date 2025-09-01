// 技能数据配置文件
// 用于管理技能展示页面的数据

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // 相关项目ID
	certifications?: string[];
	color?: string; // 技能卡片主题色
}

export const skillsData: Skill[] = [
	// 配置https://github.com/matsuzaka-yuki/Mizuki/blob/master/src/data/skills.ts
	// Languages
	{
		id: "python",
		name: "Python",
		description: "",
		icon: "logos:python",
		category: "other",
		level: "expert",
		experience: { years: 5, months: 0 },
		color: "#3776AB",
	},
	{
		id: "cpp",
		name: "C++",
		description: "一种通用的计算机程序设计语言，用于创建可执行程序。",
		icon: "logos:c-plusplus",
		category: "other",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#00599C",
	},
	{
		id: "c",
		name: "C",
		description: "一种通用的计算机程序设计语言，用于创建可执行程序。",
		icon: "logos:c",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#A8B9CC",
	},

	// Tools
	{
		id: "github",
		name: "GitHub",
		description: "全球最大的开源社区，用于托管和分享代码。",
		icon: "logos:github-icon",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 6 },
		color: "#181717",
	},
	{
		id: "git",
		name: "Git",
		description: "分布式版本控制系统，代码管理和团队协作必备工具。",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#F05032",
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description: "轻量级但功能强大的代码编辑器，丰富的插件生态。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		id: "vscode",
		name: "VS Code",
		description: "轻量级但功能强大的代码编辑器，丰富的插件生态。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 6 },
		color: "#007ACC",
		color: "#007ACC",
	},
	{
		id: "docker",
		name: "Docker",
		description: "容器化平台，简化应用部署和环境管理。",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#2496ED",
	},
];

// 获取技能统计信息
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// 按分类获取技能
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
	return skillsData.filter((s) => s.category === category);
};

// 获取高级技能
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// 计算总经验年数
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
		months: totalMonths % 12,
	};
};

