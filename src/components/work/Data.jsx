import Work1 from '../../assets/work1-1.png'
import Work2 from '../../assets/work1-2.png'
import Work3 from '../../assets/work1-3.png'
import Work4 from '../../assets/work1-4.png'
import Work5 from '../../assets/work1-5.png'
import Work6 from '../../assets/work1-6.png'
import Work7 from '../../assets/work2-1.png'
import Work8 from '../../assets/work2-2.png'
import Work9 from '../../assets/work2-3.png'
import Work10 from '../../assets/work3-1.png'
import Work11 from '../../assets/work3-2.png'
import Work12 from '../../assets/work3-3.png'
import Work13 from '../../assets/work3-4.png'






export const projectsData = [
    {
        id: 1,
        image: [Work1, Work2, Work3, Work4, Work5, Work6],
        title: "Outfit Forecast",
        category: "Outfit Forecast",
        githubLink: "https://github.com/AdrianaIaffa/sei-75-frontend",
        blurb: "Completed a one-week solo project inspired by the film 'Clueless', where I designed an app for cataloguing clothes as well as creating new outfit ideas. Developed my first full-stack CRUD website using Node.js, Express, MongoDB, and Vue. This project marked my introduction to the intricacies of a full-stack application."
    },
    {
        id: 2,
        image:[Work7, Work8, Work9],
        title: "The Book Club",
        category: "The Book Club",
        githubLink: "https://github.com/AdrianaIaffa/bookclub-frontend",
        blurb: "Developed a Book Club website Using Django, Django REST framework, React and PostrgeSQL allowing users to initiate discussions about their favourite books."
    },
    {
        id: 3,
        image: [Work10, Work11, Work12, Work13],
        title: "Tracktive",
        category: "Tracktive",
        githubLink: "https://github.com/AdrianaIaffa/fitness-app",
        blurb: "Collaborated on a one-week group project with two other developers. We created a fitness tool, tracking workout progress and diet. Took ownership of both Backend and Frontend for the workout tracker in this full-stack CRUD application using Node.js, Express, MongoDB, and Next.js. First exposure to React and experience in using GitHub forking branches and handling merges."
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Outfit Forecast",
    },
    {
        name: "The Book Club",
    },
    {
        name: "Tracktive",
    },
];