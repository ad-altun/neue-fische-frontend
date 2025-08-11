
export function PublishDate(publishedAt: string) {

    const dateFormatted: Date = new Date(publishedAt);
    const month: number = dateFormatted.getMonth();
    const day: number = dateFormatted.getDay();
    const year: number = dateFormatted.getFullYear();

    return {
        month, day, year
    };

}