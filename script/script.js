const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0,range_width.length - 2)

    const num_label_width = +label_width.substring(0,label_width.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`

    label.innerHTML = value

})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }




//review
const  testimonialsContainer = document.querySelector('.testimonial-container')
const  testimonial = document.querySelector('.testimonial')
const  userImage = document.querySelector('.user-image')
const  username = document.querySelector('.username')
const  role = document.querySelector('.role')

const testimonials = [
    {
      name: 'Mariagoretti Kimani',
      position: 'Marketing',
    //   photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      text:
        "I recently ordered a cake from JulznTabs, and I was blown away by the taste and presentation! The cake was moist, flavorful, and absolutely delicious. Not to mention, it looked like a work of art. I highly recommend their cakes for any special occasion!",
    },
    {
      name: 'Angela Adisa',
      position: 'Software Engineer',
    //   photo: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80',
      text:
        "I had such a wonderful experience at JulznTabs. The staff was incredibly friendly and helpful in assisting me with my cake order. They listened to my preferences and provided valuable suggestions. The level of customer service was exceptional, and I will definitely be a repeat customer!",
    },
    {
      name: 'Snaida Mary',
      position: 'Web Designer',
    //   photo: 'https://images.unsplash.com/photo-1524159730786-4e74a1b78d7d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
      text:
      "I wanted a unique cake for my daughter's birthday, and JulznTabs did an amazing job! They perfectly captured the theme and created a cake that exceeded my expectations. The attention to detail and the intricate designs were simply breathtaking. Thank you for making our celebration extra special!.",
    },
    {
      name: 'Esther Mwangi',
      position: 'Receptionist',
    //   photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
      text:
        "What sets JulznTabz apart is their commitment to using only the finest ingredients. The cake I ordered tasted incredibly fresh, and you could tell that every ingredient used was of the highest quality. It's refreshing to find a cake shop that prioritizes both flavor and ingredient excellence.!",
    },
    {
      name: 'Ann Aketch',
      position: 'Teacher',
    //   photo: 'https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
      text:
        "Not only did JulznTabz deliver an exquisite cake, but they also provided great value for money. The quality and taste of their cakes exceeded my expectations, and the prices were reasonable. You get so much more than what you pay for, and I highly recommend them for any cake-related needs.",
    },
    {
      name: 'Mary Apiu',
      position: 'Accountant',
    //   photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      text:
      "If you're looking for a cake shop with a wide range of options, JulznTabz is the place to go. They offer an incredible variety of flavors, fillings, and designs to choose from. Their creative cake designs are truly unique and will make your event one to remember. I'm always excited to see what they come up with next!"
    },
    {
      name: 'Gloria Lado',
      position: 'Doctor',
    //   photo: 'https://images.unsplash.com/photo-1545133875-55b651cbf4aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=375&q=80',
      text:
      "I opted for delivery from JulznTabz, and I was impressed by their professionalism and punctuality. The cake arrived on time and in perfect condition. The delivery person was courteous and handled the cake with care. It was a stress-free experience, and I will definitely be ordering from them again."
    },
  ]

  let idx = 1

  function updadeTestimonial(){
      const {name, position, photo, text } = testimonials[idx]

      testimonial.innerHTML = text
      userImage.src = photo
      username.innerHTML = name
      role.innerHTML = position

      idx++

      if(idx > testimonials.length - 1){
          idx = 0
      }
  }

setInterval(updadeTestimonial, 10000)







