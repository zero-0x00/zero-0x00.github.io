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
      company="Modern Times Group"
      companyTooltip="Modern Times Group (MTG) — шведская международная медиа-компания, основанная в 1987 году, со штаб-квартирой в Стокгольме. Специализируется на цифровых развлечениях, киберспорте и разработке мобильных игр через свои подразделения ESL Gaming и InnoGames. С 2025 года компанией владеет Plarium."
      position="Senior Frontend Developer"
      logo={isDarkMode ? <MTGLogoDark /> : <MTGLogoLight />}
    >
      <TooltipList>
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
              Разрабатываю UI интерфейс для чатбота с
              <Tooltip title="Мультимодальная языковая модель от Google, способная генерировать текст, анализировать изображения и выполнять сложные задачи ИИ">
                <span className="term">Gemini AI</span>
              </Tooltip>
            </>
          }
        />
        <TooltipListItem
          text={
            <>
              Провожу
              <Tooltip title="Систематический процесс проверки кода другими разработчиками для выявления ошибок, улучшения качества и обмена знаниями">
                <span className="term">Code Review</span>
              </Tooltip>
              , выполняю сборку и поддержку UI релизов через
              <Tooltip title="Инструмент непрерывной интеграции и доставки (CI/CD), автоматизирующий процессы сборки и развертывания">
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
              <Tooltip title="Строго типизированный язык программирования, расширяющий JavaScript добавлением статической типизации, интерфейсов и других возможностей">
                <span className="term">TypeScript</span>
              </Tooltip>
              и
              <Tooltip title="Современный инструмент сборки, предлагающий быструю разработку с горячей перезагрузкой и оптимизированную сборку для продакшена">
                <span className="term">Vite</span>
              </Tooltip>
              (
              <Tooltip title="Speedy Web Compiler - быстрая альтернатива Babel для транспиляции JavaScript/TypeScript, написанная на Rust">
                <span className="term">SWC</span>
              </Tooltip>
              )
            </>
          }
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
              с помощью инструментов профилирования, дробления chunks и
              <Tooltip title="Техника оптимизации, которая удаляет неиспользуемый код из финальной сборки, значительно уменьшая её размер">
                <span className="term">tree-shaking</span>
              </Tooltip>
              и перехода с
              <Tooltip title="Формат модулей Node.js, использующий синхронную загрузку через require() и module.exports">
                <span className="term">Commonjs</span>
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
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default MTG;
