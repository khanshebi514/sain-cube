export const SERVICES = [
    {
        title:"Predictive Analytics",
        description:"Leveraging advanced algorithms to predict future trends and behaviors, enabling proactive decision-making",
        points:[
            'Time series forecasting',
            'Customer behavior prediction',
            'Risk assessment modeling',
        ],
        bgUrl:""
    },
    {
        title:"Data Visualization",
        description:"Transforming complex data into intuitive, actionable visual insights.",
        points:[
            'Interactive dashboards',
            'Custom data visualizations',
            'Real-time data streaming visuals',
        ],
        bgUrl:""
    },

    {
        title:"Natural Language Processing (NLP)",
        description:"Developing sophisticated language models to understand and interact with human language",
        points:[
            'Sentiment analysis',
            'Text classification',
            'Chatbot development',
        ],
        bgUrl:"",
    },
    {
        title:"Computer Vision",
        description:"Implementing image and video analysis technologies for various applications, from surveillance to healthcare.",
        points:[
            'Object detection',
            'Facial recognition',
            'Image segmentation',
        ],
        bgUrl:"",
    },

    {
        title:"Deep Learning",
        description:"Utilizing neural networks to model and solve complex problems.",
        points:[
            'Neural network architecture design',
            'Transfer learning',
            'Reinforcement learning',
        ],
        bgUrl:"",
    },

    {
        title:"Data Analytics",
        description:"Analyzing vast datasets to uncover hidden patterns, correlations, and insights.",
        points:[
            'Exploratory data analysis',
            'Statistical modeling',
            'A/B testing',
        ],
        bgUrl:"",
    },

    {
        title:"Industry-specific AI",
        description:"Providing tailored AI solutions for healthcare, finance, social media, geospatial, and supply chain industries.",
        points:[
            'Healthcare diagnostics AI',
            'Financial risk assessment',
            'Social media sentiment analysis',
        ],
        bgUrl:"",
    },

    {
        title:"Advanced Data Science Services",
        description:"Offering comprehensive data analysis and machine learning model development.",
        points:[
            'Feature engineering',
            'Model optimization',
            'Automated machine learning (AutoML)',
        ],
        bgUrl:"",
    },

    {
        title:"AI Custom Solutions",
        description:"Developing bespoke AI solutions tailored to unique business challenges and requirements.",
        points:[
            'Customized AI algorithms',
            'Integration with existing systems',
            'Scalable AI infrastructure design',
        ],
        bgUrl:"",
    },
]

export const PROJECTS  =[
    {
        key:'1',
        industy:'Logistics',
        title:'AI-Based Counting of Boxes for Logistics Companies',
        iconUrl : '',
        video:'true',
    },

    {
        key:'2',
        industy:'Ecommerce',
        title:'AI-Powered Ticket Response System for Ecommerce Companies',
        iconUrl : '/projects/project2.png'
    },

    {
        key:'3',
        industy:'Ecommerce',
        title:'Multi-Modal Machine Learning for eCommerce Product Classification',
        iconUrl : '/projects/project3.png'
    },
    {
        key:'4',
        industy:'Ecommerce',
        title:'eBay Automation',
        iconUrl : '/projects/project4.png'
    },
    {
        key:'5',
        industy:'Finance',
        title:'AI-Driven Stock Price Prediction System',
        iconUrl : '/projects/project5.webp'
    },
    
    {
        key:'6',
        industy:'Finance',
        title:'CLO and PLO Data Visualization Dashboard',
        iconUrl : '/projects/project6.webp'
    },
    {
        key:'7',
        industy:'Finance',
        title:'Invoices Data Replacement',
        iconUrl : '/projects/project7.webp'
    },

    {
        key:'8',
        industy:'Finance',
        title:'Automated Invoice Data Extraction and Processing System',
        iconUrl : '/projects/project8.webp'
    },
    {
        key:'9',
        industy:'Finance',
        title:'Trading Data Engineering',
        iconUrl : '/projects/project9.png'
    },
    {
        key:'10',
        industy:'Finance',
        title:'Secure and Scalable Trading Exchange Platform',
        iconUrl : '/projects/project10.png'
    },
    {
        key:'11',
        industy:'Healthcare',
        title:'AI-Powered Cardiovascular Anomaly Detection System',
        iconUrl : '/projects/project12.webp'
    },
    {
        key:'12',
        industy:'Healthcare',
        title:'Comprehensive Healthcare Data Analytics Platform',
        iconUrl : '/projects/project11.webp'
    },
    
]

export const EXPERTS =[
    {
        key:'1',
        title:'Dr. Mudasar Latif Memon PhD.',
        designation:'CEO',
        ImgUrl:'/experts/mudasar.jpg'
    },

    {
        key:'2',
        title:'Engr. Ahsan Inam',
        designation:'Co-Founder, CTO',
        ImgUrl:'/experts/ahsan.jpg'
    },

    {
        key:'3',
        title:'Abdul Rehman Irfan',
        designation:'Buisness Developer',
        ImgUrl:'/experts/abdulrehman.jpg'
    },

    {
        key:'4',
        title:'Abdul Hannan Irfan',
        designation:'Full Stack Developer',
        ImgUrl:'/experts/abdulhannan.jpg'
    },
]

export const ABOUT = {
    'our-story':{
        title:'Discover Our Story',
        description:(
            <>
              <p className="text-[18px] leading-7 font-normal text-gray-200 mt-3">
                SAINCUBE is a forward-thinking tech company that provides intelligent
                solutions to help organizations stay ahead. We aim to give businesses
                the tools they need to improve their operations and remain competitive
                in today's fast-changing market.
              </p>
              <p className="text-[18px] leading-7 font-normal text-gray-200 mt-3">
                We started as a group of tech enthusiasts solving real-world problems.
                We saw that success in modern business meant embracing new technologies
                as a key strategy. Our services cover a range of areas, including data
                analysis, automated learning systems, and advanced computing techniques.
              </p>
        
              <p className="text-[18px] leading-7 font-normal text-gray-200 mt-3">
                At SAINCUBE, we work with all kinds of businesses, from small startups
                to large corporations, across many industries including healthcare,
                finance, and more. We're driven by our love for innovation, our
                commitment to doing great work, and our desire to make a positive
                difference in the world.
              </p>
        
              <p className="text-[18px] leading-7 font-normal text-gray-200 mt-3">
                We're here to help businesses not just keep up with change, but lead the
                way. Join us in shaping a smarter future for your organization.
              </p>
            </>
          )
    },

    'our-principle':{
        title:"Guiding Principles That Shape Our Company's Identity",
        description:(<p className="text-[18px] leading-7 font-normal text-gray-200 mt-3">These are the beliefs that shape who we are, how we work, and why we do what we do every day.</p>),
        components:[
        {
            key:'01',
            title:"Client Value",
            description:"We're all about making our clients happy. That means going above and beyond to deliver real, measurable results that actually help their business grow."
        },
        {
            key:'02',
            title:"People Driven",
            description:"We put people first. Our company's heart lies in caring for our team members, understanding our customers, and supporting our local communities."
        },
        {
            key:'03',
            title:"Integrity",
            description:"We value openness, honesty, and ethical behavior. These principles help us build strong, lasting relationships with our team and partners."
        },
        {
            key:'04',
            title:"Accountability",
            description:"We champion accountability, taking ownership of our actions and results while holding ourselves and our team to high performance standards."
        },
        {
            key:'05',
            title:"Collabration",
            description:"Collaboration is our superpower. When we combine our diverse talents and experiences, we spark creativity and achieve more than we ever could alone."
        },
    ]
    }
}
    
