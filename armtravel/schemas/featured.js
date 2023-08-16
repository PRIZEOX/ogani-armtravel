export default{
    name:'featured',
    title: 'Featured',
    type:'document',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Feature name',
            validation:Rule => Rule.required(),
        },
        {
            name:'desc',
            type:'string',
            title:'Short description',
            validation: Rule => Rule.max(200),
        },
        {
            name:'hotels',
            title:'Hotels',
            type:'array',
            of:[
                {
                    type:'reference',
                    to : [{type:'hotel'}]
                }
            ],
        },
    ]
}