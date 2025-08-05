import AristocratLogoDark from '@assets/aristocrat_dark.svg';
import AristocratLogoLight from '@assets/aristocrat_light.svg';
import CustomTooltip from '@ui/CustomTooltip';
import TooltipList from '@ui/TooltipList';
import TooltipListItem from '@ui/TooltipListItem';
import WorkTimelineItem from '@ui/WorkTimelineItem';
import { useIsDarkMode } from '@ui/theme/useIsDarkMode';

const Aristocrat = () => {
  const isDarkMode = useIsDarkMode();
  return (
    <WorkTimelineItem
      period="Октябрь 2017 — Февраль 2025"
      company="Aristocrat"
      position="Senior Frontend Developer"
      logo={isDarkMode ? <AristocratLogoDark /> : <AristocratLogoLight />}
    >
      <TooltipList>
        <TooltipListItem text="Участвовал в разработке системы для создания, управления и анализа рекламных интеграций для мобильные и десктопные игры" />

        <TooltipListItem
          text={
            <>
              Улучшил производительность микросервиса
              <CustomTooltip title="Серверная платформа для выполнения JavaScript вне браузера, основанная на движке V8">
                <span className="term">NodeJS</span>
              </CustomTooltip>
              <CustomTooltip title="Шлюз API, который маршрутизирует запросы к соответствующим микросервисам и объединяет ответы">
                <span className="term">API-Gateway</span>
              </CustomTooltip>{' '}
              на
              <CustomTooltip title="Строго типизированный язык программирования, расширяющий JavaScript добавлением статической типизации, интерфейсов и других возможностей">
                <span className="term">TypeScript</span>
              </CustomTooltip>
              и масштабировал в
              <CustomTooltip title="Система оркестрации контейнеров для автоматического развертывания, масштабирования и управления контейнеризированными приложениями">
                <span className="term">Kubernetes</span>
              </CustomTooltip>
              на N
              <CustomTooltip title="Наименьшая и простейшая единица в Kubernetes, представляющая собой группу из одного или нескольких контейнеров, которые совместно используют хранилище и сеть">
                <span className="term">pod</span>
              </CustomTooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Разработал на TypeScript микросервис сокетов
              <CustomTooltip title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером">
                <span className="term">Socket.IO</span>
              </CustomTooltip>
              . Это обеспечило проекту асинхронность в UI.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Участвовал в настройке
              <CustomTooltip title="Стек Elasticsearch, Logstash и Kibana для поиска, анализа и визуализации логов">
                <span className="term">ELK</span>
              </CustomTooltip>
              стека и
              <CustomTooltip title="Инструмент непрерывной интеграции и доставки (CI/CD), автоматизирующий процессы сборки и развертывания">
                <span className="term">Jenkins</span>
              </CustomTooltip>
              Jobs
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Провел исследование на предмет утечек памяти, и аномалий в работе
              <CustomTooltip title="Шлюз API, который маршрутизирует запросы к соответствующим микросервисам и объединяет ответы">
                <span className="term">API</span>
              </CustomTooltip>
              , настроив
              <CustomTooltip title="Инструмент мониторинга производительности и сбора метрик">
                <span className="term">Prometheus</span>
              </CustomTooltip>
              для
              <CustomTooltip title="Серверная платформа для выполнения JavaScript вне браузера, основанная на движке V8">
                <span className="term">NodeJS</span>
              </CustomTooltip>
              <CustomTooltip title="Шлюз API, который маршрутизирует запросы к соответствующим микросервисам и объединяет ответы">
                <span className="term">ApiGateway</span>
              </CustomTooltip>
              .
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Улучшил скорость исправления UI ошибок, выполнив интеграцию
              <CustomTooltip title="JavaScript-библиотека для создания пользовательских интерфейсов на основе компонентного подхода">
                <span className="term">React</span>
              </CustomTooltip>
              и NodeJS ApiGateway с
              <CustomTooltip title="Платформа мониторинга ошибок и производительности приложений в реальном времени">
                <span className="term">Sentry</span>
              </CustomTooltip>
              .
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Внедрил новую единую платформу автоматизированного тестирования
              <CustomTooltip title="Фреймворк для автоматизации end-to-end тестирования веб-приложений">
                <span className="term">Playwright</span>
              </CustomTooltip>
              (
              <CustomTooltip title="Строго типизированный язык программирования, расширяющий возможности JavaScript">
                <span className="term">TypeScript</span>
              </CustomTooltip>
              ) в компанию.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Улучшил
              <CustomTooltip title="Метрика Web Vitals, измеряющая время загрузки самого большого видимого элемента на странице">
                <span className="term">Largest Contentful Paint (LCP)</span>
              </CustomTooltip>
              метрику сайта путем дробления chunks во время сборки.
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default Aristocrat;
