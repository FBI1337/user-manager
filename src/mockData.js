export const generateUsers = (count) => {

    const departments = ["ИТ", "HR", "Финансы", "Маркетинг", "Продажи", "Разработка", "Обслуживание клиентов"]
    const companies = ["TechCorp", "Business Ltd", "Global Inc", "SoftDev", "Creative Solutions"]
    const jobTitles = ["Программист", "Менеджер по персоналу", "Бухгалтер", "Специалист по маркетингу", "Менеджер по продажам", "Системный администратор", "Менеджер по обслуживанию клиентов"]

    return Array.from({ length: count}, (_, i) => ({
        id: i,
        name: `Пользователь ${i + 1}`,
        department: departments[Math.floor(Math.random() * departments.length)],
        company: companies[Math.floor(Math.random() * companies.length)],
        jobTitle: jobTitles[Math.floor(Math.random() * jobTitles.length)],
    }));
};