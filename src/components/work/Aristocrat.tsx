import Tooltip from '@mui/material/Tooltip';
import TooltipList from '../common/TooltipList';
import TooltipListItem from '../common/TooltipListItem';
import WorkTimelineItem from '../common/WorkTimelineItem';
import AristocratLogo from '../../assets/aristocrat.svg';

const Aristocrat = () => {
  return (
    <WorkTimelineItem
      period="Октябрь 2017 — Февраль 2025"
      company="Aristocrat"
      position="Senior Frontend Developer"
      logo={<AristocratLogo />}
    >
      <TooltipList>
        <TooltipListItem text="Участвовал в разработке системы для создания, управления и анализа рекламных интеграций для мобильные и десктопные игры" />

        <TooltipListItem
          text={
            <>
              Улучшил производительность микросервиса
              <Tooltip
                title="Серверная платформа для выполнения JavaScript вне браузера, основанная на движке V8"
                arrow
              >
                <span className="term">NodeJS</span>
              </Tooltip>
              <Tooltip
                title="Шлюз API, который маршрутизирует запросы к соответствующим микросервисам и объединяет ответы"
                arrow
              >
                <span className="term">API-Gateway</span>
              </Tooltip>{' '}
              на
              <Tooltip
                title="Строго типизированный язык программирования, расширяющий JavaScript добавлением статической типизации, интерфейсов и других возможностей"
                arrow
              >
                <span className="term">TypeScript</span>
              </Tooltip>
              и масштабировал в
              <Tooltip
                title="Система оркестрации контейнеров для автоматического развертывания, масштабирования и управления контейнеризированными приложениями"
                arrow
              >
                <span className="term">Kubernetes</span>
              </Tooltip>
              на N
              <Tooltip
                title="Наименьшая и простейшая единица в Kubernetes, представляющая собой группу из одного или нескольких контейнеров, которые совместно используют хранилище и сеть"
                arrow
              >
                <span className="term">pod</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Разработал на TypeScript микросервис сокетов
              <Tooltip
                title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером"
                arrow
              >
                <span className="term">Socket.IO</span>
              </Tooltip>
              . Это обеспечило проекту асинхронность в UI.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Участвовал в настройке
              <Tooltip
                title="Стек Elasticsearch, Logstash и Kibana для поиска, анализа и визуализации логов"
                arrow
              >
                <span className="term">ELK</span>
              </Tooltip>
              стека и
              <Tooltip
                title="Инструмент непрерывной интеграции и доставки (CI/CD), автоматизирующий процессы сборки и развертывания"
                arrow
              >
                <span className="term">Jenkins</span>
              </Tooltip>
              Jobs
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Провел исследование на предмет утечек памяти, и аномалий в работе
              <Tooltip
                title="Шлюз API, который маршрутизирует запросы к соответствующим микросервисам и объединяет ответы"
                arrow
              >
                <span className="term">API</span>
              </Tooltip>
              , настроив
              <Tooltip
                title="Инструмент мониторинга производительности и сбора метрик"
                arrow
              >
                <span className="term">Prometheus</span>
              </Tooltip>
              для
              <Tooltip
                title="Серверная платформа для выполнения JavaScript вне браузера, основанная на движке V8"
                arrow
              >
                <span className="term">NodeJS</span>
              </Tooltip>
              <Tooltip
                title="Шлюз API, который маршрутизирует запросы к соответствующим микросервисам и объединяет ответы"
                arrow
              >
                <span className="term">ApiGateway</span>
              </Tooltip>
              .
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Улучшил скорость исправления UI ошибок, выполнив интеграцию
              <Tooltip
                title="JavaScript-библиотека для создания пользовательских интерфейсов на основе компонентного подхода"
                arrow
              >
                <span className="term">React</span>
              </Tooltip>
              и NodeJS ApiGateway с
              <Tooltip
                title="Платформа мониторинга ошибок и производительности приложений в реальном времени"
                arrow
              >
                <span className="term">Sentry</span>
              </Tooltip>
              .
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Внедрил новую единую платформу автоматизированного тестирования
              <Tooltip
                title="Фреймворк для автоматизации end-to-end тестирования веб-приложений"
                arrow
              >
                <span className="term">Playwright</span>
              </Tooltip>
              (
              <Tooltip
                title="Строго типизированный язык программирования, расширяющий возможности JavaScript"
                arrow
              >
                <span className="term">TypeScript</span>
              </Tooltip>
              ) в компанию.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Улучшил
              <Tooltip
                title="Метрика Web Vitals, измеряющая время загрузки самого большого видимого элемента на странице"
                arrow
              >
                <span className="term">Largest Contentful Paint (LCP)</span>
              </Tooltip>
              метрику сайта путем дробления chunks во время сборки.
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default Aristocrat;
