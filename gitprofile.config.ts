// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'BREVIC3PS', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['BREVIC3PS/Portfolio'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['BREVIC3PS/UE5_Action_Slash', 'BREVIC3PS/Render_Project',
          'EVAN-REN/TrojanMap-Menu','BREVIC3PS/Raider', 
          'BREVIC3PS/Jet','EVAN-REN/EE542HW4',
            ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Ideas & Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Frustum Culling',
          description:
            'Frustum Culling feature on PrimeEngine',
          imageUrl:
            'https://github.com/BREVIC3PS/Portfolio/blob/main/GIFs/FrustumCulling.gif?raw=true',
          link: 'https://github.com/BREVIC3PS/Portfolio/blob/main/GIFs/FrustumCulling.gif',
        },
        {
          title: 'Aiming Objects',
          description:
            'Moving Objects on PrimeEngine',
          imageUrl:
            'https://github.com/BREVIC3PS/Portfolio/blob/main/GIFs/Aiming.png?raw=true',
          link: 'https://github.com/BREVIC3PS/Portfolio/GIFs/AimingObjects.gif',
        },
        {
          title: 'Floating Skateboard',
          description:
            'A physical floating skateboard in UE5, WIP',
          imageUrl:
            'https://gd-hbimg.huaban.com/062b7dbc50ca3953b84bfddaa8c7d3fa0d310f5e4d0ec-cp9x66_fw658',
          // link: 'https://example.com',
        },
        {
          title: 'UDP-Based Reliable File Transfer',
          description:
            'A UDP-Based reliable file transfer software, aiming to act like scp but better performance',
          // imageUrl:
          //   'https://gd-hbimg.huaban.com/062b7dbc50ca3953b84bfddaa8c7d3fa0d310f5e4d0ec-cp9x66_fw658',
          link: 'https://www.youtube.com/watch?v=UfwsEprvFnA',
        },
        {
          title: 'TCP Modification',
          description:
            'Some adjustments were made to the source TCP protocol files in the Linux 5.4 kernel to enhance its performance in high-loss networks',
          // imageUrl:
          //   'https://gd-hbimg.huaban.com/062b7dbc50ca3953b84bfddaa8c7d3fa0d310f5e4d0ec-cp9x66_fw658',
          link: 'https://youtu.be/UC5skvMYSiA',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ke Wang',
    description: 'Gamer/Programmer/Student/Meatlover',
    imageURL: '',
  },
  social: {
    linkedin: 'ke-wang-0a9917289',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    phone: '+12135239484/+8615847677309',
    email: 'kwang655@usc.edu',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'C',
    'CUDA',
    'Unreal Engine',
    'Multi-thread programming',
    'MySQL',
    'Git',
    'Linux',
    'Python',
  ],
  experiences: [
    {
      company: 'Tencent',
      position: 'Game Client Development Intern, PUBG Mobile Team',
      from: 'May 2024',
      to: 'August 2024',
      companyLink: 'https://www.lightspeed-studios.com/',
    },
    {
      company: 'USC WiDeS Lab',
      position: 'Student Worker, Ray Tracer CUDA Implementation',
      from: 'Feb 2024',
      to: 'Present',
    },
    {
      company: 'FESCO',
      position: 'Software Engineer',
      from: 'April 2023',
      to: 'August 2023',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'University of Southern California',
      degree: 'Master of Science in Electrical Engineering',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'XiDian University',
      degree: 'Bachelor of Engineering in Space Information and Digital Technology',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Lemonade',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
