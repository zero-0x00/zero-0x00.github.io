'use client';

import MTGLogoDark from '@assets/mtg_dark.svg';
import MTGLogoLight from '@assets/mtg_light.svg';
import Tooltip from '@ui/Tooltip';
import TooltipList from '@ui/TooltipList';
import TooltipListItem from '@ui/TooltipListItem';
import WorkTimelineItem from '@ui/WorkTimelineItem';
import { useIsDarkMode } from '@ui/theme/useIsDarkMode';

const MTG = () => {
  const isDarkMode = useIsDarkMode();
  return (
    <WorkTimelineItem
      period="Февраль 2025 — настоящее время"
      company="GoGame in Plarium (MTG)"
      companyTooltip="Modern Times Group (MTG) — шведская международная медиа-компания, основанная в 1987 году, со штаб-квартирой в Стокгольме. Специализируется на цифровых развлечениях, киберспорте и разработке мобильных игр через свои подразделения ESL Gaming и InnoGames. С 2025 года компанией владеет Plarium."
      position="Lead Frontend Developer"
      logo={isDarkMode ? <MTGLogoDark /> : <MTGLogoLight />}
      className={'section'}
    >
      <TooltipList>
        <TooltipListItem
          text={
            <>
              Веду менторство разработчиков, провожу регулярные 1-on-1 сессии,
              код-ревью и помогаю с профессиональным ростом, что повысило их
              продуктивность и техническую экспертизу команды.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Интегрирую AI инструменты (
              <Tooltip title="Инструмент для помощи разработчикам, использующий ИИ для автодополнения кода и генерации решений">
                <span className="term">GitHub Copilot</span>
              </Tooltip>
              ) в рабочий процесс команды, что ускорило разработку и улучшило
              качество кода.
            </>
          }
        />
        <TooltipListItem
          text={
            <>
              Разрабатываю коммерческий продукт для маркетологов в сфере GameDev
              с использованием
              <Tooltip title="Строго типизированный надмножество JavaScript, добавляющий статическую типизацию">
                <span className="term">TypeScript</span>
              </Tooltip>
              <Tooltip title="JavaScript-библиотека для создания пользовательских интерфейсов на основе компонентного подхода">
                <span className="term">React</span>
              </Tooltip>
              и
              <Tooltip title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером">
                <span className="term">Socket.IO</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Разрабатываю UI интерфейс для интеграции AI в аналитические
              инструменты
            </>
          }
        />

        <TooltipListItem
          text={<>Занимаюсь разработкой монорепозитория Typescript UI Kit</>}
        />

        <TooltipListItem
          text={
            <>
              Реализовал асинхронное взаимодействие интерфейса с микросервисами
              <Tooltip title="Фреймворк для построения веб-приложений и сервисов на платформе .NET с открытым исходным кодом">
                <span className="term">ASP.NET</span>
              </Tooltip>
              (
              <Tooltip title="Брокер сообщений для асинхронной передачи данных между сервисами">
                <span className="term">RabbitMQ</span>
              </Tooltip>
              ,{' '}
              <Tooltip title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером">
                <span className="term">Socket.IO</span>
              </Tooltip>
              ), что повысило стабильность и снизило задержки.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Настроил процесс обновления зависимостей так, чтобы команда могла
              обновляться без простоев и ошибок.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Обеспечил общие
              <Tooltip title="Инструмент статического анализа кода для выявления проблемных паттернов в JavaScript/TypeScript">
                <span className="term">ESlint</span>
              </Tooltip>
              /
              <Tooltip title="Инструмент для автоматического форматирования кода по заданным правилам стиля">
                <span className="term">Prettier</span>
              </Tooltip>
              правила, общие инструменты компонентного тестирования с
              <Tooltip title="Фреймворк для автоматизации end-to-end тестирования веб-приложений">
                <span className="term">Playwright</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Улучшил производительность
              <Tooltip title="Компонент таблицы с расширенной функциональностью для Material UI, поддерживающий большие наборы данных, фильтрацию и сортировку">
                <span className="term">MUI X-Data-Grid</span>
              </Tooltip>
              с помощью инструментов профилирования, дробления chunks,
              tree-shaking и
              <Tooltip title="Техника оптимизации, которая удаляет неиспользуемый код из финальной сборки, значительно уменьшая её размер">
                <span className="term">tree-shaking</span>
              </Tooltip>
              и перехода с
              <Tooltip title="Формат модулей Node.js, использующий синхронную загрузку через require() и module.exports">
                <span className="term">CommonJS</span>
              </Tooltip>
              на
              <Tooltip title="ECMAScript Modules - стандартный формат модулей JavaScript, использующий import/export с поддержкой асинхронной загрузки">
                <span className="term">ESM</span>
              </Tooltip>
              модули.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Настроил централизованное управление секретами с
              <Tooltip title="Инструмент для безопасного хранения и доступа к секретам, токенам и другим конфиденциальным данным">
                <span className="term">Vault</span>
              </Tooltip>
              и регистрацию
              <Tooltip title="Серверная платформа для выполнения JavaScript вне браузера, основанная на движке V8">
                <span className="term">NodeJS</span>
              </Tooltip>
              микросервисов сервисов через
              <Tooltip title="Механизм для обнаружения и регистрации доступных сервисов в распределенной системе">
                <span className="term">Service Discovery</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Внедрил практики Code Review и автоматизированного тестирования,
              что повысило качество кода и снизило количество багов в продуктах.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Инициировал переход на современные UI-фреймворки и инструменты,
              что ускорило разработку и позволило команде быстрее запускать
              новые проекты.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Внедрил автоматизацию сборки и деплоя, что сократило время вывода
              новых фич на продакшн и повысило стабильность релизов.
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default MTG;
