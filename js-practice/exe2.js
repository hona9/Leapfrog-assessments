var obj = {
    'name': 'Bishal Hona',
    'address': 'Bhaktapur',
    'emails': 'abc@zyx.com',
    'interests': 'coding',
    'education': [{
        'name': 'KCT',
        'enrolledDate': '2017'
    },
    {
        'name': 'leapfrog',
        'enrolledDate': '2021'
    }
]
}

obj.education.forEach(function(element) {
    console.log(`Name: ${element.name}, Date: ${element.enrolledDate}`); 
});