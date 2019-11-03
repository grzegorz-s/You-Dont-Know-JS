<template>
  <section class="landing-books">
    <div class="landing-books__container">
      <div class="landing-books__content landing-books__content--small">
        <h2 class="title">Read online for free!</h2>
        <img class="landing-books__image" src="images/svg/undraw_problem_solving.svg" alt="Someone walking and reading book">
      </div>
      <div class="landing-books__content landing-books__content--wide">
        <div class="slides-swtiches">
          <button @click="nextSlide()" class="slide-switch slide-switch--next">
            <img src="images/right-arrow.png" alt="Arrow right">
          </button>
          <button @click="prevSlide()" class="slide-switch slide-switch--prev">
            <img src="images/right-arrow.png" alt="Arrow left">
          </button>
        </div>
        <div class="books js-trigger-carousel">
          <RouterLink
            v-for="(book, index) in $books"
            :key="book.key"
            :aria-label="book.title"
            :to="{ path: book.path }"
            class="book"
          >
            <div class="book__content">
            <div class="book__cover">
              <img :src="getBookCover(book.path)" class="book-cover__image" :alt="`Cover for ${book.title}`">
            </div>
            <div class="book__info">
              <p class="book__title">{{book.title}}</p>
              <ul class="chapters-list">
                <li class="chapter" v-for="chapter in book.chapters" :key="chapter.key">{{chapter.frontmatter.title}}</li>
              </ul>
            </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Siema from 'siema'
import AsyncAndPerformanceCover from '../public/images/cover_async_and_performance.jpg';
import ES6AndBeyondCover from '../public/images/cover_es6_and_beyond.jpg';
import ScopeAndClosuresCover from '../public/images/cover_scope_and_closures.jpg';
import ThisAndObjectCover from '../public/images/cover_this_and_object_prototypes.jpg';
import TypesAndGrammarCover from '../public/images/cover_types_and_grammar.jpg';
import UpAndGoingCover from '../public/images/cover_up_and_going.jpg';

export default {
  data () {
    return {
      booksCovers: {
        async_and_performance: AsyncAndPerformanceCover,
        es6_and_beyond: ES6AndBeyondCover,
        scope_and_closures: ScopeAndClosuresCover,
        this_and_object_prototypes: ThisAndObjectCover,
        types_and_grammar: TypesAndGrammarCover,
        up_and_going: UpAndGoingCover
      },
      defaultSettings: {
        selector: '.js-trigger-carousel',
        duration: 300,
        easing: 'ease',
        loop: true,
        perPage: 3,
      }
    }
  },

  mounted () {
    this.initCarousel()
  },

  beforeDestroy () {
    this.destroyCarousel()
  },

  computed: {
    getBookCover() {
      return (bookName) => {
        const key = bookName.split('/')[1];
        return this.booksCovers[key];
      }
    }
  },

  methods: {
    initCarousel () {
      this.carousel = new Siema(this.defaultSettings)
    },
    destroyCarousel () {
      const restoreOriginalMarkup = true
      this.carousel.destroy(restoreOriginalMarkup)
    },
    nextSlide () {
      this.carousel.next()
    },
    prevSlide () {
      this.carousel.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.landing-books {
  padding: 100px 0 30px;
  background: #fff;
  
  &__container {
    display: flex;
    align-items: flex-end;
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    overflow: hidden;
  }

  &__content--small {
    flex: 1;
    padding-bottom: 70px;
  }

  &__content--wide {
    position: relative;
    padding-left: 70px;
    flex: 3;
  }
}

.title {
  &#{&} {
    border-bottom: 0;
  }
}

.books {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 70px;
}

.book {
  display: block;
  position: relative;
  height: 365px;
  margin: 0 14px;
  box-shadow: 2px 5px 15px rgba(#000, .25);

  &:hover {
    .book__cover {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-60px);
    }

    .book__info {
      opacity: 1;
      visibility: visible;
      transform: translate(0);
    }
  }
}

.book__content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.book__cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 365px;
  overflow: hidden;
  transition: all ease .3s;
}

.book-cover__image {
  width: 100%;
}

.book__info {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px 30px;
  background: $c-accent-dark;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
  transition: all ease .3s;

  &::after {
    content: '';
    position: absolute;
    bottom: -320px;
    right: 0;
    left: -100px;
    width: 450px;
    height: 400px;
    background: linear-gradient(-180deg, rgba($c-accent-dark, 0.5), $c-accent-dark 18%);
    border-radius: 50%
  }
}

.book__title {
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 0;
}

.chapters-list {
  list-style: none;
  padding-left: 0;
}

.chapter {
  color: #fff;
  margin: 5px 0;
  font-weight: 300;
}

.slides-swtiches {
  position: absolute;
  bottom: 70px;
  left: 20px;
  display: flex;
  flex-direction: column;
}

.slide-switch {
  background: none;
  border: 0;
  cursor: pointer;
  outline: none;

  img {
    width: 25px;
  }

  &--prev {
    transform: scaleX(-1);
  }
}

</style>
