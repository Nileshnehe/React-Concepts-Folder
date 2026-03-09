import Card from './components/Card'

const App = () => {
  const users = [
        {
    id: 1,
    price: '$44/hr',
    img: "https://images.unsplash.com/photo-1684272672218-49205e315a03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: 'Rahul Sharma',
    role: 'Frontend Developer',
    type: 'Freelancer',
    skills: ['JS', 'Python', 'CPP', '+2'],
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    price: '$55/hr',
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: 'Amit Kumar',
    role: 'Backend Developer',
    type: 'Freelancer',
    skills: ['Node.js', 'MongoDB', 'Express', '+1'],
    desc: 'Experienced backend developer with expertise in APIs.',
  },
  {
    id: 3,
    price: '$60/hr',
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: 'Priya Singh',
    role: 'Full Stack Developer',
    type: 'Freelancer',
    skills: ['React', 'Node.js', 'Python', '+3'],
    desc: 'Passionate full stack developer working on scalable apps.',
  },
  {
    id: 4,
    price: '$35/hr',
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    name: 'Suresh Patel',
    role: 'UI/UX Designer',
    type: 'Freelancer',
    skills: ['Figma', 'Adobe XD', 'Sketch', '+2'],
    desc: 'Creative UI/UX designer with a keen eye for detail.',
  },
  {
    id: 5,
    price: '$50/hr',
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: 'Neha Joshi',
    role: 'Mobile App Developer',
    type: 'Freelancer',
    skills: ['Flutter', 'React Native', 'Dart', '+1'],
    desc: 'Skilled mobile developer building cross-platform apps.',
  },
  {
    id: 6,
    price: '$40/hr',
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    name: 'Ravi Kumar',
    role: 'Data Scientist',
    type: 'Freelancer',
    skills: ['Python', 'R', 'TensorFlow', '+2'],
    desc: 'Data scientist specializing in machine learning models.',
  },
  {
    id: 7,
    price: '$45/hr',
    img: "https://randomuser.me/api/portraits/women/77.jpg",
    name: 'Anjali Verma',
    role: 'Content Writer',
    type: 'Freelancer',
    skills: ['SEO', 'Copywriting', 'Blogging', '+3'],
    desc: 'Experienced writer creating engaging content.',
  },
  {
    id: 8,
    price: '$55/hr',
    img: "https://randomuser.me/api/portraits/men/88.jpg",
    name: 'Karan Mehta',
    role: 'DevOps Engineer',
    type: 'Freelancer',
    skills: ['AWS', 'Docker', 'Kubernetes', '+2'],
    desc: 'DevOps specialist automating deployments.',
  },
  {
    id: 9,
    price: '$38/hr',
    img: "https://randomuser.me/api/portraits/women/90.jpg",
    name: 'Simran Kaur',
    role: 'Graphic Designer',
    type: 'Freelancer',
    skills: ['Photoshop', 'Illustrator', 'InDesign', '+1'],
    desc: 'Talented graphic designer with branding experience.',
  },
  {
    id: 10,
    price: '$42/hr',
    img: "https://randomuser.me/api/portraits/men/99.jpg",
    name: 'Vikram Singh',
    role: 'QA Engineer',
    type: 'Freelancer',
    skills: ['Selenium', 'Jest', 'Cypress', '+2'],
    desc: 'Quality assurance engineer with automation expertise.',
  },
    ];

  return (
    <div className='userslist'>
    {users.map(function(elem){
      return <Card  user={elem}/>
    })}
    
    </div>
  )
}

export default App