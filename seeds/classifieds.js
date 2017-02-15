'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classifieds').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('classifieds').insert({
          id:1,
          title:'Bougainvillea',
          description:'This flowering bush is enormous. Please come dig it up.',
          price:200,
          item_image:'http://cf.ltkcdn.net/garden/images/std/187241-425x319-bougainvillea.jpg',
          created_at: new Date('2016-06-26T14:26:16.000Z'),
          updated_at: new Date('2016-06-26T14:26:16.000Z')
      }),
        knex('classifieds').insert({
          id:2,
          title:'Basil',
          description:'Lots of baby basil plants for sale!',
          price:10,
          item_image:'http://breeding.rutgers.edu/wp-content/gallery/basil/5873400949_170b16b439_o.jpg',
          created_at: new Date('2016-06-26T14:26:16.000Z'),
          updated_at: new Date('2016-06-26T14:26:16.000Z')
      }),
        knex('classifieds').insert({
          id:3,
          title:'Large Tree',
          description:'You will probably need a bulldozer to bring home this tree.',
          price:1000,
          item_image:'https://www.craftsy.com/blog/wp-content/uploads/2013/04/Screen-Shot-2013-04-30-at-12.59.19-PM.png',
          created_at: new Date('2016-06-26T14:26:16.000Z'),
          updated_at: new Date('2016-06-26T14:26:16.000Z')
      }),
      knex('classifieds').insert({
        id:4,
        title:'Cactus',
        description:'Can anyone help identify this mystery cactus?',
        price:0,
        item_image:'https://s-media-cache-ak0.pinimg.com/736x/b6/2a/f0/b62af008cc05867069419faa552dbd15.jpg',
        created_at: new Date('2016-04-26T14:22:16.000Z'),
        updated_at: new Date('2016-04-26T14:22:16.000Z')
    }),
      knex('classifieds').insert({
        id:5,
        title:'Orchids',
        description:'Selling orchids for spring!',
        price:25,
        item_image:'http://westerlayorchids.dreamhosters.com/wp-content/uploads/2013/03/3-Orchids-SS.jpg',
        created_at: new Date('2016-02-26T14:26:16.000Z'),
        updated_at: new Date('2016-02-26T14:26:16.000Z')
    }),
      knex('classifieds').insert({
        id:6,
        title:'Weird Plant',
        description:'Can you identify this odd plant?',
        price:25,
        item_image:'https://s-media-cache-ak0.pinimg.com/originals/be/76/83/be76833b821261ccdd51eae1519255af.jpg',
        created_at: new Date('2016-01-26T14:26:16.000Z'),
        updated_at: new Date('2016-01-26T14:26:16.000Z')
    })
    ])
      .then(function(){
      return knex.raw(
        "SELECT setval('classifieds_id_seq', (SELECT MAX(id) FROM classifieds))"
      );
    });
    });
};
