<template>
  <div>
    <ol>
      <li v-for="book in $books">
        <h3>{{book.title}}</h3>
        <ul>
          <li v-for="chapter in book.chapters">{{chapter.frontmatter.title}}</li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  
}
</script>