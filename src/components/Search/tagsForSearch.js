const tagsForSearch = {
    Stories : {
         'All' : '',
         'Stories' : 'story',
         'Comments' : 'comment'
    },
    Time : {
        'All time' : '',
        'Last 24h' : `created_at_i>=${(Date.now() - 24*60*60*1000)/1000}`,
        'Past Week' : `created_at_i>=${(Date.now() - 7*24*60*60*1000)/1000}`,
        'Past Month' : `created_at_i>=${(Date.now() - 30*24*60*60*1000)/1000}`,
        'Past Year' : `created_at_i>=${(Date.now() - 365*24*60*60*1000)/1000}`,
        'Custom range' : ''
    }
}

module.exports = tagsForSearch