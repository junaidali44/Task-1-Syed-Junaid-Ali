 export const heroTechData = [
            { name: 'React', icon: 'fa-brands fa-react' },
            { name: 'Angular', icon: 'fa-brands fa-angular' },
            { name: 'Laravel', icon: 'fa-brands fa-laravel' },
            { name: 'Node.js', icon: 'fa-brands fa-node-js' },
            { name: 'Python', icon: 'fa-brands fa-python' },
            { name: 'Vue.js', icon: 'fa-brands fa-vuejs' }
        ];
 export const testimonialsData = [
            { id: 1, name: 'Sarah Chen', role: 'Junior Developer', text: 'EZLearn made learning React so much easier. The examples are practical and the documentation is crystal clear.', avatar: 'SC' },
            { id: 2, name: 'Marcus Johnson', role: 'Career Switcher', text: 'I went from knowing nothing to building my first web app in 3 months. The bite-sized lessons are perfect for my busy schedule.', avatar: 'MJ' },
            { id: 3, name: 'Priya Patel', role: 'Bootcamp Student', text: 'The way they explain complex concepts with simple examples is incredible. This is how all documentation should be written.', avatar: 'PP' }
        ];

// Courses 
export const courseData = {
    // React
    react: {
        id: 'react',
        name: 'React',
        icon: 'fa-brands fa-react',
        color: '#61DAFB',
        description: 'Build modern user interfaces with React. Learn components, hooks, state management, and more.',
        totalLessons: 12,
        totalTopics: 4,
        topics: [
            {
                id: 'react-components',
                name: 'Components & Props',
                lessons: [
                    {
                        id: 'r1',
                        title: 'Introduction to Components',
                        description: 'Learn the basics of React components and how to create functional components.',
                        code: 'function Welcome() {\n  return <h1>Hello, World!</h1>;\n}',
                        explanation: 'A React component is a JavaScript function that returns JSX (HTML-like syntax).'
                    },
                    {
                        id: 'r2',
                        title: 'Props in React',
                        description: 'Pass data between components using props.',
                        code: 'function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\nfunction App() {\n  return <Greeting name="John" />;\n}',
                        explanation: 'Props are arguments passed into React components. They are read-only and help make components reusable.'
                    },
                    {
                        id: 'r3',
                        title: 'Children Prop',
                        description: 'Pass nested content to components using children prop.',
                        code: 'function Card({ children }) {\n  return <div className="card">{children}</div>;\n}\n\nfunction App() {\n  return (\n    <Card>\n      <h2>My Card</h2>\n      <p>This content is passed as children.</p>\n    </Card>\n  );\n}',
                        explanation: 'The children prop allows you to pass elements between the opening and closing tags of a component.'
                    }
                ]
            },
            {
                id: 'react-hooks',
                name: 'Hooks',
                lessons: [
                    {
                        id: 'r4',
                        title: 'useState Hook',
                        description: 'Add state to functional components using useState.',
                        code: 'function Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}',
                        explanation: 'useState returns an array with two values: the current state and a function to update it.'
                    },
                    {
                        id: 'r5',
                        title: 'useEffect Hook',
                        description: 'Handle side effects in functional components.',
                        code: 'function Timer() {\n  const [time, setTime] = useState(0);\n  \n  useEffect(() => {\n    const interval = setInterval(() => {\n      setTime(t => t + 1);\n    }, 1000);\n    \n    return () => clearInterval(interval);\n  }, []);\n  \n  return <p>Time: {time}s</p>;\n}',
                        explanation: 'useEffect runs after every render. The second argument [] makes it run only once.'
                    },
                    {
                        id: 'r6',
                        title: 'useContext Hook',
                        description: 'Share data across components without prop drilling.',
                        code: 'const ThemeContext = createContext(\'light\');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <ChildComponent />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction ChildComponent() {\n  const theme = useContext(ThemeContext);\n  return <p>Current theme: {theme}</p>;\n}',
                        explanation: 'useContext provides a way to pass data through the component tree without prop drilling.'
                    }
                ]
            },
            {
                id: 'react-state',
                name: 'State Management',
                lessons: [
                    {
                        id: 'r7',
                        title: 'State Lifting',
                        description: 'Share state between components by lifting it up.',
                        code: 'function Parent() {\n  const [text, setText] = useState(\'\');\n  \n  return (\n    <div>\n      <ChildInput onTextChange={setText} />\n      <ChildDisplay text={text} />\n    </div>\n  );\n}\n\nfunction ChildInput({ onTextChange }) {\n  return <input onChange={(e) => onTextChange(e.target.value)} />;\n}\n\nfunction ChildDisplay({ text }) {\n  return <p>You typed: {text}</p>;\n}',
                        explanation: 'Lifting state up means moving state to the nearest common ancestor of components that need it.'
                    },
                    {
                        id: 'r8',
                        title: 'useReducer Hook',
                        description: 'Manage complex state logic with useReducer.',
                        code: 'function reducer(state, action) {\n  switch (action.type) {\n    case \'increment\':\n      return { count: state.count + 1 };\n    case \'decrement\':\n      return { count: state.count - 1 };\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n  \n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({ type: \'increment\' })}>+</button>\n      <button onClick={() => dispatch({ type: \'decrement\' })}>-</button>\n    </div>\n  );\n}',
                        explanation: 'useReducer is a more advanced alternative to useState for complex state logic.'
                    }
                ]
            },
            {
                id: 'react-routing',
                name: 'Routing',
                lessons: [
                    {
                        id: 'r9',
                        title: 'React Router Setup',
                        description: 'Add navigation to your React app.',
                        code: 'import { BrowserRouter, Routes, Route } from \'react-router-dom\';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}',
                        explanation: 'React Router enables client-side routing. BrowserRouter wraps your app, Routes define your route configuration.'
                    },
                    {
                        id: 'r10',
                        title: 'Navigation Links',
                        description: 'Create navigation links with React Router.',
                        code: 'import { Link, NavLink } from \'react-router-dom\';\n\nfunction Navigation() {\n  return (\n    <nav>\n      <Link to="/">Home</Link>\n      <NavLink to="/about" className={({ isActive }) => isActive ? \'active\' : \'\'}>\n        About\n      </NavLink>\n    </nav>\n  );\n}',
                        explanation: 'Link replaces <a> tags for navigation. NavLink adds active styling when the link matches the current URL.'
                    }
                ]
            }
        ]
    },

    
    // ANGULAR 
    angular: {
        id: 'angular',
        name: 'Angular',
        icon: 'fa-brands fa-angular',
        color: '#DD0031',
        description: 'Build powerful single-page applications with Angular. Learn components, services, routing, and more.',
        totalLessons: 10,
        totalTopics: 3,
        topics: [
            {
                id: 'angular-components',
                name: 'Components & Templates',
                lessons: [
                    {
                        id: 'a1',
                        title: 'Introduction to Angular Components',
                        description: 'Learn the basics of Angular components and how to create them.',
                        code: 'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-root\',\n  template: \'<h1>Hello, World!</h1>\'\n})\nexport class AppComponent {}',
                        explanation: 'Angular components define reusable UI pieces. The @Component decorator adds metadata and templates.'
                    },
                    {
                        id: 'a2',
                        title: 'Data Binding',
                        description: 'Bind data between components and templates.',
                        code: 'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-root\',\n  template: `\n    <p>{{ message }}</p>\n    <input [(ngModel)]="message" />\n  `\n})\nexport class AppComponent {\n  message = \'Hello, World!\';\n}',
                        explanation: 'Angular supports one-way ({{ }}) and two-way ([(ngModel)]) data binding.'
                    }
                ]
            },
            {
                id: 'angular-services',
                name: 'Services & Dependency Injection',
                lessons: [
                    {
                        id: 'a3',
                        title: 'Creating Services',
                        description: 'Build services to share data and logic across components.',
                        code: 'import { Injectable } from \'@angular/core\';\n\n@Injectable({\n  providedIn: \'root\'\n})\nexport class DataService {\n  getData() {\n    return [\'item1\', \'item2\', \'item3\'];\n  }\n}',
                        explanation: 'Services contain business logic and data that can be shared across components.'
                    },
                    {
                        id: 'a4',
                        title: 'Dependency Injection',
                        description: 'Inject services into components using Angular\'s DI system.',
                        code: 'import { Component, OnInit } from \'@angular/core\';\nimport { DataService } from \'./data.service\';\n\n@Component({\n  selector: \'app-data\',\n  template: \'<ul><li *ngFor="let item of data">{{ item }}</li></ul>\'\n})\nexport class DataComponent implements OnInit {\n  data: string[] = [];\n  \n  constructor(private dataService: DataService) {}\n  \n  ngOnInit() {\n    this.data = this.dataService.getData();\n  }\n}',
                        explanation: 'Dependency Injection is a design pattern where services are provided to components via the constructor.'
                    }
                ]
            },
            {
                id: 'angular-routing',
                name: 'Routing & Navigation',
                lessons: [
                    {
                        id: 'a5',
                        title: 'Angular Router Setup',
                        description: 'Set up routing in your Angular application.',
                        code: 'import { NgModule } from \'@angular/core\';\nimport { RouterModule, Routes } from \'@angular/router\';\nimport { HomeComponent } from \'./home.component\';\nimport { AboutComponent } from \'./about.component\';\n\nconst routes: Routes = [\n  { path: \'\', component: HomeComponent },\n  { path: \'about\', component: AboutComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule {}',
                        explanation: 'Angular Router maps URL paths to components. Routes are defined in a Routes array.'
                    }
                ]
            }
        ]
    },

   
    // LARAVEL
    laravel: {
        id: 'laravel',
        name: 'Laravel',
        icon: 'fa-brands fa-laravel',
        color: '#FF2D20',
        description: 'Master the PHP framework for elegant web applications. Learn MVC, Eloquent, Blade, and more.',
        totalLessons: 8,
        totalTopics: 3,
        topics: [
            {
                id: 'laravel-mvc',
                name: 'MVC Architecture',
                lessons: [
                    {
                        id: 'l1',
                        title: 'Laravel MVC Overview',
                        description: 'Understand the Model-View-Controller pattern in Laravel.',
                        code: '// Route\nRoute::get(\'/users\', [UserController::class, \'index\']);\n\n// Controller\nclass UserController {\n  public function index() {\n    $users = User::all();\n    return view(\'users.index\', [\'users\' => $users]);\n  }\n}\n\n// View (users/index.blade.php)\n@foreach ($users as $user)\n  <p>{{ $user->name }}</p>\n@endforeach',
                        explanation: 'MVC separates concerns: Models handle data, Views handle UI, Controllers handle logic.'
                    },
                    {
                        id: 'l2',
                        title: 'Laravel Routing',
                        description: 'Define routes and handle HTTP requests.',
                        code: '// Basic routes\nRoute::get(\'/\', function () {\n  return view(\'welcome\');\n});\n\n// Route parameters\nRoute::get(\'/user/{id}\', function ($id) {\n  return \'User \'.$id;\n});\n\n// Route groups\nRoute::middleware([\'auth\'])->group(function () {\n  Route::get(\'/dashboard\', [DashboardController::class, \'index\']);\n});',
                        explanation: 'Routes define URLs and how to respond to HTTP requests.'
                    }
                ]
            },
            {
                id: 'laravel-eloquent',
                name: 'Eloquent ORM',
                lessons: [
                    {
                        id: 'l3',
                        title: 'Eloquent Models',
                        description: 'Work with databases using Eloquent ORM.',
                        code: '// Model\nclass User extends Model {\n  protected $fillable = [\'name\', \'email\', \'password\'];\n}\n\n// Querying\n$users = User::where(\'active\', true)->get();\n$user = User::find(1);\n$user->update([\'name\' => \'John\']);\n$user->delete();',
                        explanation: 'Eloquent provides an ActiveRecord implementation for working with databases.'
                    },
                    {
                        id: 'l4',
                        title: 'Eloquent Relationships',
                        description: 'Define and query relationships between models.',
                        code: '// One to Many\nclass Post extends Model {\n  public function user() {\n    return $this->belongsTo(User::class);\n  }\n}\n\nclass User extends Model {\n  public function posts() {\n    return $this->hasMany(Post::class);\n  }\n}\n\n// Querying relationships\n$posts = User::find(1)->posts()->where(\'published\', true)->get();',
                        explanation: 'Eloquent supports various relationships: belongsTo, hasMany, hasOne, belongsToMany, etc.'
                    }
                ]
            },
            {
                id: 'laravel-blade',
                name: 'Blade Templating',
                lessons: [
                    {
                        id: 'l5',
                        title: 'Blade Basics',
                        description: 'Learn the Laravel Blade templating engine.',
                        code: '<!-- Layout -->\n<!-- layouts/app.blade.php -->\n<html>\n  <body>\n    @yield(\'content\')\n  </body>\n</html>\n\n<!-- Child view -->\n<!-- home.blade.php -->\n@extends(\'layouts.app\')\n\n@section(\'content\')\n  <h1>Welcome {{ $name }}</h1>\n  @foreach($items as $item)\n    <p>{{ $item }}</p>\n  @endforeach\n@endsection',
                        explanation: 'Blade provides a simple syntax for creating templates with inheritance and control structures.'
                    },
                    {
                        id: 'l6',
                        title: 'Blade Components',
                        description: 'Create reusable UI components in Blade.',
                        code: '<!-- Component class -->\nclass Alert extends Component {\n  public $type;\n  public $message;\n  \n  public function render() {\n    return view(\'components.alert\');\n  }\n}\n\n<!-- Component usage -->\n<x-alert type="success" message="Operation successful!" />\n\n<!-- Component view -->\n<!-- components/alert.blade.php -->\n<div class="alert-{{ $type }}">\n  {{ $message }}\n</div>',
                        explanation: 'Blade components are reusable UI pieces that combine a template with PHP logic.'
                    }
                ]
            }
        ]
    },

    // NODE.JS COURSE
    nodejs: {
        id: 'nodejs',
        name: 'Node.js',
        icon: 'fa-brands fa-node-js',
        color: '#339933',
        description: 'Build scalable server-side applications with Node.js. Learn Express, APIs, authentication, and more.',
        totalLessons: 8,
        totalTopics: 3,
        topics: [
            {
                id: 'nodejs-basics',
                name: 'Node.js Basics',
                lessons: [
                    {
                        id: 'n1',
                        title: 'Introduction to Node.js',
                        description: 'Get started with Node.js and npm.',
                        code: '// Basic HTTP server\nconst http = require(\'http\');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { \'Content-Type\': \'text/plain\' });\n  res.end(\'Hello, World!\');\n});\n\nserver.listen(3000, () => {\n  console.log(\'Server running on port 3000\');\n});',
                        explanation: 'Node.js allows JavaScript to run on the server. It uses an event-driven, non-blocking I/O model.'
                    },
                    {
                        id: 'n2',
                        title: 'File System Operations',
                        description: 'Read and write files in Node.js.',
                        code: 'const fs = require(\'fs\');\n\n// Async read\nfs.readFile(\'file.txt\', \'utf8\', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n\n// Async write\nfs.writeFile(\'output.txt\', \'Hello, Node.js!\', (err) => {\n  if (err) throw err;\n  console.log(\'File saved!\');\n});',
                        explanation: 'The File System (fs) module provides methods for working with files.'
                    }
                ]
            },
            {
                id: 'nodejs-express',
                name: 'Express Framework',
                lessons: [
                    {
                        id: 'n3',
                        title: 'Express Basics',
                        description: 'Build web applications with Express.',
                        code: 'const express = require(\'express\');\nconst app = express();\n\napp.get(\'/\', (req, res) => {\n  res.json({ message: \'Hello, Express!\' });\n});\n\napp.get(\'/users/:id\', (req, res) => {\n  res.json({ user: req.params.id });\n});\n\napp.listen(3000, () => {\n  console.log(\'Express server running on port 3000\');\n});',
                        explanation: 'Express is a minimal and flexible Node.js web application framework.'
                    },
                    {
                        id: 'n4',
                        title: 'Express Middleware',
                        description: 'Use middleware to handle requests in Express.',
                        code: 'const express = require(\'express\');\nconst app = express();\n\n// Logger middleware\napp.use((req, res, next) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);\n  next();\n});\n\n// Body parser\napp.use(express.json());\n\n// Error handler\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({ error: \'Something went wrong!\' });\n});\n\napp.get(\'/\', (req, res) => {\n  res.json({ message: \'Hello, Express!\' });\n});\n\napp.listen(3000);',
                        explanation: 'Middleware functions have access to the request and response objects.'
                    }
                ]
            },
            {
                id: 'nodejs-api',
                name: 'REST APIs',
                lessons: [
                    {
                        id: 'n5',
                        title: 'Building REST APIs',
                        description: 'Create RESTful APIs with Express.',
                        code: 'const express = require(\'express\');\nconst app = express();\napp.use(express.json());\n\nlet users = [{ id: 1, name: \'John\' }];\n\n// GET all users\napp.get(\'/api/users\', (req, res) => {\n  res.json(users);\n});\n\n// GET single user\napp.get(\'/api/users/:id\', (req, res) => {\n  const user = users.find(u => u.id === parseInt(req.params.id));\n  if (!user) return res.status(404).json({ error: \'User not found\' });\n  res.json(user);\n});\n\n// POST new user\napp.post(\'/api/users\', (req, res) => {\n  const newUser = { id: users.length + 1, ...req.body };\n  users.push(newUser);\n  res.status(201).json(newUser);\n});\n\napp.listen(3000);',
                        explanation: 'REST APIs follow CRUD operations: Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE).'
                    },
                    {
                        id: 'n6',
                        title: 'Authentication with JWT',
                        description: 'Secure your APIs with JSON Web Tokens.',
                        code: 'const jwt = require(\'jsonwebtoken\');\nconst express = require(\'express\');\nconst app = express();\napp.use(express.json());\n\nconst SECRET_KEY = \'my-secret-key\';\n\n// Login endpoint\napp.post(\'/api/login\', (req, res) => {\n  const { username, password } = req.body;\n  if (username === \'admin\' && password === \'password\') {\n    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: \'1h\' });\n    res.json({ token });\n  } else {\n    res.status(401).json({ error: \'Invalid credentials\' });\n  }\n});\n\n// Protected route\napp.get(\'/api/protected\', (req, res) => {\n  const token = req.headers.authorization?.split(\' \')[1];\n  if (!token) return res.status(401).json({ error: \'No token provided\' });\n  \n  try {\n    const decoded = jwt.verify(token, SECRET_KEY);\n    res.json({ message: \'Protected data\', user: decoded.username });\n  } catch (error) {\n    res.status(401).json({ error: \'Invalid token\' });\n  }\n});\n\napp.listen(3000);',
                        explanation: 'JWT (JSON Web Token) is a popular method for authentication.'
                    }
                ]
            }
        ]
    },

   
    // VUE.JS COURSE
    vuejs: {
        id: 'vuejs',
        name: 'Vue.js',
        icon: 'fa-brands fa-vuejs',
        color: '#4FC08D',
        description: 'Build progressive web applications with Vue.js. Learn components, directives, composition API, and more.',
        totalLessons: 8,
        totalTopics: 3,
        topics: [
            {
                id: 'vue-basics',
                name: 'Vue.js Basics',
                lessons: [
                    {
                        id: 'v1',
                        title: 'Introduction to Vue',
                        description: 'Get started with Vue.js.',
                        code: '<div id="app">\n  <h1>{{ message }}</h1>\n  <button @click="increment">Count: {{ count }}</button>\n</div>\n\n<script>\nconst app = Vue.createApp({\n  data() {\n    return {\n      message: \'Hello, Vue!\',\n      count: 0\n    };\n  },\n  methods: {\n    increment() {\n      this.count++;\n    }\n  }\n}).mount(\'#app\');\n</script>',
                        explanation: 'Vue.js is a progressive framework for building UIs. It focuses on the view layer.'
                    },
                    {
                        id: 'v2',
                        title: 'Vue Directives',
                        description: 'Learn Vue directives for DOM manipulation.',
                        code: '<div id="app">\n  <!-- v-if conditional rendering -->\n  <p v-if="isVisible">Visible content</p>\n  \n  <!-- v-for loop -->\n  <ul>\n    <li v-for="item in items" :key="item.id">\n      {{ item.name }}\n    </li>\n  </ul>\n  \n  <!-- v-model two-way binding -->\n  <input v-model="search" placeholder="Search..." />\n  <p>Searching for: {{ search }}</p>\n</div>\n\n<script>\nconst app = Vue.createApp({\n  data() {\n    return {\n      isVisible: true,\n      items: [{ id: 1, name: \'Item 1\' }, { id: 2, name: \'Item 2\' }],\n      search: \'\'\n    };\n  }\n}).mount(\'#app\');\n</script>',
                        explanation: 'Directives are special attributes with the v- prefix. They apply reactive behavior to the DOM.'
                    }
                ]
            },
            {
                id: 'vue-components',
                name: 'Components & Composition',
                lessons: [
                    {
                        id: 'v3',
                        title: 'Vue Components',
                        description: 'Create reusable Vue components.',
                        code: '// Component definition\napp.component(\'user-card\', {\n  props: [\'name\', \'email\'],\n  template: `\n    <div class="card">\n      <h2>{{ name }}</h2>\n      <p>{{ email }}</p>\n      <button @click="sayHello">Say Hello</button>\n    </div>\n  `,\n  methods: {\n    sayHello() {\n      alert(`Hello, ${this.name}!`);\n    }\n  }\n});\n\n// Usage\n<user-card name="John" email="john@example.com" />',
                        explanation: 'Components are reusable Vue instances with a name. They can accept props and have their own data and methods.'
                    },
                    {
                        id: 'v4',
                        title: 'Composition API',
                        description: 'Use Composition API for better organization.',
                        code: '<script>\nimport { ref, computed, onMounted } from \'vue\';\n\nexport default {\n  setup() {\n    const count = ref(0);\n    const doubled = computed(() => count.value * 2);\n    \n    function increment() {\n      count.value++;\n    }\n    \n    onMounted(() => {\n      console.log(\'Component mounted!\');\n    });\n    \n    return { count, doubled, increment };\n  }\n}\n</script>\n\n<template>\n  <p>Count: {{ count }}</p>\n  <p>Doubled: {{ doubled }}</p>\n  <button @click="increment">Increment</button>\n</template>',
                        explanation: 'The Composition API provides a way to organize component logic using functions.'
                    }
                ]
            },
            {
                id: 'vue-routing',
                name: 'Vue Router & State',
                lessons: [
                    {
                        id: 'v5',
                        title: 'Vue Router',
                        description: 'Add routing to your Vue application.',
                        code: 'import { createRouter, createWebHistory } from \'vue-router\';\nimport Home from \'./views/Home.vue\';\nimport About from \'./views/About.vue\';\n\nconst routes = [\n  { path: \'/\', component: Home },\n  { path: \'/about\', component: About }\n];\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes\n});\n\n// In main.js\napp.use(router);\n\n// In template\n<router-link to="/">Home</router-link>\n<router-link to="/about">About</router-link>\n<router-view />',
                        explanation: 'Vue Router is the official router for Vue.js. It deeply integrates with Vue core.'
                    }
                ]
            }
        ]
    },

   
    // PYTHON 
    python: {
        id: 'python',
        name: 'Python',
        icon: 'fa-brands fa-python',
        color: '#3776AB',
        description: 'Learn Python programming language. Master fundamentals, web development, and data processing.',
        totalLessons: 10,
        totalTopics: 3,
        topics: [
            {
                id: 'python-basics',
                name: 'Python Basics',
                lessons: [
                    {
                        id: 'p1',
                        title: 'Python Fundamentals',
                        description: 'Learn Python syntax and data types.',
                        code: '# Variables and data types\nname = "John"\nage = 25\nis_active = True\n\n# Lists\nfruits = [\'apple\', \'banana\', \'orange\']\n\n# Dictionaries\nperson = {\n  \'name\': \'John\',\n  \'age\': 25,\n  \'city\': \'New York\'\n}\n\n# Loops\nfor fruit in fruits:\n  print(fruit)\n\n# Conditionals\nif age >= 18:\n  print(\'Adult\')\nelse:\n  print(\'Minor\')',
                        explanation: 'Python is a versatile language with simple syntax. It supports multiple programming paradigms.'
                    },
                    {
                        id: 'p2',
                        title: 'Functions & Modules',
                        description: 'Create reusable code with functions.',
                        code: '# Function definition\ndef greet(name):\n  return f\'Hello, {name}!\'\n\n# Default parameters\ndef power(base, exponent=2):\n  return base ** exponent\n\n# *args and **kwargs\ndef print_args(*args, **kwargs):\n  print(args)\n  print(kwargs)\n\n# Importing modules\nimport math\nprint(math.sqrt(16))',
                        explanation: 'Functions are blocks of reusable code. Modules allow you to organize code across multiple files.'
                    }
                ]
            },
            {
                id: 'python-oop',
                name: 'Object-Oriented Programming',
                lessons: [
                    {
                        id: 'p3',
                        title: 'Classes & Objects',
                        description: 'Learn OOP in Python.',
                        code: 'class Person:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n  \n  def greet(self):\n    return f\'Hello, I am {self.name}\'\n\n# Inheritance\nclass Student(Person):\n  def __init__(self, name, age, grade):\n    super().__init__(name, age)\n    self.grade = grade\n  \n  def study(self):\n    return f\'Studying {self.grade} grade\'\n\n# Usage\nstudent = Student(\'John\', 16, 10)\nprint(student.greet())\nprint(student.study())',
                        explanation: 'Python supports OOP with classes, inheritance, polymorphism, and encapsulation.'
                    },
                    {
                        id: 'p4',
                        title: 'Dunder Methods',
                        description: 'Use special methods to customize classes.',
                        code: 'class Vector:\n  def __init__(self, x, y):\n    self.x = x\n    self.y = y\n  \n  def __add__(self, other):\n    return Vector(self.x + other.x, self.y + other.y)\n  \n  def __str__(self):\n    return f\'Vector({self.x}, {self.y})\'\n  \n  def __eq__(self, other):\n    return self.x == other.x and self.y == other.y\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nv3 = v1 + v2\nprint(v3)',
                        explanation: 'Dunder (double underscore) methods allow you to define behavior for operators and built-in functions.'
                    }
                ]
            },
            {
                id: 'python-web',
                name: 'Web Development with Flask',
                lessons: [
                    {
                        id: 'p5',
                        title: 'Flask Basics',
                        description: 'Build web applications with Flask.',
                        code: 'from flask import Flask, jsonify, request\n\napp = Flask(__name__)\n\n@app.route(\'/\')\ndef hello():\n  return jsonify({\'message\': \'Hello, Flask!\'})\n\n@app.route(\'/users/<int:user_id>\')\ndef get_user(user_id):\n  return jsonify({\'id\': user_id, \'name\': f\'User {user_id}\'})\n\n@app.route(\'/api/data\', methods=[\'POST\'])\ndef post_data():\n  data = request.json\n  return jsonify({\'received\': data})\n\nif __name__ == \'__main__\':\n  app.run(debug=True)',
                        explanation: 'Flask is a lightweight web framework for Python. It\'s perfect for building REST APIs.'
                    }
                ]
            }
        ]
    },

    
    // CSS 
    css: {
        id: 'css',
        name: 'CSS',
        icon: 'fa-brands fa-css3-alt',
        color: '#2965F1',
        description: 'Master CSS styling. Learn layouts, animations, and responsive design.',
        totalLessons: 8,
        totalTopics: 3,
        topics: [
            {
                id: 'css-layout',
                name: 'CSS Layout',
                lessons: [
                    {
                        id: 'c1',
                        title: 'Flexbox Layout',
                        description: 'Create flexible layouts with Flexbox.',
                        code: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  min-height: 100vh;\n  flex-wrap: wrap;\n}\n\n.item {\n  flex: 1;\n  min-width: 200px;\n  padding: 20px;\n  background: #f0f0f0;\n  border-radius: 8px;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}',
                        explanation: 'Flexbox provides a powerful way to distribute space and align items in containers.'
                    },
                    {
                        id: 'c2',
                        title: 'CSS Grid',
                        description: 'Build complex layouts with CSS Grid.',
                        code: '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  padding: 20px;\n}\n\n.grid-item {\n  background: #f0f0f0;\n  padding: 20px;\n  border-radius: 8px;\n}\n\n.grid-item:first-child {\n  grid-column: span 2;\n}\n\n@media (max-width: 768px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}',
                        explanation: 'CSS Grid is a two-dimensional layout system that offers fine-grained control over rows and columns.'
                    }
                ]
            },
            {
                id: 'css-animation',
                name: 'Animations',
                lessons: [
                    {
                        id: 'c3',
                        title: 'CSS Transitions',
                        description: 'Create smooth transitions between states.',
                        code: '.button {\n  background: #3b82f6;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.button:hover {\n  background: #2563eb;\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);\n}',
                        explanation: 'Transitions allow you to smoothly animate property changes triggered by state changes.'
                    },
                    {
                        id: 'c4',
                        title: 'CSS Keyframe Animations',
                        description: 'Create complex animations with keyframes.',
                        code: '@keyframes float {\n  0% { transform: translateY(0px); }\n  50% { transform: translateY(-20px); }\n  100% { transform: translateY(0px); }\n}\n\n@keyframes pulse {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n  100% { transform: scale(1); }\n}\n\n.animated {\n  animation: float 3s ease-in-out infinite,\n             pulse 2s ease-in-out infinite;\n}\n\n.animated:hover {\n  animation-play-state: paused;\n}',
                        explanation: 'Keyframe animations provide full control over animation sequences using defined keyframes.'
                    }
                ]
            },
            {
                id: 'css-responsive',
                name: 'Responsive Design',
                lessons: [
                    {
                        id: 'c5',
                        title: 'Responsive Units & Media Queries',
                        description: 'Build responsive websites.',
                        code: ':root {\n  --spacing: clamp(1rem, 3vw, 3rem);\n  --font-size: clamp(1rem, 2vw, 1.25rem);\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: var(--spacing);\n}\n\n@media (max-width: 768px) {\n  .container {\n    padding: 1rem;\n  }\n  \n  .title {\n    font-size: 1.5rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .mobile-hidden {\n    display: none;\n  }\n}',
                        explanation: 'Responsive design ensures your website works on all devices using relative units and media queries.'
                    }
                ]
            }
        ]
    },

    // TYPESCRIPT 
    typescript: {
        id: 'typescript',
        name: 'TypeScript',
        icon: 'fa-solid fa-code',
        color: '#3178C6',
        description: 'Master TypeScript for type-safe JavaScript. Learn types, interfaces, generics, and advanced patterns.',
        totalLessons: 8,
        totalTopics: 3,
        topics: [
            {
                id: 'ts-basics',
                name: 'TypeScript Basics',
                lessons: [
                    {
                        id: 't1',
                        title: 'Basic Types',
                        description: 'Learn TypeScript type system.',
                        code: '// Primitive types\nlet name: string = \'John\';\nlet age: number = 25;\nlet isActive: boolean = true;\nlet colors: string[] = [\'red\', \'green\', \'blue\'];\n\n// Any (avoid when possible)\nlet something: any = \'could be anything\';\n\n// Union types\nlet id: string | number = 123;\n\n// Type aliases\ntype User = {\n  id: number;\n  name: string;\n  email?: string;\n};\n\nconst user: User = {\n  id: 1,\n  name: \'John\'\n};',
                        explanation: 'TypeScript adds static types to JavaScript, helping catch errors early and improving code quality.'
                    },
                    {
                        id: 't2',
                        title: 'Functions & Return Types',
                        description: 'Type functions and their return values.',
                        code: '// Function with types\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\n// Arrow functions\nconst multiply = (a: number, b: number): number => a * b;\n\n// Optional parameters\nfunction greet(name: string, greeting?: string): string {\n  return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;\n}\n\n// Void return\nfunction log(message: string): void {\n  console.log(message);\n}\n\n// Function types\nlet calculator: (a: number, b: number) => number;\ncalculator = add;',
                        explanation: 'TypeScript allows you to specify function parameter and return types for self-documenting code.'
                    }
                ]
            },
            {
                id: 'ts-advanced',
                name: 'Advanced Types',
                lessons: [
                    {
                        id: 't3',
                        title: 'Interfaces & Generics',
                        description: 'Create reusable type patterns.',
                        code: '// Interfaces\ninterface Person {\n  name: string;\n  age: number;\n  greet(): void;\n}\n\nclass Employee implements Person {\n  constructor(public name: string, public age: number) {}\n  greet() {\n    console.log(`Hello, I\'m ${this.name}`);\n  }\n}\n\n// Generics\nfunction identity<T>(value: T): T {\n  return value;\n}\n\nfunction wrapInArray<T>(value: T): T[] {\n  return [value];\n}\n\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n  message: string;\n}\n\nconst response: ApiResponse<{ user: string }> = {\n  data: { user: \'John\' },\n  status: 200,\n  message: \'Success\'\n};',
                        explanation: 'Interfaces define contracts for object shapes. Generics create reusable components that work with multiple types.'
                    },
                    {
                        id: 't4',
                        title: 'Utility Types',
                        description: 'Use TypeScript\'s built-in utility types.',
                        code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n}\n\n// Make all properties optional\ntype PartialUser = Partial<User>;\n\n// Make all properties required\ntype RequiredUser = Required<User>;\n\n// Pick specific properties\ntype UserPreview = Pick<User, \'id\' | \'name\'>;\n\n// Omit properties\ntype UserWithoutPassword = Omit<User, \'password\'>;\n\n// Readonly\ntype ReadonlyUser = Readonly<User>;\n\n// Record\nconst userMap: Record<string, User> = {\n  \'john\': { id: 1, name: \'John\', email: \'john@example.com\', password: \'secret\' }\n};',
                        explanation: 'Utility types provide convenient transformations for existing types, reducing boilerplate.'
                    }
                ]
            },
            {
                id: 'ts-react',
                name: 'TypeScript with React',
                lessons: [
                    {
                        id: 't5',
                        title: 'React & TypeScript',
                        description: 'Use TypeScript with React for type-safe components.',
                        code: 'import React, { useState, useEffect, FC } from \'react\';\n\n// Props interface\ninterface GreetingProps {\n  name: string;\n  age?: number;\n}\n\n// Functional component with props\nconst Greeting: FC<GreetingProps> = ({ name, age }) => {\n  return (\n    <div>\n      <h1>Hello, {name}!</h1>\n      {age && <p>Age: {age}</p>}\n    </div>\n  );\n};\n\n// State with types\nconst Counter: FC = () => {\n  const [count, setCount] = useState<number>(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n};\n\n// Events\nconst Input: FC = () => {\n  const [value, setValue] = useState<string>(\'\');\n  \n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(e.target.value);\n  };\n  \n  return <input value={value} onChange={handleChange} />;\n};',
                        explanation: 'TypeScript integrates perfectly with React, providing type safety for props, state, events, and hooks.'
                    },
                    {
                        id: 't6',
                        title: 'Advanced React Types',
                        description: 'Type advanced React patterns.',
                        code: 'import React, { ReactNode, ComponentType } from \'react\';\n\n// Children with ReactNode\ninterface ContainerProps {\n  children: ReactNode;\n  className?: string;\n}\n\nconst Container: React.FC<ContainerProps> = ({ children, className }) => {\n  return <div className={className}>{children}</div>;\n};\n\n// Higher Order Component\ntype WithLoadingProps = {\n  isLoading: boolean;\n};\n\nfunction withLoading<P extends object>(\n  WrappedComponent: ComponentType<P>\n): React.FC<P & WithLoadingProps> {\n  return function WithLoadingComponent(props: P & WithLoadingProps) {\n    if (props.isLoading) {\n      return <div>Loading...</div>;\n    }\n    return <WrappedComponent {...props as P} />;\n  };\n}\n\n// Usage\nconst DataComponent: React.FC<{ data: string }> = ({ data }) => {\n  return <p>{data}</p>;\n};\n\nconst DataWithLoading = withLoading(DataComponent);\n\n// Render Props\ntype RenderProps = {\n  render: (data: string) => ReactNode;\n};\n\nconst DataProvider: React.FC<RenderProps> = ({ render }) => {\n  const data = \'Hello from render props!\';\n  return <>{render(data)}</>;\n};',
                        explanation: 'Advanced React patterns like HOCs and render props can be strongly typed with TypeScript.'
                    }
                ]
            }
        ]
    }
};

export const techStack = [
    { id: 'react', name: 'React', icon: 'fa-brands fa-react' },
    { id: 'angular', name: 'Angular', icon: 'fa-brands fa-angular' },
    { id: 'vuejs', name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
    { id: 'laravel', name: 'Laravel', icon: 'fa-brands fa-laravel' },
    { id: 'nodejs', name: 'Node.js', icon: 'fa-brands fa-node-js' },
    { id: 'python', name: 'Python', icon: 'fa-brands fa-python' },
    { id: 'css', name: 'CSS', icon: 'fa-brands fa-css3-alt' },
    { id: 'typescript', name: 'TypeScript', icon: 'fa-solid fa-code' }
];

