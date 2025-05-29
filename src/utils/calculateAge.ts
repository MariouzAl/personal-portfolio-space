export const calculateAge = (date: Date): string => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age === 0) {
        const month = today.getMonth() - birthDate.getMonth();
        const day = today.getDate() - birthDate.getDate();
        if (month < 0 || (month === 0 && day < 0)) {
            return `${-month} months`;
        }
        if (day < 0) {
            return `${-month - 1} months`;
        }
        return `${month} months`;
    }
    return `${age} years`;
};
