import Tooltip from '@mui/material/Tooltip';
import TooltipList from '../common/TooltipList';
import TooltipListItem from '../common/TooltipListItem';
import WorkTimelineItem from '../common/WorkTimelineItem';
import MTGLogo from '../../assets/mtg.svg';

const MTG = () => {
  return (
    <WorkTimelineItem
      period="Февраль 2025 — настоящее время"
      company="Modern Times Group"
      position="Expert Frontend Developer"
      logo={<MTGLogo />}
    >
      <TooltipList>
        <TooltipListItem
          text={
            <>
              Разрабатываю коммерческий продукт для маркетологов
              <Tooltip
                title="Платформа для управления маркетинговыми кампаниями и аналитикой в игровой индустрии"
                arrow
              >
                <span className="term">GoGame</span>
              </Tooltip>
              с использованием
              <Tooltip
                title="Строго типизированный надмножество JavaScript, добавляющий статическую типизацию"
                arrow
              >
                <span className="term">TypeScript</span>
              </Tooltip>
              <Tooltip
                title="JavaScript-библиотека для создания пользовательских интерфейсов на основе компонентного подхода"
                arrow
              >
                <span className="term">React</span>
              </Tooltip>
              и
              <Tooltip
                title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером"
                arrow
              >
                <span className="term">Socket.IO</span>
              </Tooltip>
              в сфере
              <Tooltip
                title="Индустрия разработки виде��игр, включающая создание, проектирование и монетизацию игровых продуктов"
                arrow
              >
                <span className="term">GameDev</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Провожу
              <Tooltip
                title="Систематический процесс проверки кода другими разработчиками для выявления ошибок, улучшения качества и обмена знаниями"
                arrow
              >
                <span className="term">Code Review</span>
              </Tooltip>
              , выполняю сборку и поддержку UI релизов через
              <Tooltip
                title="Инструмент непрерывной интеграции и доставки (CI/CD), автоматизирующий процессы сборки и развертывания"
                arrow
              >
                <span className="term">Jenkins</span>
              </Tooltip>
              и внутренних инфраструктурных проектов
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Занимаюсь рефакторингом монорепозитория UI пакетов и миграцией на
              <Tooltip
                title="Строго типизированный надмножество JavaScript с статической типизацией"
                arrow
              >
                <span className="term">TypeScript</span>
              </Tooltip>
              и Vite (SWC)
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Разрабатываю асинхронную связь UI с микросервисами
              <Tooltip
                title="Фреймворк для построения веб-приложений и сервисов на платформе .NET с открытым исходным кодом"
                arrow
              >
                <span className="term">ASP.NET</span>
              </Tooltip>
              с помощью
              <Tooltip
                title="Брокер сообщений для асинхронной передачи данных между сервисами"
                arrow
              >
                <span className="term">RabbitMQ</span>
              </Tooltip>
              с
              <Tooltip
                title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером"
                arrow
              >
                <span className="term">Socket.IO</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>Обеспечиваю решение конфликтов при обновлении зависимостей.</>
          }
        />

        <TooltipListItem
          text={
            <>
              Обеспечил общие
              <Tooltip
                title="Инструмент статического анализа кода для выявления проблемных паттернов в JavaScript/TypeScript"
                arrow
              >
                <span className="term">ESlint</span>
              </Tooltip>
              /
              <Tooltip
                title="Инструмент для автоматического форматирования кода по заданным правилам стиля"
                arrow
              >
                <span className="term">Prettier</span>
              </Tooltip>
              правила, общие инструменты компонентного тестирования с
              <Tooltip
                title="Фреймворк для автоматизации end-to-end тестирования веб-приложений"
                arrow
              >
                <span className="term">Playwright</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Улучшил производительность
              <Tooltip
                title="Компонент таблицы с расширенной функциональностью для Material UI, поддерживающий большие наборы данных, фильтрацию и сортировку"
                arrow
              >
                <span className="term">MUI X-Data-Grid</span>
              </Tooltip>
              с помощью инструментов профилирования, улучшив метрику
              <Tooltip
                title="Метрика Web Vitals, измеряющая время загрузки самого большого видимого элемента на странице"
                arrow
              >
                <span className="term">LCP</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Настроил централизованное управление секретами с
              <Tooltip
                title="Инструмент для безопасного хранения и доступа к секретам, токенам и другим конфиденциальным данным"
                arrow
              >
                <span className="term">Vault</span>
              </Tooltip>
              и регистрацию NodeJS микросервисов сервисов через
              <Tooltip
                title="Механизм для обнаружения и регистрации доступных сервисов в распределенной системе"
                arrow
              >
                <span className="term">Service Discovery</span>
              </Tooltip>
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default MTG;
