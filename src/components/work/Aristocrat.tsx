import AristocratLogoDark from '@assets/aristocrat_dark.svg';
import AristocratLogoLight from '@assets/aristocrat_light.svg';
import Tooltip from '@ui/Tooltip';
import TooltipList from '@ui/TooltipList';
import TooltipListItem from '@ui/TooltipListItem';
import WorkTimelineItem from '@ui/WorkTimelineItem';
import { useIsDarkMode } from '@ui/theme/useIsDarkMode';

const Aristocrat = () => {
  const isDarkMode = useIsDarkMode();
  return (
    <WorkTimelineItem
      period="Октябрь 2017 — Февраль 2025"
      company="GoGame in Plarium (Aristocrat)"
      companyTooltip="Aristocrat Leisure Limited — австралийская компания, основанная в 1953 году, со штаб-квартирой в Сиднее. Является одним из крупнейших в мире производителей игрового оборудования и технологий для казино, а также разработчиком мобильных и социальных игр. С 2017 года компанией владеет Plarium, Big Fish, Product Madness."
      position="Senior Frontend Developer"
      logo={isDarkMode ? <AristocratLogoDark /> : <AristocratLogoLight />}
    >
      <TooltipList>
        <TooltipListItem text="Участвовал в разработке системы для создания, управления и анализа рекламных интеграций для мобильных и десктопных игр" />

        <TooltipListItem
          text={
            <>
              Оптимизировал работу{' '}
              <Tooltip title="Шлюз API, который маршрутизирует запросы к соответствующим микросервисам и объединяет ответы">
                <span className="term">API-Gateway</span>
              </Tooltip>{' '}
              на{' '}
              <Tooltip title="Строго типизированный язык программирования, расширяющий JavaScript добавлением статической типизации, интерфейсов и других возможностей">
                <span className="term">TypeScript</span>
              </Tooltip>
              : переписал часть бизнес-логики и масштабировал сервис в
              <Tooltip title="Система оркестрации контейнеров для автоматического развертывания, масштабирования и управления контейнеризированными приложениями">
                <span className="term">Kubernetes</span>
              </Tooltip>
              . Это позволило выдерживать рост нагрузки, снизить время ответа на
              30% и улучшить стабильность работы сервиса.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Разработал на TypeScript микросервис сокетов
              <Tooltip title="Библиотека для двунаправленной связи в реальном времени между клиентами и сервером">
                <span className="term">Socket.IO</span>
              </Tooltip>
              . Это обеспечило проекту асинхронность в UI.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Настроил
              <Tooltip title="Стек Elasticsearch, Logstash и Kibana для поиска, анализа и визуализации логов">
                <span className="term">ELK</span>
              </Tooltip>
              стек и автоматизировал процессы сборки в
              <Tooltip title="Инструмент непрерывной интеграции и доставки (CI/CD), автоматизирующий процессы сборки и развертывания">
                <span className="term">Jenkins</span>
              </Tooltip>
              , что сократило время поиска ошибок и ускорило релизы.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Провел исследование на предмет утечек памяти, и аномалий в работе
              <Tooltip title="Шлюз API, который маршрутизирует запросы к соответствующим микросервисам и объединяет ответы">
                <span className="term">API</span>
              </Tooltip>
              , настроив
              <Tooltip title="Инструмент мониторинга производительности и сбора метрик">
                <span className="term">Prometheus</span>
              </Tooltip>
              для
              <Tooltip title="Серверная платформа для выполнения JavaScript вне браузера, основанная на движке V8">
                <span className="term">NodeJS</span>
              </Tooltip>
              <Tooltip title="Шлюз API, который маршрутизирует запросы к соответствующим микросервисам и объединяет ответы">
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
              <Tooltip title="JavaScript-библиотека для создания пользовательских интерфейсов на основе компонентного подхода">
                <span className="term">React</span>
              </Tooltip>
              и NodeJS ApiGateway с
              <Tooltip title="Платформа мониторинга ошибок и производительности приложений в реальном времени">
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
              <Tooltip title="Фреймворк для автоматизации end-to-end тестирования веб-приложений">
                <span className="term">Playwright</span>
              </Tooltip>
              (
              <Tooltip title="Строго типизированный язык программирования, расширяющий возможности JavaScript">
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
              <Tooltip title="Метрика Web Vitals, измеряющая время загрузки самого большого видимого элемента на странице">
                <span className="term">Largest Contentful Paint (LCP)</span>
              </Tooltip>
              метрику сайта путем дробления chunks во время сборки. Что
              сократило время загрузки и повысило удобство работы пользователей.
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default Aristocrat;
