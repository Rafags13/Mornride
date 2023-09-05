export function convertCaterogiesToLabel(categories: string[]) {
    if (categories.length === 1) return categories[0];

    return categories.join(', ');
}

export function convertNumberFromTwoDecimals(value: number): string {
    return value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
}