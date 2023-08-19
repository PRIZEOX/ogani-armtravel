export default{
    name:'city',
    title:'City',
    type:'document',
    fields: [
        {
            name:'name',
            title: 'City name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'hotels',
            title: 'City hotels',
            type: 'array',
            of:[
                {
                    type:'reference',
                    to : [{type:'featured'}]
                }
            ]
        },
    ]
}