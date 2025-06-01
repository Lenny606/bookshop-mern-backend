export function createDTOsFromResponse(books){
    const DEFAULT_BOOK_DTO = {
        title: '',
        description: '',
        category: '',
        coverImage: '',
        trending: true,
        oldPrice: 0,
        newPrice: 0,
        slug: '',
        publisher: '',
        ISBN: '',
        pages: '',
        notes: [],
        createdAt: new Date()
    };

    return books.map(book => {
        const price = Math.floor(Math.random() * 100000);

        return {
            ...DEFAULT_BOOK_DTO,
            title: book.Title ?? '',
            description: book.description ?? '...',
            category: book.category ?? 'king',
            coverImage: book.coverImage ?? 'placeholder.jpg',
            newPrice: price,
            oldPrice: price,
            slug: book.handle ?? '',
            publisher: book.Publisher ?? '',
            ISBN: book.ISBN ?? '',
            pages: book.Pages ?? '',
            notes: book.Notes ?? []
        };
    });


}