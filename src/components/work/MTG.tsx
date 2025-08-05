import MTGLogoDark from '@assets/mtg_dark.svg';
import MTGLogoLight from '@assets/mtg_light.svg';
import CustomTooltip from '@ui/CustomTooltip';
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
      position="Senior Frontend Developer"
      logo={isDarkMode ? <MTGLogoDark /> : <MTGLogoLight />}
    >
      <TooltipList>
        <TooltipListItem
          text={
            <>
              Разрабатываю коммерческий продукт для маркетологов в сфере GameDev
              с использованием
              <CustomTooltip title="Строго типизированный надмножество JavaScript, добавляющий статическую типизацию">
                <span className="term">TypeScript</span>
              </CustomTooltip>
              <CustomTooltip title="JavaScript-библиотека для создания пользовательских интерфейсов на основе компонентного подхода">
                <span className="term">React</span>
              </CustomTooltip>
              и
              <CustomTooltip title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером">
                <span className="term">Socket.IO</span>
              </CustomTooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Разрабатываю UI интерфейс для чатбота с
              <CustomTooltip title="Мультимодальная языковая модель от Google, способная генерировать текст, анализировать изображения и выполнять сложные задачи ИИ">
                <span className="term">Gemini AI</span>
              </CustomTooltip>
            </>
          }
        />
        <TooltipListItem
          text={
            <>
              Провожу
              <CustomTooltip title="Систематический процесс проверки кода другими разработчиками для выявления ошибок, улучшения качества и обмена знаниями">
                <span className="term">Code Review</span>
              </CustomTooltip>
              , выполняю сборку и поддержку UI релизов через
              <CustomTooltip title="Инструмент непрерывной интеграции и доставки (CI/CD), автоматизирующий процессы сборки и развертывания">
                <span className="term">Jenkins</span>
              </CustomTooltip>
              и внутренних инфраструктурных проектов
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Занимаюсь рефакторингом монорепозитория UI пакетов и миграцией на
              <CustomTooltip title="Строго типизированный язык программирования, расширяющий JavaScript добавлением статической типизации, интерфейсов и других возможностей">
                <span className="term">TypeScript</span>
              </CustomTooltip>
              и
              <CustomTooltip title="Современный инструмент сборки, предлагающий быструю разработку с горячей перезагрузкой и оптимизированную сборку для продакшена">
                <span className="term">Vite</span>
              </CustomTooltip>
              (
              <CustomTooltip title="Speedy Web Compiler - быстрая альтернатива Babel для транспиляции JavaScript/TypeScript, написанная на Rust">
                <span className="term">SWC</span>
              </CustomTooltip>
              )
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Разрабатываю асинхронную связь UI с микросервисами
              <CustomTooltip title="Фреймворк для построения веб-приложений и сервисов на платформе .NET с открытым исходным кодом">
                <span className="term">ASP.NET</span>
              </CustomTooltip>
              с помощью
              <CustomTooltip title="Брокер сообщений для асинхронной передачи данных между сервисами">
                <span className="term">RabbitMQ</span>
              </CustomTooltip>
              с
              <CustomTooltip title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером">
                <span className="term">Socket.IO</span>
              </CustomTooltip>
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
              <CustomTooltip title="Инструмент статического анализа кода для выявления проблемных паттернов в JavaScript/TypeScript">
                <span className="term">ESlint</span>
              </CustomTooltip>
              /
              <CustomTooltip title="Инструмент для автоматического форматирования кода по заданным правилам стиля">
                <span className="term">Prettier</span>
              </CustomTooltip>
              правила, общие инструменты компонентного тестирования с
              <CustomTooltip title="Фреймворк для автоматизации end-to-end тестирования веб-приложений">
                <span className="term">Playwright</span>
              </CustomTooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Улучшил производительность
              <CustomTooltip title="Компонент таблицы с расширенной функциональностью для Material UI, поддерживающий большие наборы данных, фильтрацию и сортировку">
                <span className="term">MUI X-Data-Grid</span>
              </CustomTooltip>
              с помощью инструментов профилирования, улучшив метрику
              <CustomTooltip title="Метрика Web Vitals, измеряющая время загрузки самого большого видимого элемента на странице">
                <span className="term">LCP</span>
              </CustomTooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Настроил централизованное управление секретами с
              <CustomTooltip title="Инструмент для безопасного хранения и доступа к секретам, токенам и другим конфиденциальным данным">
                <span className="term">Vault</span>
              </CustomTooltip>
              и регистрацию
              <CustomTooltip title="Серверная платформа для выполнения JavaScript вне браузера, основанная на движке V8">
                <span className="term">NodeJS</span>
              </CustomTooltip>
              микросервисов сервисов через
              <CustomTooltip title="Механизм для обнаружения и регистрации доступных сервисов в распределенной системе">
                <span className="term">Service Discovery</span>
              </CustomTooltip>
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default MTG;
