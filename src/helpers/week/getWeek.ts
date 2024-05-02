export const getWeekDates = (year: number, month: number, week: number) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const firstDay = new Date(firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (week - 1) * 7));
    const lastDay = new Date(firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 6));
    return [firstDay, lastDay];
};

export function getStartDateOfWeek(weekNumber: number, month: number, year: number): Date {
    const januaryFirst = new Date(year, 0, 1);
    const firstDay = januaryFirst.getDay();
    const baseDate = new Date(year, month - 1, 1); // Restar 1 porque los meses son 0-indexados
    const dayOffset = (firstDay === 0 ? 7 : firstDay) - 1;
    const startDate = new Date(baseDate);
    startDate.setDate(-dayOffset + 7 * (weekNumber - 1) + 1);
    return startDate;
}

// Función para obtener la fecha de fin de una semana específica
export function getEndDateOfWeek(weekNumber: number, month: number, year: number): Date {
    const startDate = getStartDateOfWeek(weekNumber, month, year);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    return endDate;
}