export default {
    name: 'hotel',
    type: 'document',
      title: 'Hotel',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of hotel',
        validation: Rule => Rule.required()
      },
      {
        name:'hotel_image',
        type: 'image',
        title:'Main hotel image',
      },
      {
        name:'assets',
        type:'array',
        of: [{type:'image'}]
      },
      {
        name: 'description',
        type:'string',
        title:'Short description',
        validation: Rule=> Rule.max(200)
      },
      {
        name:'adres',
        type:'string',
        title:'Street adres',
      },
      {
        name: 'rate',
        type: 'number',
        title: 'Rate of hotel',
        validation: Rule => Rule.min(1).max(5).required().error('Enter a value between 1 and 5'),
      },
      {
        name:'cost',
        type:'number',
        title:'Cost per day',
        validation:Rule => Rule.positive(),
      },
      {
        name:'room_count',
        type:'number',
        title:'Rooms count',
        validation: Rule => Rule.min(1),
      },
      {
        name:'square',
        type: 'number',
        title: 'Square of hotel',
      },
    ]
  }
  