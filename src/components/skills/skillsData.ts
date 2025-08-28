import { SkillCategory, SkillDefinition } from './types';

// Определение навыков, сгруппированных по категориям
export const skillsByCategory: Record<SkillCategory, SkillDefinition[]> = {
  framework: [
    {
      name: 'Webpack',
      category: 'framework',
      showIcon: true,
      color: 'info',
      description:
        'Сборщик модулей JavaScript, который создает бандлы для веб-приложений',
    },
    {
      name: 'Vite',
      category: 'framework',
      showIcon: true,
      color: 'info',
      description:
        'Современный сборщик фронтенд-проектов с быстрым холодным стартом и горячей заменой модулей',
    },
    {
      name: 'Node.js',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'Среда выполнения JavaScript на стороне сервера на основе движка V8',
    },
    {
      name: 'React (18+)',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'JavaScript-библиотека для создания пользовательских интерфейсов на основе компонентного подхода',
    },
    {
      name: 'Tanstack Query',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'Библиотека для управления асинхронным состоянием в React-приложениях',
    },
    {
      name: 'Recharts',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'Библиотека для создания диаграмм и графиков в React-приложениях',
    },
    {
      name: 'D3',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'Мощная библиотека для визуализации данных и работы с графикой SVG, Canvas и HTML',
    },
    {
      name: 'Formik',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description: 'Библиотека для упрощения работы с формами в React',
    },
    {
      name: 'Redux',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'Предсказуемый контейнер состояния для JavaScript-приложений',
    },
    {
      name: 'koa',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description: 'Легковесный веб-фреймворк для Node.js нового поколения',
    },
    {
      name: 'Material UI',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'Библиотека React-компонентов, реализующих принципы Material Design',
    },
    {
      name: 'Ionic',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'Фреймворк для создания гибридных мобильных приложений с использованием веб-технологий',
    },
    {
      name: 'Styled Components',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'Библиотека для стилизации React-компонентов с использованием CSS-in-JS подхода',
    },
    {
      name: 'Socket.IO',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'Библиотека для двунаправленной связи в реальном времени между клиентами и сервером через WebSockets',
    },
  ],
  tool: [
    {
      name: 'SWC',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Сверхбыстрой компилятор для JavaScript/TypeScript, написанный на Rust',
    },
    {
      name: 'Babel',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Транспайлер JavaScript, который позволяет использовать новые возможности языка до их поддержки браузерами',
    },
    {
      name: 'axios',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description: 'Клиент HTTP для браузера и Node.js на основе Promise API',
    },
    {
      name: 'Lerna',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Инструмент для управления монорепозиториями JavaScript/TypeScript проектов',
    },
    {
      name: 'nx',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Мощный инструмент для монорепозиториев, сборки, тестирования и уп��авления зависимостями',
    },
    {
      name: 'npm',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description: 'Стандартный пакетный менеджер для Node.js',
    },
    {
      name: 'yarn',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Альтернативный быстрый и надёжный пакетный менеджер для JavaScript',
    },
    {
      name: 'GraphQL',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Язык запросов API и среда выполнения для выполнения этих запросов с существующими данными',
    },
    {
      name: 'Storybook',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Инструмент для изолированной разработки и тестирования UI компонентов',
    },
    {
      name: 'Figma',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Облачный инструмент для разработки интерфейсов и прототипирования с возможностью совместной работы',
    },
    {
      name: 'git',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Распределенная система контроля версий для отслеживания изменений в коде',
    },
    {
      name: 'PWA',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Подход к разработке веб-приложений, которые работают как нативные мобильные приложения',
    },
    {
      name: 'Service Workers',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Скрипты, работающие в фоне браузера для поддержки offline, push-уведомлений и кэширования ресурсов',
    },
  ],
  testing: [
    {
      name: 'Jest',
      category: 'testing',
      showIcon: true,
      color: 'warning',
      description:
        'JavaScript-фреймворк для тестирования с акцентом на простоту использования',
    },
    {
      name: 'Vitest',
      category: 'testing',
      showIcon: true,
      color: 'warning',
      description:
        'Современный быстрый тестовый фреймворк для проектов на Vite, совместимый с Jest API',
    },
    {
      name: 'Playwright',
      category: 'testing',
      color: 'warning',
      showIcon: true,
      description:
        'Фреймворк для автоматизации end-to-end тестирования веб-приложений в разных браузерах',
    },
    {
      name: 'Cypress',
      category: 'testing',
      color: 'warning',
      showIcon: true,
      description:
        'Инструмент для e2e-тестирования веб-приложений с визуальным интерфейсом',
    },
    {
      name: 'Puppeteer',
      category: 'testing',
      color: 'warning',
      showIcon: true,
      description:
        'Библиотека Node.js для управления браузером Chrome/Chromium через API протокола DevTools',
    },
  ],
  codeOrganization: [
    {
      name: 'React Profiling',
      category: 'codeOrganization',
      description:
        'Оптимизация веб-приложений для быстрой загрузки и отзывчивого интерфейса',
    },
    {
      name: 'Code-Splitting',
      category: 'codeOrganization',
      description:
        'Техника оптимизации загрузки, при которой код приложения разбивается на части, загружаемые по мере необходимости.',
    },
    {
      name: 'Lazy-loading',
      category: 'codeOrganization',
      description:
        'Загрузка ресурсов или компонентов только тогда, когда они действительно нужны пользователю.',
    },
    {
      name: 'Memoization',
      category: 'codeOrganization',
      description:
        'Оптимизация производительности за счёт кеширования результатов вычислений функций.',
    },
    {
      name: 'FSD (Feature-Sliced Design)',
      category: 'codeOrganization',
      description:
        'Feature-Sliced Design — архитектурный подход для масштабируемых фронтенд-проектов.',
    },
    {
      name: 'Atomic Design',
      category: 'codeOrganization',
      description:
        'Atomic Design — методология проектирования интерфейсов на основе атомарных компонентов.',
    },
    {
      name: 'Component-Based Architecture',
      category: 'codeOrganization',
      description:
        'Component-based architecture — организация кода на основе переиспользуемых компонентов.',
    },
    {
      name: 'Layered / Clean / Hexagonal Architecture',
      category: 'codeOrganization',
      description:
        'Layered architecture — разделение приложения на слои (presentation, domain, data и т.д.).',
    },
  ],
  devops: [
    {
      name: 'Jenkins',
      category: 'devops',
      color: 'pending', // используем наш кастомный цвет
      showIcon: true,
      description:
        'Инструмент непрерывной интеграции и доставки (CI/CD), автоматизирующий процессы сборки и развертывания',
    },
    {
      name: 'Kibana',
      category: 'devops',
      color: 'pending', // используем наш кастомный цвет
      showIcon: true,
      description:
        'Интерфейс визуализации для Elasticsearch, позволяющий анализировать и исследовать данные',
    },
    {
      name: 'Grafana',
      category: 'devops',
      color: 'pending', // используем наш кастомный цвет
      showIcon: true,
      description:
        'Платформа для мониторинга и анализа метрик с возможностью создания информативных дашбордов',
    },
    {
      name: 'HashiCorp Consul',
      category: 'devops',
      color: 'pending', // используем наш кастомный цвет
      showIcon: true,
      description:
        'Система сервис-дискавери и управления конфигурацией для микросервисной архитектуры',
    },
    {
      name: 'Sentry',
      category: 'devops',
      color: 'pending', // используем наш кастомный цвет
      showIcon: true,
      description:
        'Платформа мониторинга ошибок и производительности приложений в реальном времени',
    },
    {
      name: 'Prometheus',
      category: 'devops',
      color: 'pending', // используем наш кастомный цвет
      showIcon: true,
      description:
        'Система мониторинга и оповещения с размерной моделью данных временных рядов',
    },
    {
      name: 'Nginx',
      category: 'devops',
      color: 'pending', // используем наш кастомный цвет
      showIcon: true,
      description: 'Высокопроизводительный веб-сервер и обратный прокси-сервер',
    },
    {
      name: 'Kubernetes',
      category: 'devops',
      color: 'pending', // используем наш кастомный цвет
      showIcon: true,
      description:
        'Система оркестрации контейнеров для автоматического развертывания, масштабирования и управления контейнеризированными приложениями',
    },
    {
      name: 'Docker',
      category: 'devops',
      color: 'pending', // используем наш кастомный цвет
      showIcon: true,
      description:
        'Платформа для разработки, доставки и запуска приложений в контейнерах',
    },
  ],
  bugbounty: [],
};

// Названия категорий для отображения
export const categoryNames: Record<SkillCategory, string> = {
  framework: 'Основной стек',
  codeOrganization: 'Организация кода',
  tool: 'Инструменты',
  devops: 'DevOps',
  testing: 'Тестирование',
  bugbounty: 'Bug Bounty',
};

// Порядок отображения категорий
export const categoryOrder: SkillCategory[] = [
  'framework',
  'codeOrganization',
  'tool',
  'testing',
  'devops',
];

// Soft Skills вынесены отдельно
export const softSkills: {
  name: string;
  category: string;
  description?: string;
}[] = [
  {
    name: 'Teamwork, mentoring, and knowledge sharing',
    category: 'softskills',
    description: 'Командная работа, наставничество и передача опыта.',
  },
  {
    name: 'Task evaluation, decomposition, and delivery',
    category: 'softskills',
    description:
      'Умение оценивать задачи, декомпозировать и доводить до результата.',
  },
  {
    name: 'Communication with analysts, designers, and backend team',
    category: 'softskills',
    description: 'Коммуникация с аналитиками, дизайнерами, backend-командой.',
  },
  {
    name: 'Responsibility for product and code quality',
    category: 'softskills',
    description: 'Ответственность за качество продукта и код.',
  },
  {
    name: 'Willingness to participate in architecture, technology selection, and standards',
    category: 'softskills',
    description:
      'Готовность участвовать в архитектурных решениях, выбирать технологии и устанавливать стандарты.',
  },
];
