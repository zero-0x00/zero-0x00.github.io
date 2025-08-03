import { SkillCategory, SkillDefinition } from './types';

// Определение навыков, сгруппированных по категориям
export const skillsByCategory: Record<SkillCategory, SkillDefinition[]> = {
  language: [
    {
      name: 'Typescript',
      category: 'language',
      color: 'primary',
      showIcon: true,
      description:
        'Строго типизированный надмножество JavaScript, добавляющий статическую типизацию',
    },
    {
      name: 'JavaScript',
      category: 'language',
      color: 'primary',
      showIcon: true,
      description:
        'Мультипарадигменный язык программирования для веб-разработки',
    },
  ],
  framework: [
    {
      name: 'Node.js',
      category: 'framework',
      color: 'info',
      showIcon: true,
      description:
        'Среда выполнения JavaScript на стороне сервера на основе движка V8',
    },
    {
      name: 'ReactJS',
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
      name: 'Webpack',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Сборщик модулей JavaScript, который создает бандлы для веб-приложений',
    },
    {
      name: 'Vite',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Современный сборщик фронтенд-проектов с быстрым холодным стартом и горячей заменой модулей',
    },
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
      name: 'Lerna + nx',
      category: 'tool',
      showIcon: true,
      color: 'success',
      description:
        'Инструменты для управления JavaScript-проектами с множеством пакетов',
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
      color: 'success',
      description:
        'Распределенная система контроля версий для отслеживания изменений в коде',
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
      name: 'React Testing Library',
      category: 'testing',
      showIcon: true,
      color: 'warning',
      description:
        'Набор инструментов для тестирования React-компонентов, ориентированной на пользователя',
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
    {
      name: 'TDD',
      category: 'testing',
      color: 'warning',
      description:
        'Методология разработки, при которой сначала пишутся тесты, а затем код, удовлетворяющий этим тестам',
    },
    {
      name: 'BDD',
      category: 'testing',
      color: 'warning',
      description:
        'Методология разработки, основанная на поведении системы с точки зрения пользователя',
    },
  ],
  methodology: [
    {
      name: 'Progressive Web Apps',
      category: 'methodology',
      showIcon: true,
      description:
        'Подход к разработке веб-приложений, которые работают как нативные мобильные приложения',
    },
    {
      name: 'REST API',
      category: 'methodology',
      description:
        'Архитектурный стиль взаимодействия компонентов распределенного приложения через HTTP',
    },
    {
      name: 'Web Performance',
      category: 'methodology',
      description:
        'Оптимизация веб-приложений для быстрой загрузки и отзывчивого интерфейса',
    },
    {
      name: 'Agile',
      category: 'methodology',
      description: 'Гибкая методология разработки программного обеспечения',
    },
    {
      name: 'Scrum',
      category: 'methodology',
      description:
        'Гибкая методология для управления проектами, реализующий принципы Agile',
    },
    {
      name: 'Waterfall',
      category: 'methodology',
      description: 'Каскадная модель разработки программного обеспечения',
    },
    {
      name: 'Kanban',
      category: 'methodology',
      description:
        'Система организации разработки и управления проектами с акцентом на бережливое производство',
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
    {
      name: 'CI/CD',
      category: 'devops',
      color: 'pending', // используем наш кастомный цвет
      description:
        'Непрерывная интеграция и непрерывная доставка - практики автоматизации разработки',
    },
  ],
  bugbounty: [],
};

// Названия категорий для отображения
export const categoryNames: Record<SkillCategory, string> = {
  language: 'Языки программирования',
  framework: 'Фреймворки и библиотеки',
  tool: 'Инструменты',
  devops: 'DevOps',
  methodology: 'Методологии',
  testing: 'Тестирование',
  bugbounty: 'Bug Bounty',
};

// Порядок отображения категорий
export const categoryOrder: SkillCategory[] = [
  'language',
  'framework',
  'tool',
  'testing',
  'devops',
  'methodology',
];
