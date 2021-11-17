let test = [
    {id: 1, favourited: false, number: "5656262614848", balance: 45522.62},
    {id: 2, favourited: false, number: "8996666565655", balance: 42.62},
    {id: 3, favourited: false, number: "8996666565655", balance: 42.62},
    {id: 4, favourited: true, number: "5656262614846", balance: 0.0},
    {id: 5, favourited: true, number: "5656262614846", balance: 0.0},
    {id: 6, favourited: false, number: "5656262614844", balance: 17.5},
    {id: 7, favourited: false, number: "5656262614844", balance: 17.5}
];

/**
 * Метод генерации постраничного ответа
 */
export const generatePagination = (currentPage, size) => {
    return {
        data: test.slice(size * (currentPage - 1), Math.min(test.length, size * (currentPage - 1) + size)),
        totalCount: test.length
    }
}


