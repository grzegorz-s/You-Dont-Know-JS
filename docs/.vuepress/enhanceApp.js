const dataMixin = {
  computed: {
    $books() {
      const books = this.$site.pages && this.$site.pages.filter(page =>
        page.frontmatter.layout === 'book'
      );

      const chapters = this.$site.pages && this.$site.pages.filter(page =>
        page.frontmatter.layout === 'chapter'
      );

      const enhancedBooks = books.map(book => {
        const bookKey = book.path.split('/')[1];
        let testBooks = [];

        chapters.find((chapter) => {
          const chapterKey = chapter.path.split('/')[1];
          if (chapterKey === bookKey) {
            testBooks.push(chapter)
          }
        });

        const sortedBooks = testBooks.sort((a, b) => (a.frontmatter.chapter > b.frontmatter.chapter) ? 1 : -1)

        return book = {
          ...book,
          chapters: sortedBooks

        }
      });

      const sortedBooks = enhancedBooks.sort((a, b) => (a.frontmatter.order > b.frontmatter.order) ? 1 : -1)

      return sortedBooks;
    }
  }
}

export default ({ Vue, options }) => {
  Vue.mixin(dataMixin)
}
