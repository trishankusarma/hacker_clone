const features_types = {
    Stories : [
        'All',
        'Stories',
        'Comments'
     ],
   Popularity : [
        'Popularity',
        'Date'
     ],
   Time : [
       'All time',
       'Last 24h',
       'Past Week',
       'Past Month',
       'Past Year',
       'Custom range'
     ]
}

const default_labels = {
    Stories : 'Stories',
    Popularity : 'Date',
    Time : 'All time'
}

module.exports = {
    feature_list : ['Stories', 'Popularity' , 'Time'],
    features_types ,
    default_labels
}