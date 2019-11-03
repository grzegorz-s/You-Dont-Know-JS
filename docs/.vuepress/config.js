module.exports = {
  title: "You Don't Know JS",
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],
  themeConfig: {
    smoothScroll: true,
    sidebar: [
      {
        title: 'Up & Going',
        path: '/up_and_going/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/up_and_going/foreword.md',
          '/up_and_going/ch1.md',
          '/up_and_going/ch2.md',
          '/up_and_going/ch3.md',
          '/up_and_going/apA.md',
        ]
      },
      {
        title: 'Scope & Closures',
        path: '/scope_and_closures/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/scope_and_closures/ch1.md',
          '/scope_and_closures/ch2.md',
          '/scope_and_closures/ch3.md',
          '/scope_and_closures/ch4.md',
          '/scope_and_closures/ch5.md',
          '/scope_and_closures/apA.md',
          '/scope_and_closures/apB.md',
          '/scope_and_closures/apC.md',
          '/scope_and_closures/apD.md',
        ]
      },
      {
        title: 'this & Object Prototypes',
        path: '/this_and_object_prototypes/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/this_and_object_prototypes/foreword.md',
          '/this_and_object_prototypes/ch1.md',
          '/this_and_object_prototypes/ch2.md',
          '/this_and_object_prototypes/ch3.md',
          '/this_and_object_prototypes/ch4.md',
          '/this_and_object_prototypes/ch5.md',
          '/this_and_object_prototypes/ch6.md',
          '/this_and_object_prototypes/apA.md',
          '/this_and_object_prototypes/apB.md',
        ]
      },
      {
        title: 'Types & Grammar',
        path: '/types_and_grammar/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/types_and_grammar/foreword.md',
          '/types_and_grammar/ch1.md',
          '/types_and_grammar/ch2.md',
          '/types_and_grammar/ch3.md',
          '/types_and_grammar/ch4.md',
          '/types_and_grammar/ch5.md',
          '/types_and_grammar/apA.md',
          '/types_and_grammar/apB.md',
        ]
      },
      {
        title: 'Async & Performance',
        path: '/async_and_performance/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/async_and_performance/foreword.md',
          '/async_and_performance/ch1.md',
          '/async_and_performance/ch2.md',
          '/async_and_performance/ch3.md',
          '/async_and_performance/ch4.md',
          '/async_and_performance/ch5.md',
          '/async_and_performance/ch6.md',
          '/async_and_performance/apA.md',
          '/async_and_performance/apB.md',
          '/async_and_performance/apC.md',
        ]
      },
      {
        title: 'ES6 & Beyond',
        path: '/es6_and_beyond/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/es6_and_beyond/foreword.md',
          '/es6_and_beyond/ch1.md',
          '/es6_and_beyond/ch2.md',
          '/es6_and_beyond/ch3.md',
          '/es6_and_beyond/ch4.md',
          '/es6_and_beyond/ch5.md',
          '/es6_and_beyond/ch6.md',
          '/es6_and_beyond/ch7.md',
          '/es6_and_beyond/ch8.md',
          '/es6_and_beyond/apA.md',
        ]
      }
    ]
  }
}